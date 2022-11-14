
export const decrypter = (code: string) => {
    const decrypted_code = atob(code);
    console.log('decrypted_code: ', decrypted_code);
}