import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard(){
    const session = await getServerSession();

    if(!session) redirect("/Login");

    return (
        <div className="p-10">
            <h1>Bienvenido {session.user?.email}</h1>
        </div>
    )
}