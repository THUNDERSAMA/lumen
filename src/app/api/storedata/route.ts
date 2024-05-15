import { NextRequest, NextResponse } from "next/server";
import neo4j from 'neo4j-driver';
const neo4jDriver = neo4j.driver('neo4j+s://45c4756c.databases.neo4j.io', neo4j.auth.basic('neo4j', 'cJuC379i53EG4aYz10x7LXjBJKAmhupuNd_l8xJv9pg'));
export async function POST(req:NextRequest)
{
    
    const requestBody = await req.json();
    const { m_id ,key} = requestBody;
    let gId="";
    try {
       const resp=await fetch("http://localhost:3000/api/getUser",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "patient",
          m_id:m_id
        }),
       }); 
       const user=await resp.json();
       console.log(await user);
       gId=await user.data.graphDB_id;
    } catch (error) {
        console.log(error);
    }
    const session = neo4jDriver.session();
    try {
        console.log(gId);

        const result = await session.run(`
        MATCH (p:Patient {g_id: $gId})
        RETURN p.data AS data`,
        { gId }
    );


        if (result.records.length === 0) {

            const res = await session.run(`
        MATCH (p:Patient {g_id: $gId})
SET p.data = [$key]
RETURN p`,
        { gId,key }
    );
    return NextResponse.json({ message: 'sucessfully stored', code:200 });
} else {
            const res = await session.run(`
            MATCH (p:Patient {g_id: $gId})
            SET p.data = p.data+[$key]
            RETURN p`,
            { gId,key }
        );
            //const dataCount = result.records[0].get('dataCount');
            return NextResponse.json({ message: 'sucessfully stored', code:200 });
        }
    } catch (error) {
        console.error('Error retrieving data count:', error);
        return NextResponse.json({ error: 'An error occurred while retrieving data count' });
    } finally {
        await session.close();
    }
}


//if data not exist
// MATCH (p:Patient {g_id: '$2b$12$HDo60D2jO2F9fRijqorG2.CqfwbON0.VLje88FT00l1N4eCLnKO66'})
// SET p.data = ['rain drops adsdsdasd']
// RETURN p

//else
// MATCH (p:Patient {g_id: '$2b$12$HDo60D2jO2F9fRijqorG2.CqfwbON0.VLje88FT00l1N4eCLnKO66'})
// SET p.data = p.data+['rain drops adsdsdasd']
// RETURN p