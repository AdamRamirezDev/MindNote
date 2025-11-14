"use client"

import { useState } from "react"

export default function Registro(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    async function handleSubmit(e: React.FormEvent){
        e.preventDefault()

        const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        })
        
        const data = await res.json()
        setMessage(data.message || data.error)
    }

    return (
        <main className="w-full h-screen bg-white flex flex-col justify-center items-center">
            <h1 className="text-black font-bold">Crear cuenta</h1>
            <form 
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-4 w-100 h-50 border-2 bg-gray-400 border-black">

                <input
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-80 border-2 rounded border-black"
                ></input>

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-80 border-2 rounded border-black"
                ></input>

                <button
                type="submit"
                className="w-80 bg-blue-500 text-whiite"
                >
                    Registrarme
                </button>
            </form>

        {message && <p className="font-bold">{ message }</p>}
        </main>
    )
}