
export default function Login(){

    return (
        <header className="w-full h-screen border-2 border-gray-700 bg-white">
            <nav className="w-full h-20 flex justify-between p-5 border-2 border-amber-500 bg-white">
                <h1 className="text-black">MindNote</h1>
                <div className="w-50 flex gap-5">
                    <button className="text-black cursor-pointer">Iniciar Sesion</button>
                    <button className="bg-blue-500 rounded w-20 cursor-pointer">Registrarse</button>
                </div>           
            </nav>
            <div className="w-full h-150 flex flex-col justify-center items-center border-3 border-amber-600">
                <h1 className="text-black font-bold text-4xl">Un espacio donde tus ideas se unen</h1>
                <h1 className="text-black font-bold text-3xl">Organizacion de tareas de una forma minimalista</h1>
                <p className="text-black font-medium text-2xl text-center">Conecta con tu equipo, conecta con tus responsabilidad sin sentirte perdido</p>
                <div className="flex gap-5 mt-5">
                    <button className="bg-blue-500 rounded w-30 cursor-pointer">Iniciar Sesion</button>
                    <button className="bg-blue-500 rounded w-30 cursor-pointer">Registrarse</button>
                </div>

            </div>
        </header>
    )
}

