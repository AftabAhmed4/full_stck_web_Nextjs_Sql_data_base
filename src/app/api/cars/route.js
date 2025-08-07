import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";

export async function GET(req) {
 try{
 let query = `SELECT * FROM Rent`

    const [result] = await db.query(query)


  return NextResponse.json({
    data : result,

  }, {status : 200} );
 }

 catch (error) {
        console.error("Error fetching sections:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
 }

}



export async function POST(req) {
    try{
        const data = await req.json()
        const {Name, Description, ImageUrl} = data

        await db.query("INSERT INTO Rent (Name, Description, ImageUrl) VALUES (?, ?, ?)", [Name, Description, ImageUrl])

        return NextResponse.json({ message: "Car data Added!" }, { status: 200 });

    }


    catch (error){
    console.error("Error fetching sections:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    
}