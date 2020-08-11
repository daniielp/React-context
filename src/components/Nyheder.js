import React, { useContext } from 'react';
import { NyhedContext } from '../contexts/NyhedContext'
import { Link } from 'react-router-dom'



const Nyheder = () => {

    // Hent alle nyheder som er et Object fra useState i NyhedContext og hent functionen slet nyhed
    const { nyheder, delNyhed } = useContext(NyhedContext);


    const nyhedsliste = nyheder.map(nyhed => {
        return (
            <div key={nyhed.nyhedid}>
                <Link to={"/nyhed/" + nyhed.nyhedid}><h4>{nyhed.overskrift}</h4></Link>
                <button onClick={() => delNyhed(nyhed.nyhedid)}>Delete Nyhed</button>
            </div>
        );
    });

    return (
        <div className="Nyheder">

            <h2>Nyheder</h2>

            {nyhedsliste}

        </div>
    );
}

export default Nyheder;