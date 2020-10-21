import React from 'react';

import { Button } from 'react-native';

export default props => {

    function executar () {
        console.warn('Exec!!');
    }

    return (
        <>
            <Button 
                title="Executar!" 
                onPress={executar}/>

            <Button 
                title="Executar 02!" 
                onPress={() => console.warn("Exec 02")}/>
        </>
    )
}