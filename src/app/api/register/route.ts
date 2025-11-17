import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

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

    return NextResponse.json({  message: "Usuario creado exitosamente"});

    } catch ( error ){
        console.error("Error en el registro de usuario:", error);
        return NextResponse.json({ error: "Error en el servidor "}, { status: 500});  
    }
}