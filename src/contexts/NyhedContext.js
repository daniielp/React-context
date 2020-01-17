import React, { createContext, useState } from 'react';

// export NyhedContext
export const NyhedContext = createContext();

// Nyhedprovider
const NyhedContextProvider = (props) => {

    // STATE til nyheder ... nyheder til at hente nyheder ... setNyheder til at ændre nyheder
    const [nyheder, setNyheder] = useState([
        {
            nyhedid: 1,
            overskrift: 'Tager kampen op mod efterårets blade',
            nyhedtxt: 'Sidste år blev flere letbaneafgange aflyst, fordi togene ikke kunne klare de stejle strækninger.'
        },
        {
            nyhedid: 4,
            overskrift: 'Dyrepasser genser for første gang næsehornet Mandela i Afrika',
            nyhedtxt: 'Det sorte næsehorn fra Ree Park skal være med til at sikre bestandens overlevelse i Rwanda.'
        },
        {
            nyhedid: 9,
            overskrift: 'VR-briller har fået Casper ud ad døren trods angst',
            nyhedtxt: 'Virtual reality giver folk med social angst mulighed for at træne angstprovokerende hverdagssituationer.'
        }
    ]);

    // TODO - SLET NYHED
    const sletNyhed = (id) => {
        setNyheder(nyheder.filter(n => n.nyhedid !== id)); // de nyheder som er forskellig fra id (fx 9) får lov at være med i state (øvrige slettes)
    };


    // OPRET NYHED
    const tilfoejNyhed = (overskrift, nyhedtxt) => {

        let nyhedid = Math.floor(Math.random() * 100);
        setNyheder([...nyheder, { overskrift: overskrift, nyhedtxt: nyhedtxt, nyhedid:nyhedid }]);

    };

    // TODO - HENT NYHED UD FRA DENS ID
    const findNyhed = (id) => {
        return nyheder.find(n => n.nyhedid === id); // returnerer den nyhed som har en id som matcher id som er sendt med som param
    }

    

    return (

        <NyhedContext.Provider value={{ nyheder, tilfoejNyhed, sletNyhed, findNyhed }}>
            {props.children}
        </NyhedContext.Provider>

    );
}

export default NyhedContextProvider;