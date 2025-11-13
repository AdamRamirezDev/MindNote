
export default function Login(){

    return (
        <header className="w-full border-2 border-gray-700 bg-white">
            <nav className="w-full h-[20%] flex justify-between p-5 border-2 border-amber-500 bg-white">
                <h1 className="text-black">MindNote</h1>
                <div>
                    <button className="text-black">Iniciar Sesion</button>
                    <button className="bg-blue-500 rounded w-20">Registrarse</button>
                </div>           
            </nav>
            <div>
                <h1>Un espacio donde tus ideas se unen</h1>
                <h1>Organizacion de tareas de una forma minimalista</h1>
                <p>Conecta con tu equipo, conecta con tus responsabilidad sin sentirte perdido</p>
                <button >Iniciar Sesion</button>
                <button>Registrarse</button>
            </div>

        </header>
    )

}

