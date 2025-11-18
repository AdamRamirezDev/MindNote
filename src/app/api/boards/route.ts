import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request: Request){
    try {

        const session = await getServerSession(authOptions);
        if(!session?.user?.id){
            return NextResponse.json({ error: "No autorizado" }, {status: 401});
        }

        const { title } = await request.json();

        if(!title || title.trim() === ""){
            return NextResponse.json({error: "Titulo requerido"}, {status: 400});
        }

        const newBoard = await prisma.board.create({
            data: {
                title,
                user: {
                    connect: { id: session.user.id }
                }
            },
        });

        return NextResponse.json(newBoard);

    } catch( error ){
        console.log("Error creado Board: ", error)
        return NextResponse.json({error: "Error del servidor"}, {status: 500})
    }
}

export async function GET(){
    const session = await getServerSession(authOptions);

    if(!session?.user?.id){
        return NextResponse.json({ error: "No autorizado "}, { status: 401 });
    }

    const boards = await prisma.board.findMany({
        where: {
            userId: session.user.id
        },
        orderBy: { createdAt: "desc"}
    });

    return NextResponse.json(boards);
}
