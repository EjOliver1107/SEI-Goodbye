import sendRequest from "./send-request";
const BASE_URL = '/api/people';

export function createProfile(profileData){
    return sendRequest(`${BASE_URL}`, 'POST', profileData);
}
export function getProfile(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}
export function getAll(profileData) {
    console.log('PLS WORK IM BEGGING')
    return sendRequest(`${BASE_URL}/all`, profileData)
}
export function deleteProfile(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}
// export function getById(id) {
//     console.log('owa owa')
//     return sendRequest(`${BASE_URL}/${id}`);
// }