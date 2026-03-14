import React, {useEffect, useState} from "react";
import { getPatients } from "../services/api";
import AddPatient from "./AddPatient";

function PatientList(){

    const[patients, setPatient] = useState([]);
    const[page, setPage] = useState(1);
    const[pageSize, setPageSize] = useState(5);

    useEffect(()=> {
        fetchPatients();
    },[page, pageSize]);

    const fetchPatients = async() =>{
        const response = await getPatients(page, pageSize);
        setPatient(response.data);
    };
    return(
        <div>
            <h2>Patients</h2>

            <AddPatient refreshPatients={fetchPatients}/>

            <label>Patients per page:</label>
            <select
            value={pageSize}
            onChange={(e)=>{
                setPageSize(Number(e.target.value));
                setPage(1);
            }}>
               <option value="5">5</option>
               <option value="10">10</option>
               <option value="15">15</option> 
            </select>
            <ul>
                {patients.map((patient) =>(
                    <li key={patient.id}>
                        {patient.firstName}{patient.LastName}
                    </li>
                ))}
            </ul>
            <div style={{marginTop:"20px"}}>
                <button
                onClick={()=>setPage(page-1)}
                disabled={page===1}>
                    Previous
                </button>
                <button
                onClick={()=>setPage(page+1)}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default PatientList;