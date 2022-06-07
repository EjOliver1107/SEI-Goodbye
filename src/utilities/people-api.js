import sendRequest from "./send-request";
const BASE_URL = '/api/person';

export function viewProfile(){
    return sendRequest(`${BASE_URL}/profile`);
}

export function handleAddStudentProfile(){
    return sendRequest(`${BASE_URL}/student/addprofile`);
}

export function handleAddInstructorProfile(){
    return sendRequest(`${BASE_URL}/instructor/addprofile`);
}

export function getAllForUser() {
    return sendRequest(`${BASE_URL}/user`);
}