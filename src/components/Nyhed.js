import React, { useContext } from 'react';
import { NyhedContext } from '../contexts/NyhedContext';



const Nyhed = (props) => {

    let nyhedID = +props.match.params.nyhedid;

    // Find nyhed vha NyhedContext
    const { findNyhed } = useContext(NyhedContext);
    const nyhed = findNyhed(nyhedID);
    // Ternary expression
    return (nyhed ? (
            <div className="Nyhed">
    
    
                <h1>Udvalgt nyhed</h1>
    
                <h2>{nyhed.overskrift}</h2>
                <p>{nyhed.nyhedtxt}</p>
    
            </div>
    
    ) : (
        <h1>Vi kunne desværre ikke finde den ønskede nyhed</h1>
    ));
    // If else statement
    // Check efter af nyhed eksisterer
    // if (nyhed) {
    //     return (

    //         <div className="Nyhed">
    
    
    //             <h1>Udvalgt nyhed</h1>
    
    //             <h2>{nyhed.overskrift}</h2>
    //             <p>{nyhed.nyhedtxt}</p>
    
    //         </div>
    
    //     );
    // } else {
    //     return (
    //             <h1>Vi kunne desværre ikke finde den ønskede nyhed</h1>
    //     );
    // };

}

export default Nyhed;