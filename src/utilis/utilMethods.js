import LZUTF8 from 'lzutf8';

export const convertJSONtoBASE64 = (data) => {
    return LZUTF8.compress(data, {inputEncoding: "String", outputEncoding: "Base64"});
}

export const convertBASE64toJSON = (data) => {
    return LZUTF8.decompress(data, {inputEncoding: "Base64"})
}