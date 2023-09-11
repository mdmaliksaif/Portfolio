import React from 'react';
// import { BsSendFill } from react-icons/ba/BsSendFil;
export default function HeroSection() {
  const handleResumeDownload = () => {
    // Provide the URL to the PDF file in your public folder.
    const resumeUrl = '/img/SaifMalikResume%20(2).pdf';

    // Create a temporary anchor element to trigger the download.
    const anchor = document.createElement('a');
    anchor.href = resumeUrl;
    anchor.target = '_blank';
    anchor.download = 'SaifMalikResume.pdf'; // You can set the desired download filename here.
    anchor.click();
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Saif Malik</p>
          <h1 className="hero--section--title">
            <span className="animate-left">Full Stack</span>
            <br />
            <span className="animate-right">Developer</span>
          </h1>

          <p className="hero--section-description">
            I Am an Emerging MERN Stack Developer, and I'm
            <br /> very passionate and dedicated to my work
          </p>
          <div className="bt">
            <button className="btn btn-primary">Say Hello!  </button>
            <button
              style={{ marginLeft: '3px' }}
              className="btn btn-secondary"
              onClick={handleResumeDownload} // Updated the onClick handler
            >
              Download Resume {/* Updated button text */}
            </button>
          </div>
        </div>
      </div>
      <div className="hero--section--img">
        <img className="round" src="./img/bgpic.png" alt="mypic" />
      </div>
    </section>
  );
}
