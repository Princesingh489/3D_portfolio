import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <div className="about-content">
          <div className="about-photo-wrapper">
            <img
              src="/images/prince_photo.png"
              alt="Prince Kumar Singh"
              className="about-photo"
            />
          </div>
          <p className="para">
            I am a B.Tech Computer Science graduate from Lovely Professional
            University with a passion for Python development and data science. I
            enjoy building intelligent web applications that solve real-world
            problems — from AI-powered document Q&A systems to supply chain
            logistics optimization. I thrive on turning complex data into
            actionable insights using machine learning, data analysis, and
            interactive visualizations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
