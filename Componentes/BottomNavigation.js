import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Hidden from '@material-ui/core/Hidden'
import HomeIcon from '@material-ui/icons/Home'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import { useRouter } from 'next/router'
function MyBottomNavigation( props ){
    const router = useRouter()
    return  (
        <Hidden 
        implementation="css"
        mdUp = {true}>
        <BottomNavigation 
        value={props.page}
        onChange={(event, value) => {
          event.preventDefault()
          router.push(value)
        }}
        showLabels
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} value = "/" />
      <BottomNavigationAction label="Teste 1" icon={<FavoriteIcon /> } value = "work" />
        <BottomNavigationAction label="Teste 2" icon={<LocationOnIcon />}  value = "hoobies" />
      </BottomNavigation> 
      </Hidden>
    )
}



export default MyBottomNavigation