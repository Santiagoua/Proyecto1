import React from 'react';
import NavBar from '../Component6/NavBar';
import '../../App.css';
import Footer from '../Component3/Footer';
import './Menu.css';
import WeatherApp from '../Component10/WeatherApp';

function Menu(_props) {

    return(
        <>

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"/>
   <NavBar/>
   <Footer/>
   <WeatherApp/>
        </>
       

        )
    }

    export default Menu;