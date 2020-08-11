import React, { useContext, useState } from 'react';
import { NyhedContext } from '../contexts/NyhedContext';

const OpretNyhed = () => {

    const { addNyhed } = useContext(NyhedContext);

    // State til indholdet i en nyhed
    const [overskrift, setOverskrift] = useState('');
    const [nyhedstxt, setNyhedstxt] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addNyhed(overskrift, nyhedstxt);
        setOverskrift('');
        setNyhedstxt('');
    }

    return (
        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Nyhedens overskrift" value={overskrift}
                onChange={(e) =>  setOverskrift(e.target.value)} />

            <input type="text" placeholder="Nyhedens tekst" value={nyhedstxt}
                onChange={(e) => setNyhedstxt(e.target.value)} />

            <input type="submit" value="GEM nyheden - inden det er for sent" />

        </form>
    );
}

export default OpretNyhed;