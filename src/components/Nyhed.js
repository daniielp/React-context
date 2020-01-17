import React, { useContext } from 'react';
import { NyhedContext } from '../contexts/NyhedContext';


const Nyhed = (props) => {

    let nyhedID = +props.match.params.nyhedid; // "9" laves om til 9 ... + laver om til number

    // Find nyhed vha NyhedContext
    const { findNyhed } = useContext(NyhedContext);
    const nyhed = findNyhed(nyhedID);

    // Hvis nyheden findes (der kommer en nyhed retur fra context)
    if (nyhed) {

        return (

            <div className="Nyhed">
    
                <h1>Udvalgt nyhed</h1>
                <h2>{nyhed.overskrift}</h2>
                <p>{nyhed.nyhedtxt}</p>
    
            </div>
    
        );
    }
    else    
    {
        return (
            <h1>Der er desværre sket en fejl - ingen nyheder passer til det, du har søgt på</h1>
        )
    } 
}

export default Nyhed;