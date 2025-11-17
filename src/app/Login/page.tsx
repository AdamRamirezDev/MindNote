import Link from "next/link";
import LoginButton from "../components/LoginButton";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setMessage(res.error);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white">
      <div className="w-100 h-100 flex flex-col justify-center items-center gap-5 rounded border-2 border-gray-800 bg-gray-500">
        <h1>Iniciar sesion</h1>
        <form className="flex flex-col">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electronico"
            className="w-50 h-10 rounded border-2 border-black"
          ></input>

          <input
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            className="w-50 h-10 rounded border-2 border-black"
          ></input>
          <button
            type="submit"
            className="w-50 h-10 rounded cursor-pointer bg-blue-500"
          >
            Entrar
          </button>
        </form>
        
        <div className="flex gap-5">
          <p className="text-white font-bold">Todavia no tienes cuenta</p>
          <Link
            href="/Registro"
            className="w-30 bg-blue-500 rounded bg cursor-pointer text-white"
          >
            Registrate
          </Link>
        </div>
      </div>
    </div>
  );
}
