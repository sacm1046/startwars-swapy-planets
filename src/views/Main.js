import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {

    const [planets, setPlanets] = useState([])
    const [all, setAll] = useState({})

    const getPlanets = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setPlanets(data.results)
        const nextNumber = parseInt(data.next && data.next.replace("http://swapi.dev/api/planets/?page=", ""))
        const previousNumber = parseInt(data.previous && data.previous.replace("http://swapi.dev/api/planets/?page=", ""))
        setAll({
            next: data.next,
            previous: data.previous,
            number: !data.next ? previousNumber + 1 : !data.previous ? nextNumber - 1 : (nextNumber + previousNumber) / 2
        })
        sessionStorage.setItem('saveurl', url)
    }

    useEffect(() => {
        if (sessionStorage.getItem('saveurl')) {
            getPlanets(sessionStorage.getItem('saveurl'))
        } else {
            getPlanets('https://swapi.dev/api/planets')
        }
    }, [])

    return (
        <>

            <div className="row mb-4 ">
                <div className="col-md-6 d-flex d-md-block justify-content-center">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className={`page-item ${!all.previous && 'disabled'}`}>
                                {/* eslint-disable-next-line */}
                                <a className="page-link" onClick={() => getPlanets(all.previous)}>Previous</a>
                            </li>
                            <li className="page-item disabled">
                                {/* eslint-disable-next-line */}
                                <a className="page-link">Page {all.number}</a>
                            </li>
                            <li className={`page-item ${!all.next && 'disabled'}`}>
                                {/* eslint-disable-next-line */}
                                <a className="page-link" onClick={() => getPlanets(all.next)}>Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-6">
                    <h1 className="text-md-right text-center">Star Wars Planets</h1>
                </div>
            </div>

            <div className="card-columns">
                {
                    planets.length > 0 &&
                    planets.map((planet) => (
                        <div className="card" key={planet.url}>
                            <div className="card-header">
                                <h4 className="card-title text-center mt-2">{planet.name}</h4>
                            </div>
                            <div className="card-body text-center">
                                <p className="text-muted"><strong>Diameter:</strong> {planet.diameter}</p>
                                <p className="text-muted"><strong>Terrain:</strong> {planet.terrain}</p>
                                <p className="text-muted"><strong>Population:</strong> {planet.population}</p>
                                <Link to={`/planet/${planet.url.replace("http://swapi.dev/api/planets/", "")}`} className="btn btn-outline-primary rounded-pill btn-block">Visit</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Main;
