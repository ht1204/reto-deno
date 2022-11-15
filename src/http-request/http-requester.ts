import { URL_ENDPOINT, URL_ENDPOINT_ACCESS_CODE } from '../utils/constants.ts';

export const retrieverInitData = async () => {

    const response = await fetch(URL_ENDPOINT, {
        method: "POST",
    });

    const { credentials: redis_credentials } = await response.json();
    console.log('redis_credentials: ', redis_credentials);
    return redis_credentials;
}

export const retrieveAccessCode = async () => {

    const response = await fetch(URL_ENDPOINT_ACCESS_CODE, {
        method: "POST",
    });

    const access_code = await response.text();
    console.log('access_code: ', access_code);

}
