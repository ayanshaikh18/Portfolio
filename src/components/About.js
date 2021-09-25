import ddu from "../assets/images/DDU.png";
import rjj from "../assets/images/RJJ.webp";

const About = () => {
  return (
    <>
      <div className="row mt-3 d-flex justify-content-center">
        <div className="h1">About Me</div>
      </div>

      <div className="row mt-3">
        <div className="col-sm-12">
          <div className="h3">Little Bit About Myself</div>
          <p className="mt-3">
            I am final year student currently pursuing my B Tech. degree in
            Computer Engineering. I am from Valsad city located in South
            Gujarat. Web Development is my main field of Interest. I have also
            worked with Machine Learning & Mobile Application Development. I
            like to create interesting applications. Apart from technologies, I
            love playing & watching sports, specially cricket. I also like
            watching Movies & web series for entertainment and relaxation.
          </p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-sm-12">
          <div className="h3">Work Experience</div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-sm-12">
          <div className="card card-body mb-3 shadow-sm">
            <div className="h4">Fintech Pirimid - SDE Intern</div>
            <div className="h6 text-muted">August 2021 - present </div>
          </div>
          <div className="card card-body shadow-sm">
            <div className="h4">
              Root Force Marketing - Web Developer Intern
            </div>
            <div className="h6 text-muted">May 2021 - July 2021 </div>
            <ul className="unordered-list mt-4">
              <li>Worked on Django Framework as Full Stack Developer</li>
              <li>
                Implemented features like Email Automation, Web Push Automation
                & SMS automation
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-sm-12">
          <div className="h3">Education</div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-sm-12">
          <div className="card card-body mb-3 shadow-sm">
            <div className="h4">Dharmsinh Desai university, Nadiad</div>
            <div className="h5 text-muted">Bachelor of Technology, Computer Engineering</div>
            <div className="h6 text-muted">July 2018 - Present</div>
          </div>

          <div className="card card-body mb-3 shadow-sm">
            <div className="h4">Sett R.J.J High School, Valsad</div>
            <div className="h5 text-muted">Higher Secondary Education</div>
            <div className="h6 text-muted">2016 - 2018</div>
          </div>
        </div>
      </div>

      <br />
      <br />
    </>
  );
};

export default About;
