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
  
  // const navActiveChange = () => {

  // }
  // const handleScroll = () => {
  //   console.log("is this being called")
  //   if(inSection === "welcome"){
  //       console.log("ok");
  //       let currentActiveLink = document.getElementsByClassName("activeNav");
  //       currentActiveLink[0].className = "link notActiveNav";
  //       document.getElementById("welcome").className = "link activeNav";
  //     }
  //     else if(inSection === "aboutMe"){
  //       // console.log("ok2");
  //       let currentActiveLink = document.getElementsByClassName("activeNav");
  //       currentActiveLink[0].className = "link notActiveNav";
  //       document.getElementById("aboutMe").className = "link activeNav";
  //     }
  //     else if(inSection === "projExtra"){
  //       // console.log("ok");
  //       let currentActiveLink = document.getElementsByClassName("activeNav");
  //       currentActiveLink[0].className = "link notActiveNav";
  //       document.getElementById("projExtra").className = "link activeNav";
  //     }
  //     else if(inSection === "contact"){
  //       // console.log("ok");
  //       let currentActiveLink = document.getElementsByClassName("activeNav");
  //       currentActiveLink[0].className = "link notActiveNav";
  //       document.getElementById("contact").className = "link activeNav";
  //     }
  // };

  useEffect(() => {
   
    let navLinks = document.getElementsByClassName('link');
   
    for(let i=0; i<navLinks.length; i++){
      console.log("here");
      navLinks[i].addEventListener("click", function() {
        // console.log("does this run")
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