import React from 'react';
import MyBottomNavigation from '../Componentes/BottomNavigation'
import Container from '@material-ui/core/Container';
function hoobies(){
    return(
        <Container>
            <h1> hoobies</h1>
            <MyBottomNavigation page= 'hoobies'/>
        </Container> 

    )  
}



export default hoobies