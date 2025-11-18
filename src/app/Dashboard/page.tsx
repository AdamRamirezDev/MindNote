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
    <div className="w-full h-screen bg-white flex flex-row border-4 border-black">
        <div className="w-70 h-screen border-4 bg-amber-100 border-amber-400">
            <h1 className="text-black">Hola fulanito</h1>
            <div className="w-full h-70 border-2 border-black mt-5">
                <div className="w-full rounded flex justify-center items-center border-2 border-black cursor-pointer">
                    <h1 className="text-black">Tableros</h1>
                </div>
                <div className="w-full rounded flex justify-center items-center border-2 border-black cursor-pointer">
                    <h1 className="text-black">Notas</h1>
                </div>
            </div>
        </div>
        <div className="w-full h-screen flex flex-col border-4 border-blue-700 bg-blue-300">
            <div className="w-[90%] h-20 border-2 flex flex-row items-start border-black">
                <div className="w-[90%] h-20 border-2 border-black">
                </div>
                <button 
                    className="w-20 h-20 border-2 cursor-pointer bg-blue-500"
                    onClick={() => setOpen(true)}
                    >Crear</button>
            </div>
            <div className="w-full h-[90%] border-5 border-black p-5 flex ">
                    <div className="w-[80%] h-[60%] border-2 border-amber-600 p-5">
                        {boards.map((board) => (
                            <div key={board.id} className="w-40 h-40 border rounded border-black shadow cursor-pointer">
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