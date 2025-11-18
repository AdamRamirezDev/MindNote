"use client";

import Link from "next/link";

export default function Tablero(){




    return (
        <div className="w-full h-screen flex flex-row bg-neutral-900">
            <div className="w-[30%] h-screen flex flex-col items-center gap-5">
                <div className="w-[90%] h-[5%] flex justify-center items-center rounded-2xl mt-5 border-2 border-neutral-700">
                    <Link
                        href="/Dashboard"
                        className="cursor-pointer"
                    > Dashboard- Icono
                    </Link>
                </div>
                <div className="w-[90%] h-[85%] border-2 rounded-2xl border-neutral-700">
                    <div className="w-full h-[7%]  flex justify-center items-center border-b-2 border-neutral-700">
                        <h1 className="text-white text-left font-light text-sm">Icono - Bandeja de entrada</h1>
                    </div>
                    <div className="w-[95%] h-[85%] flex flex-col justify-start items-center rounded mt-3 m-auto cursor-pointer">
                        <input
                            className="w-[98%] h-[5%] rounded mt-2 border-2 border-neutral-800 p-2 bg-neutral-800 text-sm"
                            placeholder="Añade una tarjeta"
                        >
                        </input>
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
                        <div className="w-full h-[7%] border-b-2 border-b-neutral-700">
                            <h1 className="text-left text-white p-3">Nombre del tablero</h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}