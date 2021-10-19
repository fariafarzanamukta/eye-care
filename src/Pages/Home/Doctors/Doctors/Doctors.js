import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/fariafarzanamukta/9ffe358e632af6836eec97085364a667/raw/19f07dd48aec7b952a2532b8a6cea9dc2db261ec/Doctor')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div className="container" id="doctors">
            <h6 className="text-primary mt-5">Our Doctors</h6>
            <h1>Eye Care Specialist</h1>
            <div className="doctors_container">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    >

                    </Doctor>)
                }
            </div>

        </div>
    );
};

export default Doctors;