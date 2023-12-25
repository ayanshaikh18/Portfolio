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
            I am a software engineer with 3 year of experience (Including Internships) in the development of applications
            using Java, Spring Boot, React JS, PostgreSQL, Redis, AWS, Python, Django.

            <br /><br />
            I have done my bachelors in the field of Computer Engineering from the Dharmsinh Desai University, Nadiad in the year 2022.

            <br /><br />
            Apart from technologies, I love playing & watching sports like cricket, table tennis & badminton.
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
            <div className="h4">Ignosi Systems Pvt. Ltd. - Software Engineer</div>
            <div className="h6 text-muted">June 2023 - Present </div>
            <ul className="unordered-list mt-4">
              <li>
                Working as Full Stack Software Engineer with the technologies like Java, Spring Boot, Redis, PostgreSQL, ReactJs, AWS Cloud, etc.
              </li>
              <li>
                Working on a product which enables Financial Entites
                like Banks & NBFCs to the Digital Secure method of Financial Data sharing using an RBI governed Account Aggregator Framework.
              </li>
            </ul>
          </div>
          <div className="card card-body mb-3 shadow-sm">
            <div className="h4">Pirimid Fintech - SDE Intern</div>
            <div className="h6 text-muted">August 2021 - May 2022 </div>
            <ul className="unordered-list mt-4">
              <li>
                Learnt & understood about various tools & technologies required for the software development
                like git, java, Spring Boot, Javascript, React JS.
              </li>
              <li>
                Designed, implemented & tested easily integrable Backend REST APIs from the scratch for the assigned project.
                Took ownership for the project by constanly involving myself in the Development, Testing and release Lifecycle of the project.
              </li>
            </ul>
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
