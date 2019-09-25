import React, { useContext, useState } from 'react';

const OpretNyhed = () => {


    // State til indholdet i en nyhed
    const [overskrift, setOverskrift] = useState('');
    const [nyhedstxt, setNyhedstxt] = useState('');


    return (
        <form>

            <input type="text" placeholder="Nyhedens overskrift" value={""}
                onChange={""} />

            <input type="text" placeholder="Nyhedens tekst" value={""}
                onChange={""} />

            <input type="submit" value="GEM nyheden - inden det er for sent" />

        </form>
    );
}

export default OpretNyhed;