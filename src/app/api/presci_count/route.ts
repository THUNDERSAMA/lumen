import { NextRequest, NextResponse } from "next/server";
import neo4j from 'neo4j-driver';
const neo4jDriver = neo4j.driver('neo4j+s://45c4756c.databases.neo4j.io', neo4j.auth.basic('neo4j', 'cJuC379i53EG4aYz10x7LXjBJKAmhupuNd_l8xJv9pg'));
export async function POST(req:NextRequest)
{
    
    const requestBody = await req.json();
    const { gId ,type} = requestBody;
    const session = neo4jDriver.session();
    try {
        // Check if the patient with the given gId exists and retrieve the count of keys in the data field
        const result = await session.run(`
        MATCH (p:Patient {g_id: $gId})
        RETURN p.data AS data`,
        { gId }
    );


        if (result.records.length === 0) {
            // If no patient with the given gId exists, return a message indicating the data field has not been created
            return NextResponse.json({ message: 'Data field not created for the patient' });
        } else {
            // Extract the count of keys from the result
            const dataCount = result.records[0].get('dataCount');
            return NextResponse.json({ message: 'Number of keys in data field', dataCount });
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