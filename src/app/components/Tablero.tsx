"use client";

export default function Tablero(){




    return (
        <div className="w-full h-screen flex flex-row bg-neutral-900">
            <div className="w-[30%] h-screen flex flex-col items-center gap-5">
                <div className="w-[90%] h-[5%] rounded-2xl mt-5 border-1 border-neutral-700">
                    <h1 className="text-white text-1xl text-center">Boton de inicio</h1>
                </div>
                <div className="w-[90%] h-[85%] border-2 rounded-2xl border-neutral-700">
                    <div className="w-full h-[7%]  flex justify-center items-center border-b-2 border-neutral-700">
                        <h1 className="text-white text-left font-light text-sm">Icono - Bandeja de entrada</h1>
                    </div>
                    <div className="w-[95%] h-[4%] rounded mt-3 m-auto bg-neutral-700 border-1 border-neutral-700 cursor-pointer">
                        <h1 className="text-center text-sm">Añade una tarjeta</h1>
                    </div>
                </div>
            </div>

            {/* Seccion de tarjetas */}
            <div className="w-[70%] h-screen flex flex-col items-center">
                <div className="w-full h-[5%] rounded-2xl mt-5">
                    <div className="w-[97%] h-[100%] rounded-2xl">
                        <h1 className="border-none">Informacion</h1>
                    </div>
                </div>
                <div className="w-full h-[90%] flex justify-center items-center">
                    <div className="w-[95%] h-[95%] border-2 rounded-2xl border-1 border-neutral-700">

                    </div>
                </div>
            </div>
        </div>
    )
}