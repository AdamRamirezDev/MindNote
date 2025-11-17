"use client";

import Link from "next/link";
import { useState } from "react";

export default function Registro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setMessage(data.message || data.error);
  }

  return (
    <main className="w-full h-screen bg-white flex flex-col justify-center items-center">
      <h1 className="text-black font-bold">Crear cuenta</h1>
      <div className=" justify-center items-center gap-4 w-100 h-50 border-2 bg-gray-400 border-black">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-5 mt-5">
          
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-80 border-2 roounded border-black"
          ></input>

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

          <button type="submit" className="w-80 bg-blue-500 text-whiite">
            Registrarme
          </button>
        </form>
        <div className="flex gap-5">
          <p className="text-white">Ya tienes cuenta ?</p>
          <Link
            href="/Login"
            className="text-black w-30 bg-blue-500 rounded bg cursor-pointer text-white">Iniciar sesion</Link>
        </div>
      </div>

      {message && <p className="font-bold">{message}</p>}
    </main>
  );
}
