import React, { createContext, useState } from 'react';

// export NyhedContext
export const NyhedContext = createContext();

//NyhedProvider
const NyhedContextProvider = (props) => {

    // State til nyheder
    // nyheder henter nyheder
    // setNyheder bruges til at ændre i nyheder
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

    const delNyhed = (id) => {
        setNyheder(nyheder.filter(nyhed => nyhed.nyhedid !== id));  //Hvis id matcher nyhedid, fjern den fra listen
    }

    // Opret nyhed
    const addNyhed = (overskrift, nyhedtxt) => {
        
        let nyhedid = Math.floor(Math.random()*100);
        setNyheder([...nyheder, {overskrift, nyhedtxt, nyhedid}]);
    }

    // Hent nyhed ud fra dens id
    const findNyhed = (id) => {
        return nyheder.find(nyhed => nyhed.nyhedid === id); // Retuner den nyhed som har en ide som matcher id, som vi får fra vores param (Parameter)
    }

    return (
        <NyhedContext.Provider value={{ nyheder, addNyhed, delNyhed, findNyhed }}>
            {props.children}
        </NyhedContext.Provider>
    );
}

    export default NyhedContextProvider;