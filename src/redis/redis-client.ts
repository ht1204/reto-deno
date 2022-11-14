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

    let mongoDBCredentials = {
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

        mongoDBCredentials = {
            mongoHost: hostForMongo,
            mongoUsername: userForMongo,
            mongoPassword: passwordForMongo,
        }

    } catch (error) {
        console.log("Error: ", error);
        ac.abort();
    }
    console.log('mongoDBCredentials: ', mongoDBCredentials);

    return mongoDBCredentials;

}