import clientPromise from "@/app/lib/mongodb";

export async function POST(request) {
    const client =  await clientPromise;
    const db = client.db("Next-Touch");
    await db.collection("Books").insertOne(request.body)
    return new Response("Book Added", {status: 200});
}