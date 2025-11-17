import NextAuth from "next-auth"

import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const handler = NextAuth({

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Correo", type: "text"},
                password: { label: "Contraseña", type: "password"},
            },

            async authorize(credentials){
                if(!credentials?.email || !credentials.password){
                    throw new Error("Debes ingresar tu correo y contrasdeña");
                }
                
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });

                 if(!user){
                    throw new Error("Usuario no encontrado");
                 }

                 const match = await bcrypt.compare(credentials.password, user.password);
                 
                 if(!match){
                    throw new Error("Contraseña incorrecta");
                 }

                 return {
                    id: user.id,
                    email: user.email,
                };
            },
        }),
    ],
    pages: {
        signIn: "/Login",
    },
    session: {
        strategy: "jwt",
    },
});

export { handler as GET, handler as POST};
