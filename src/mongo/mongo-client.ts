// deno-lint-ignore-file
import { MongoClient } from "../utils/deps.ts";

interface mongoMiddlewareProps {
    mongoHost: string;
    mongoUsername: string;
    mongoPassword: string;
}

export const mongoMiddleware = async ({
    mongoHost,
    mongoUsername,
    mongoPassword
}: mongoMiddlewareProps) => {

    let mongo_code = '';
    const ac = new AbortController();

    try {

        const mongoURI = [
            'mongodb+srv://',
            mongoUsername,
            ':',
            mongoPassword,
            '@',
            mongoHost,
            '?authMechanism=SCRAM-SHA-1'
        ].join('');

        console.log('mongoURI: ', mongoURI);

        const mongo_client = new MongoClient();
        await mongo_client.connect(mongoURI);

        const database = mongo_client.database('taller-mir');
        const instructions = database.collection('instructions');
        const [instructionItem] = await instructions.find().toArray();
        const { code } = instructionItem;
        mongo_code = code;
        console.log('mongo_code: ', mongo_code);

    } catch (error) {
        console.log("Mongo Connection Error: ", error);
        ac.abort();
    }
    
    return mongo_code;
}

