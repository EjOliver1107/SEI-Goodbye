import sendRequest from "./send-request";
const BASE_URL = '/api/people';

export function createProfile(profileData){
    return sendRequest(BASE_URL, 'POST', profileData);
}
export function getProfile() {
    return sendRequest(BASE_URL)
}