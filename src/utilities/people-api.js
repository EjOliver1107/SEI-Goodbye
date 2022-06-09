import sendRequest from "./send-request";
const BASE_URL = '/api/people';

export function createProfile(profileData){
    return sendRequest(BASE_URL, 'POST', profileData);
}
export function getProfile() {
    return sendRequest(BASE_URL)
}
export function update(person) {
    return sendRequest(`${BASE_URL}/${person._id}`, 'PUT', person);
}
export function getAll() {
    console.log('PLS WORK IM BEGGING')
    return sendRequest(`${BASE_URL}/all`)
}