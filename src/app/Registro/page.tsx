"use client"

import { useState } from "react"

export default function RegisterPage(){

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
        <main className="w-full h-screen bg-white">
            <h1>Crear cuenta</h1>
            <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-64">

                <input
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-2 rounded"
                ></input>

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-2 rounded"
                ></input>

                <button
                type="submit"
                className="bg-blue-500 text-whiite"
                >
                    Registrarme
                </button>
            </form>

        {message && <p className="font-bold">{ message }</p>}
        </main>
    )
}