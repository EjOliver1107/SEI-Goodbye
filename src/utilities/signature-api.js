import sendRequest from "./send-request";
const BASE_URL = '/api/signature';

export function createSignature(signatureData){
    return sendRequest(BASE_URL, 'POST', signatureData);
}
export function getSignature() {
    return sendRequest(BASE_URL)
}