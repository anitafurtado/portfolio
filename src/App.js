import React, {useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Me from "./assets/AnitaFurtado_img2_square.JPG";


function App() {
  const [progress, setProgress] = useState(0);
  const [section, setSection] = useState("welcome");

  //Scroll Bar in the Navigation
  const handleScroll = () => {
    //fix this
    const curProgress = (window.pageYOffset/document.documentElement.scrollHeight)*129.5;
    let curSection = "";
    if(curProgress<=25){
      // curSection="welcome";
      let currentActiveLink = document.getElementsByClassName("activeNav");
        currentActiveLink[0].className = "link notActiveNav";
        document.getElementById("welcomeLink").className = "link activeNav";
    } 
    else if (curProgress>25 && curProgress<=50){
      // curSection="aboutMe";
      let currentActiveLink = document.getElementsByClassName("activeNav");
      currentActiveLink[0].className = "link notActiveNav";
      document.getElementById("aboutMeLink").className = "link activeNav";
    }
    else if (curProgress>50 && curProgress<=75){
      // curSection="projExtra";
      let currentActiveLink = document.getElementsByClassName("activeNav");
        currentActiveLink[0].className = "link notActiveNav";
        document.getElementById("projExtraLink").className = "link activeNav";
    }
    else if (curProgress>=75){
      // curSection="contact";
      let currentActiveLink = document.getElementsByClassName("activeNav");
        currentActiveLink[0].className = "link notActiveNav";
        document.getElementById("contactLink").className = "link activeNav";
    }
    setProgress(curProgress);
    setSection(curSection);
    console.log(curSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div id="appContainer">
      <Header inProgress={progress} inSection={section}/>
      <div id="contentContainer">
        <div className='section' id="welcome">
          <img src={Me} id="picOfMe"/>
          {/* <Avatar src={Me} id="picOfMe" /> */}
          <div id='description'>
            <h2>Hi, my name is Anita!</h2>
            <p>Welcome to my portfolio website!</p>
          </div>
          
        </div>
        <div className='section' id="aboutMe">
          <div id="uni">
            <p>I am currently a third year university student studying a Bachelor of Science specialising in Computing at Macquarie University.</p>
          </div>
        </div>
        <div className='section' id="projExtra">
          
        </div>
        <div className='section' id="contact">
          
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
