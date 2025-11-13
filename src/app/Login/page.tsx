
import LoginButton from "../components/LoginButton"

export default function Login(){

    return(
        <div className="w-full h-screen flex flex-col justify-center items-center bg-white">
            <div className="w-100 h-100 rounded border-2 border-gray-800 bg-gray-500">
                <h1>Iniciar sesion</h1>
                <form className="flex flex-col ">
                    <input type="email" placeholder='Correo electronico' className='w-50 h-10 rounded border-2 border-black'></input>
                    <input type="password" placeholder='Contraseña' className='w-50 h-10 rounded border-2 border-black'></input>
                    <button type="submit" className="w-50 h-10 rounded cursor-pointer bg-blue-500">Entrar</button>
                </form>


            </div>

        </div>
    )

}