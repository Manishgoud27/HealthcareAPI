import axios from "axios";

const API = axios.create({
    baseURL: "https://healthcareapi-q9lv.onrender.com"
});

export const getPatients = (page, pageSize) =>
    API.get(`/api/patient?page=${page}&pageSize=${pageSize}`);

export const addPatient = (data) =>
    API.post("/api/patient", data);