"use client"

import { signIn, useSession } from "next-auth/react";

export default function LoginButton(){

    const { data: session} = useSession();

    if(session){
        return (
            <div>
                <h1>Boton de inicio de sesion</h1>
                <button
                    onClick={() => signIn("github")}
                    className="bg-blue-500 rounded w-30 cursor-pointer"
                > Iniciar Sesion </button>
            </div>
        )
    }
}