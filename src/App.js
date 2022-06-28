import React, {useState, useEffect} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Me from "./assets/Anita_img2_square.JPG";
import mq from "./assets/MQ_INT_VER_RGB_POS.png";
import icpc from "./assets/icpc.png";
import workshop from "./assets/workshop.jpg";
import pellas from "./assets/pellas.jpg";
import figma1 from "./assets/figma1.png";
import figma2 from "./assets/figma2.png";
import figma3 from "./assets/figma3.png";
import figma4 from "./assets/figma4.png";
import figma5 from "./assets/figma5.png";
import figma6 from "./assets/figma6.png";
import figma7 from "./assets/figma7.png";
import figma8 from "./assets/figma8.png";

function App() {
  const [progress, setProgress] = useState(0);
  const [section, setSection] = useState("welcome");

  //Scroll Bar in the Navigation
  const handleScroll = () => {
    let howFarScrolled = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - window.innerHeight;
    const curProgress = (howFarScrolled/height)*100;

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
          <div id='picAndDesc'>
            <img src={Me} id="picOfMe" alt='Anita'/>
            {/* <Avatar src={Me} id="picOfMe" /> */}
            <div id='description'>
              <h2>I'm Anita, an aspiring Software Developer!</h2>
              <p>Hello and welcome to a website all about my programming life! I am currently 1 semester away from graduating with a Bachelor of Science (Computing specialisation) at Macquarie Uni and I am very keen to start a career in software development.</p>
              <p>With almost 2 years of experience as a Help Desk Assistant/Software Analyst at a start-up and a genuine love for learning new things, I believe that I will be an asset to any software development team looking to move towards innovative and creative solutions to real-world problems.</p>
            </div>
          </div>

          

        </div>
        <div className='section' id="aboutMe">
          <h2 className='sectionTitles'>About Me</h2>
          <div id='languages'>
            <div id='languageIcons'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className='langIcon' alt='Java'/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='langIcon' alt='JavaScript'/>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className='langIcon' alt='React'/>
            </div>
            <div id='languageText'>
              <p>Java is the first language I learnt, and is the language I know the most about. Every time I learn a new language, the fundamentals are based off what I know from Java. I also do a lot of competitive programming/algorithms in this language.</p>
              <p>JavaScript is a language that I am also relatively proficient in, as when I started to get more interested in Web Development, I utilised a lot of JavaScript.</p>
              <p>Lately I have been very interested in ReactJS and React Native, and since I am already very familiar with JavaScript, both libraries were pretty easy to learn. This website has been created with ReactJS.</p>
            </div>
          </div>
          
          <div id='uni'>
            <img src={mq} id='mqImg' alt='Macquarie Uni Logo'/>
            <div>
              <p>I am currently a third year university student studying a Bachelor of Science specialising in Computing at Macquarie University. I actually started in a Physics specialisation, but after taking an intro programming unit, I realised that I loved Computing so I switched! Throughout my time here I have taken many amazing subjects such as Algorithms and Data Structures, Web Technology, Data Communications, Systems Programming, Introduction to Database Design and Management and Mobile Application Development.</p>
              <p>I also had the opportunity to participate in a PACE unit, which essentially involves a software focused internship. For the project, we were tasked to build a website for Support Marian Street Theatre (SMST) so that they could increase their engagement with new members of the theatre. We created the website using ReactJS and a MongoDB database, which was such a valuable learning experience. We also had to learn about professional documentation and the Agile software development lifecycle. I was so lucky to be partnered with SMST, as they provided so much support and encouragement for our groups. It is so exciting to be a part of the re-opening of Marian Street Theatre!</p>  
            </div>
          </div>
          <div id='ICPC'>
            <p>I am incredibly fortunate to have access to so many amazing opportunities through Macquarie Uni. For example, in 2021 I was a part of one of the teams for the International Collegiate Programming Contest through the university's Competitive Programming club. This was such a valuable experience, where I was able to work collaboratively to solve programming problems utlising all the concepts I had learnt throughout my time at university (Algorithms, Data Structures etc.). </p>
            <img src={icpc} id='ICPCImg' alt='MQ Competitive Programming Logo'/>
          </div>
          <div id='workshops'>
            <img src={workshop} id='workshopImg' alt='Workshop'/>
            <p>Throughout my whole degree I have participated in programming workshops sponsored by Google exploreCSR, targeting at learning about and participating in research. Most notably, in 2022 I was asked to be a mentor for the "Ready for Research Workshop" where we learnt about Machine Learning, and implemented our own algorithms. Below is a demo video of the project that I worked on alongside a few other peers. </p>
          </div>
          <div id='MLVid'>
            <iframe width="65%" height="315" title='Machine Learning Demo' src="https://www.youtube.com/embed/vgAD-olaLfs" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>

          <div id='interests'>
            <img src={pellas} id='pellasImg' alt='Macappella'/>
            <p>Outside of programming, I am very involved in the music world, as I have sung and played piano since about the age of 7. As a part of my flexible zone, I have taken a few music units (Vocal Studies), which I find provides a great contrast to computing units. Additionally, at the moment I am a part of Macappella, which is one of Macquarie Uni's competitive acappella groups (yes, like pitch perfect). I am the current choreographer of the group, and have also been involved in the Video Production of some of our online <a href='https://youtu.be/Oo82IDpDHO0' target="_blank">projects.</a></p>
          </div>
        </div>
        <div className='section' id="projExtra">
          <h2 className='sectionTitles'>Projects</h2>
          <div id='thisWebsite'>
            <p>This website is coded using ReactJS, which I really enjoy using. It is a work in progress, and will be updated as I learn more about Web Development.</p>
          </div>
          <div id='mobileApp'>
            <p>Also, as a part of Mobile Application Development (a unit I took in 2022), I was tasked to develop an app to store memories utlising React Native. You can find this project and all of the code in my GitHub. Additionally, we used Figma to create wireframes and mockups of all of the screens.</p>
            <p>Here are some of the Figma wireframes/mockups that were created:</p>
            <div id="imgCarousel">
              <Carousel>
                <div>
                  <img src={figma1} alt='Welcome Screen'/>
                  <p className="legend">Welcome Screen</p>
                </div>
                <div>
                  <img src={figma2} alt='Login Screen'/>
                  <p className="legend">Login Screen</p>
                </div>
                <div>
                  <img src={figma3} alt='One of the Registration screens'/>
                  <p className="legend">One of the Registration screens (confirmation)</p>
                </div>
                <div>
                  <img src={figma4} alt='Home screen'/>
                  <p className="legend">Home screen</p>
                </div>
                <div>
                  <img src={figma5} alt='Memory Collections screen'/>
                  <p className="legend">Memory Collections screen</p>
                </div>
                <div>
                  <img src={figma6} alt='All the Memories in a Collection'/>
                  <p className="legend">All the Memories in a Collection</p>
                </div>
                <div>
                  <img src={figma7} alt='Adding a Memory'/>
                  <p className="legend">Adding a Memory</p>
                </div>
                <div>
                  <img src={figma8} alt='Memory Information'/>
                  <p className="legend">Memory Information (where you can edit and delete the Memory)</p>
                </div>

              </Carousel>
            </div>
          </div>
          <div id='otherProjects'>
{/* include machine learning link */}
          </div>
        </div>
        <div className='section' id="contact">
        <h2 className='sectionTitles'>Contact Me!</h2>
          <p className='contactText'>Thank you so much for visiting my website! If you would like to reach out to me, I am on <a href='https://www.linkedin.com/in/anita-furtado/' target='_blank'>LinkedIn</a> so please feel free to send me a message there!</p>
          <p className='contactText'>Additionally, here is my <a href='https://github.com/anitafurtado' target='_blank'>GitHub</a> if you want to check out the source code for this project, or any other projects that I have on there.</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
