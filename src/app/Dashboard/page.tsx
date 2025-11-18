"use client";

import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Link from "next/link";

interface Board {
    id: string;
    title: string;
}

export default function Dashboard(){
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [boards, setBoards] = useState<Board[]>([]);
    
    useEffect(() => {
        const loadBoards = async () => {
            try {
                const res = await fetch("/api/boards");
                if (!res.ok) {
                    console.error("Error loading boards:", res.status, res.statusText);
                    return;
                }
                const data = await res.json();
                if (Array.isArray(data)) {
                    setBoards(data);
                } else {
                    console.error("Expected array but got:", data);
                    setBoards([]);
                }
            } catch (error) {
                console.error("Failed to load boards:", error);
            }
        };
        loadBoards();
    }, []);

    async function createBoard(){
        if (!title.trim()) {
            alert("Ingresa un nombre para el tablero");
            return;
        }

        const res = await fetch("/api/boards", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ title }),
        });
    
        if (!res.ok) {
            console.error("Error creating board:", res.status);
            alert("Error al crear tablero");
            return;
        }

        const newBoard = await res.json();

        if (newBoard && newBoard.id) {
            setBoards((prev) => [ newBoard, ...prev]);
            setTitle("");
            setOpen(false);
        }
    }

    return (
    <div className="w-full h-screen flex flex-row bg-neutral-800">
        <div className="w-[40%] h-screen flex flex-col items-center bg-transparent">
            <div className="w-full h-[7%]">
                <h1 className="text-black">Hola fulanito</h1>
            </div>
            <div className="w-[90%] h-[30%] mt-10">
                <div className="w-full h-[15%] rounded mt-5 flex justify-start px-3 items-center border-2 border-neutral-700 bg-neutral-700 cursor-pointer">
                    <h1 className="text-white text-sm">Icono - Tableros</h1>
                </div>
                <div className="w-full h-[15%] rounded mt-2 flex justify-start px-3 items-center border-2 border-neutral-700 bg-neutral-700 cursor-pointer">
                    <h1 className="text-white text-sm">Icono - Notas</h1>
                </div>
            </div>
        </div>
        <div className="w-full h-screen flex flex-col bg-transparent">
            <div className="w-[100%] h-20 flex flex-row justify-center items-start">
                <div className="w-[190%] h-20 gap-5 flex flex-row justify-center items-center">
                    <input
                        className="w-[70%] h-[40%] border-1 border-neutral-600 bg-neutral-700 rounded p-2"
                        placeholder="Buscar"
                    >
                    </input>
                    <button 
                        className="w-[10%] h-[40%]  cursor-pointer border-none rounded bg-blue-500 text-black"
                        onClick={() => setOpen(true)}
                    >Crear</button>
                </div>
            </div>
            <div className="w-full h-[90%] border-5 border-black p-5 flex">
                    <div className="w-[80%] h-[60%] border-2 border-amber-600 p-5">
                        {boards.map((board) => (
                            <div key={board.id} className="w-40 h-40 border-2 rounded border-neutral-700 shadow cursor-pointer">
                                <Link
                                    href={`/boards/${board.id}`}
                                    key={board.id}
                                    className="w-40 h-40 rounded"
                                >
                                <h3 className="font-bold">{board.title}</h3>
                                </Link>
                            </div>
                        ))}
                    </div>
            </div>            
            <Modal open={open} onClose={() => setOpen(false)}>
                <h2 className="text-black">Crear tablero</h2>

                <input
                    type="text"
                    value={title}
                    placeholder="Nombre del tablero"
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 rounded border-2 border-black text-black"
                ></input>

                <button 
                    className="w-50 h-10 text-white bg-blue-500 cursor-pointer"
                    onClick={createBoard}
                >Crear</button>
            </Modal>
        </div>
    </div>
    )
}