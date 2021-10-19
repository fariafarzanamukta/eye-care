
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://gist.githubusercontent.com/fariafarzanamukta/307c33f0435c531e9f98e6145fcab5c7/raw/4f37840266c7059faffd3c00af3da5806fc1e47e/Service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id="services" className="container" >
            <h6 className="text-primary mt-5">Our Services</h6>
            <h1 className="p-3">Eye Care Services</h1>
            <div className="services_container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;