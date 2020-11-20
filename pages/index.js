import React from 'react';
import MyBottomNavigation from '../Componentes/BottomNavigation'
import Container from '@material-ui/core/Container';
function Home(){
    return(
        <Container>
            <h1> Home</h1>
            <MyBottomNavigation page= 'index'/>
        </Container> 

    )  
}



export default Home