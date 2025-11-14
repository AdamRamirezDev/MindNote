import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';


const prisma = new PrismaClient();

export async function POST(req: Request){

    try {
        const { email, password } = await req.json();

        if(!email || !password){
            return NextResponse.json(
                { error: "Faltan campos"},
                { status: 400}
            );
        }

    const userExist = await prisma.user.findUnique({
        where: { email },
    });

    if(userExist){
        return NextResponse.json(
            { error: "El usuario ya existe"},
            { status: 400}
        );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
        data: {
            email, 
            password: hashedPassword,
        },
    });

    return NextResponse.json({  message: "Usuario creado exitosamene"});

    } catch ( error ){
        console.error("Error en el registro de usuario:", error);
        return NextResponse.json({ error: "Error en el servidor "}, { status: 500});  
    }
}