import sendRequest from "./send-request";
const BASE_URL = '/api/person';

export function viewProfile(){
    return sendRequest(`${BASE_URL/profile}`);
}

export function addProfile(){
    return sendRequest(`${BASE_URL}/students`)
}

export function getAllForUser() {
    return sendRequest(`${BASE_URL}/user`);
}