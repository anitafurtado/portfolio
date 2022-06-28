import React, {useEffect} from 'react';
import '../css/Header.css';
import AppColours from '../AppColours';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  
  palette: {
    primary: {
      main: AppColours.primaryColor,
    },

  },
});


function Header({inProgress, inSection}) {

  useEffect(() => {
   
    let navLinks = document.getElementsByClassName('link');
   
    for(let i=0; i<navLinks.length; i++){
      navLinks[i].addEventListener("click", function() {
        let currentActiveLink = document.getElementsByClassName("activeNav");
        currentActiveLink[0].className = "link notActiveNav";
        this.className = "link activeNav";
      });
    }

    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
    
  }, []);


  return (
    <div id='headerContainer'>
      <ThemeProvider theme={theme}>
        <LinearProgress variant="determinate" value={inProgress} />
      </ThemeProvider>
      

      <ul id='navigation'>
        <li className='linkWrapper'><a id="welcomeLink" className='link activeNav' href='#welcome'>WELCOME</a></li>
        <li className='linkWrapper'><a id="aboutMeLink" className='link notActiveNav' href='#aboutMe'>ABOUT ME</a></li>
        <li className='linkWrapper'><a id="projExtraLink" className='link notActiveNav' href='#projExtra'>PROJECTS</a></li>
        <li className='linkWrapper'><a id="contactLink" className='link notActiveNav' href='#contact'>CONTACT</a></li>
      </ul>
    </div>
  );
}

export default Header;