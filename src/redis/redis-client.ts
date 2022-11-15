import { redisClient } from '../utils/deps.ts';

interface redisClientProps {
    host: string;
    port: string;
    user: string
    password: string;
}

export const redisMiddleware = async ({
    host,
    port,
    user,
    password
}: redisClientProps) => {

    let mongo_credentials = {
        mongoHost: '',
        mongoUsername: '',
        mongoPassword: '',
    }

    const ac = new AbortController();

    try {
        const username = user;
        const redisPort = port as unknown as string;

        const client = await redisClient({
            hostname: host,
            port: redisPort,
            username,
            password
        });


        const mongoHost = await client.get("host");
        const mongoUserName = await client.get("username");
        const mongoPassword = await client.get("password");

        const hostForMongo: string = mongoHost || 'mongo.cluster';
        const userForMongo: string = mongoUserName || 'mongo.user';
        const passwordForMongo: string = mongoPassword || 'mongo.pass';

        mongo_credentials = {
            mongoHost: hostForMongo,
            mongoUsername: userForMongo,
            mongoPassword: passwordForMongo,
        }

    } catch (error) {
        console.log("Error: ", error);
        ac.abort();
    }
    console.log('mongo_credentials: ', mongo_credentials);

    return mongo_credentials;

}