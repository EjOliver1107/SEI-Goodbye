import sendRequest from "./send-request";
const BASE_URL = '/api/signature';

export function createSignature(signatureData, id){
    console.log(id);
    return sendRequest(`${BASE_URL}/${id}/signature`, 'POST', signatureData);
}
export function getSignature() {
    return sendRequest(BASE_URL)
}