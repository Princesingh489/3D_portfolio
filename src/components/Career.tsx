import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — CSE</h4>
                <h5>Lovely Professional University</h5>
              </div>
              <h3>2021–25</h3>
            </div>
            <p>
              Bachelor of Technology in Computer Science and Engineering from
              Lovely Professional University, Pagwara, Punjab. Gained
              hands-on experience in Python, data analysis, machine learning,
              and full-stack web development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Training</h4>
                <h5>Programming Pathshala</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Self-paced Python course covering data analysis with NumPy and
              Pandas, data cleaning, preprocessing, CSV/Excel manipulation,
              and real-world problem solving with small data analysis projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Coursera & GeeksforGeeks</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Excel (Coursera), SQL for Data Science (Coursera), Pandas for
              Data Analysis (GeeksforGeeks). Continuously upskilling in data
              science and analytics tools.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Secondary</h4>
                <h5>Indian Public School, Hajipur</h5>
              </div>
              <h3>2019–21</h3>
            </div>
            <p>
              Intermediate education from Indian Public School, Hajipur, Bihar.
              Built a strong foundation in science and mathematics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
