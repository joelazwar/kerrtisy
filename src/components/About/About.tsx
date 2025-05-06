import React from "react";
import "./About.css";

const About: React.FC = () => {
    return (
      <div className="about-container">
        {/* Left Section */}
        <div className="about-text">
            
          <h1>About</h1>
          <div className="paragraphs">
            <p>
                Teryll 'Kerrtisy' KerrDouglas is a Canadian visual artist with over a decade of experience.
                His portfolio reflects his personal aesthetic and general interests.
            </p>
            <p>
                Helping brands and individuals tell their stories through powerful content — 
                from concept to final cut. He hopes to someday expand his work & place it into the 
                hands of those who can display it on a global scale.
            </p>
            <br />
            <p className="paragraph-footer">
                © 2025 by Teryll KerrDouglas, Kerrtisy Ltd. Nstalgia Est. 2021. Photograph of Kerrtisy
            </p>
        
            </div>
        </div>
  
        {/* Right Section */}
        <div className="about-image">
          <img
            src="images/about.avif"
            alt="Man standing on artwork"
          />
        </div>
      </div>
    );
  };
  
  export default About;