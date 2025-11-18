import prisma from "@/lib/prisma";
import Tablero from "@/app/components/Tablero";

interface BoardPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function BoadPage({params}: BoardPageProps){
    const {id} = await params;
    
    const board = await prisma.board.findUnique({
        where: { id }
    });

    if(!board){
        return <h1 className="font-bold">Tablero no encontrado</h1>
    }

    return (
        
        <Tablero>

        </Tablero>
    )

}