import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard(){
    const session = await getServerSession();
    console.log("SESSION:", session);

    if(!session) redirect("/Login");



    return (
        <div className="p-10">
            <h1>Bienvenido </h1>
        </div>
    )
}