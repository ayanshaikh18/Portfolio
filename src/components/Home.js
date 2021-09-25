import styled from "styled-components";

import my_img from "../assets/images/ayan3.jpg";

const MyImg = styled.img`
  padding: 10px;
  margin: 20px;
  position: relative;
  width: 75%;
  height: 90%;
  @media only screen and (min-width: 490px) {
    border-radius: 55px;
  }
  /* opacity: 0.85; */
`;

const Home = () => {
  return (
    <div className="row mt-3 d-flex justify-content-center">
      <div className="col-sm-6 d-flex justify-content-center">
        <MyImg src={my_img} />
      </div>
      <div className="col-sm-6">
        <div className="h1 mt-5">
          Hello, I am Mahammadayan Shaikh, Student at Dharmsinh Desai
          University. <br />
        </div>
        <div className="h3 mt-5">
          I'm a <span id="designation"></span>
        </div>
        <div className="row mt-5">
          <div className="col-2">
            <div className="card card-body shadow-sm h4 rounded-circle">
              <a
                className="fa fa-instagram"
                href="https://www.instagram.com/_.ayan18/"
              ></a>
            </div>
          </div>
          <div className="col-2">
            <div className="card card-body shadow-sm h4 rounded-circle">
              <a
                className="fa fa-linkedin"
                href="https://www.linkedin.com/in/mahammadayan-shaikh-3ab9991aa/"
              ></a>
            </div>
          </div>
          <div className="col-2">
            <div className="card card-body shadow-sm h4 rounded-circle">
              <a
                className="fa fa-github"
                href="https://github.com/ayanshaikh18/"
              ></a>
            </div>
          </div>
          <div className="col-2">
            <div className="card card-body shadow-sm h4 rounded-circle">
              <a
                className="fa fa-envelope"
                href="mailto:mahammadayan18@gmail.com"
              ></a>
            </div>
          </div>
          <div className="col-2">
            <div className="card card-body shadow-sm h4 rounded-circle">
              <a
                href="https://twitter.com/ayan_shaikh_18"
                className="fa fa-twitter"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
