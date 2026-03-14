import React, { useState } from "react";
import axios from "axios";
import { addPatient } from "../services/api";

function AddPatient({ refreshPatients }) {

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [gender, setGender] = useState("");
const [mrn, setMrn] = useState("");

const handleSubmit = async (e) => {
e.preventDefault();

const newPatient = {
firstName,
lastName,
gender,
mrn
};

// await axios.post(
// "https://healthcareapi-q9lv.onrender.com/api/patient",
// newPatient
// );

await addPatient(newPatient);

setFirstName("");
setLastName("");
setGender("");
setMrn("");

refreshPatients();
};

return (

<div>

<h2>Add Patient</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="First Name"
value={firstName}
onChange={(e)=>setFirstName(e.target.value)}
/>

<input
type="text"
placeholder="Last Name"
value={lastName}
onChange={(e)=>setLastName(e.target.value)}
/>

<input
type="text"
placeholder="Gender"
value={gender}
onChange={(e)=>setGender(e.target.value)}
/>

<input
type="text"
placeholder="MRN"
value={mrn}
onChange={(e)=>setMrn(e.target.value)}
/>

<button type="submit">
Add Patient
</button>

</form>

</div>

);
}

export default AddPatient;