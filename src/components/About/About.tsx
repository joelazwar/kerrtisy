import React from "react";

const About: React.FC = () => {
    return (
      <div className="flex flex-col sm:flex-row justify-between px-8 sm:px-4 gap-x-5 sm:gap-x-20 items-center animate-fade-in">
        {/* Left Section */}
        <div className="flex-1/2">
            
          <h1 className="text-5xl mb-10 font-eurostile">About</h1>
          <div className="">
            <p>
                Teryll 'Kerrtisy' KerrDouglas is a Canadian visual artist with over a decade of experience.
                His portfolio reflects his personal aesthetic and general interests.
            </p>
            
            <br />
            <p>
                Helping brands and individuals tell their stories through powerful content — 
                from concept to final cut. He hopes to someday expand his work & place it into the 
                hands of those who can display it on a global scale.
            </p>

            <br />
            <p className="hidden sm:block">
                © 2025 by Teryll KerrDouglas, Kerrtisy Ltd. Nstalgia Est. 2021. Photograph of Kerrtisy
            </p>
        
            </div>
        </div>
  
        {/* Right Section */}
        <div className="flex-1/2 justify-center items-center">
          <img
            src="images/about.avif"
            alt="Man standing on artwork"
          />
        </div>
      </div>
    );
  };
  
  export default About;