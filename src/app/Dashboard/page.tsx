import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard(){
    const session = await getServerSession();
    console.log("SESSION:", session);

    if(!session) redirect("/Login");

    return (
    <div className="w-full h-screen bg-white flex flex-row border-4 border-black">
        <div className="w-70 h-screen border-4 bg-amber-100 border-amber-400">
            <h1 className="text-black">Hola fulanito</h1>
            <div className="w-full h-70 border-2 border-black mt-5">
                <div className="w-full rounded flex justify-center items-center border-2 border-black cursor-pointer">
                    <h1 className="text-black">Tableros</h1>
                </div>
                <div className="w-full rounded flex justify-center items-center border-2 border-black cursor-pointer">
                    <h1 className="text-black">Notas</h1>
                </div>
            </div>
        </div>
        <div className="w-full h-screen flex flex-col border-4 border-blue-700 bg-blue-300">
            <div className="w-[90%] h-20 border-2 flex flex-row items-start border-black">
                <div className="w-[90%] h-20 border-2 border-black">
                </div>
                <button className="w-20 h-20 border-2 cursor-pointer bg-blue-500">Crear</button>
            </div>
            <div className="w-full h-[90%] border-5 border-black p-5">
                    
            </div>            
        </div>

    </div>
    )
}