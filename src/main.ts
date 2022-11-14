import { retrieverInitData, retrieveAccessCode } from "./http-request/http-requester.ts";
import { redisMiddleware } from "./redis/redis-client.ts";
import { mongoMiddleware } from "./mongo/mongo-client.ts";
import { decrypter } from "./decrypt/decrypter.ts";

const main = async () => {

    const redis_credentials = await retrieverInitData();
    const mongo_credentials = await redisMiddleware(redis_credentials);
    const code = await mongoMiddleware(mongo_credentials);
    decrypter(code);
    await retrieveAccessCode();

}

main();
