import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NyhedContext } from '../contexts/NyhedContext';


const Nyheder = () => {

    // Hent alle nyheder fra useState i NyhedContext ...
    const { nyheder, sletNyhed } = useContext(NyhedContext);


    const nyhedsliste = nyheder.map(n => {

        return (
            <div key={n.nyhedid}>
                <h4> {n.overskrift}</h4>
                <Link to={"/nyhed/" + n.nyhedid}>Læs mere</Link>
                <br />
                <button onClick={() => sletNyhed(n.nyhedid)}>SLET!!!</button>
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