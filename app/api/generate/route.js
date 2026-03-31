import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("ShortLy");
    const collection = db.collection("url");

    const existing = await collection.findOne({ shorturl: body.shorturl });

    if (existing) {
        return Response.json({ success: false, error: true, message: "URL already exists" });
    }

    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })
    return Response.json({ success: true, error: false, message: "URL generated" })
}