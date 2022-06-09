import sendRequest from "./send-request";
const BASE_URL = '/api/signature';

export function createProfile(signatureData){
    return sendRequest(BASE_URL, 'POST', signatureData);
}
export function getProfile() {
    return sendRequest(BASE_URL)
}