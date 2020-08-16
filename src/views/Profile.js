import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Profile = () => {
    const history = useHistory();
    const {id} = useParams();
    const [planet, setPlanet] = useState(null)

    const getPlanet = async (id) => {
        const res = await fetch(`http://swapi.dev/api/planets/${id}`);
        const data = await res.json();
        setPlanet(data)
        console.log(data)
    }   

    useEffect(() => {
        getPlanet(id)
    }, [id])

    return (
        <>
            <h1 className="text-center mb-4">Planets Profile</h1>

            {   
                planet &&
                <div className="card" key={planet.url}>
                <div className="card-header">
                    <h4 className="card-title text-center mt-2">{planet.name}</h4>
                </div>
                <div className="card-body text-center">
                    <p className="text-muted"><strong>Diameter:</strong> {planet.diameter}</p>
                    <p className="text-muted"><strong>Terrain:</strong> {planet.terrain}</p>
                    <p className="text-muted"><strong>Population:</strong> {planet.population}</p>
                </div>
                </div>
            }


            <button onClick={()=>history.goBack()} className="btn btn-outline-primary rounded-pill btn-block mt-4">Go Back</button>
        </>
    )
}
export default Profile;
