import { useState } from "react";
import styled from "styled-components";

import projects from "../data/projects";

const MyImg = styled.img`
  padding: 10px;
  margin: 20px;
  position: relative;
  width: 80%;
  height: 80%;
  @media only screen and (min-width: 490px) {
    border-radius: 50px;
  }
`;

const ProjectImg = styled.img`
  margin: 0px;
  position: relative;
  width: 100%;
  max-height: 300px;
`;

const Project = (props) => {
  return (
    <div className="card mb-5 shadow" style={{ borderRadius: "10px" }}>
      <div className="card-body row d-flex justify-content-center">
        <div className="col-sm-5">
          <ProjectImg src={props.project.poster} />
          <a
            href={props.project.links.github}
            role="button"
            className="mt-3 btn btn-block btn-outline-dark mb-sm-3 mb-lg-0"
          >
            Source Code &nbsp;<i className="fa fa-code" aria-hidden="true"></i>
          </a>
          <br />
          {/* <br /> */}
        </div>
        <div className="col-sm-6 ml-md-1">
          <div className="h2 pt-sm-5 pt-md-0">{props.project.title}</div>
          <div className="h5 text-muted">{props.project.technology}</div>
          <p className="card-text mt-3">{props.project.description}</p>
          {props.project.points.map((point, index) => {
            return (
              <ul key={index} className="unordered-list mt-4">
                <b>{point.name}</b>
                {point.all_points.map((p, i) => {
                  return <li>{p}</li>;
                })}
              </ul>
            );
          })}

          {props.project.links.demo && (
            <p>
              Check the Live App{" "}
              <a
                href={props.project.links.demo}
                target="_blank"
                className="font-weight-bold"
              >
                Here
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  console.log(projects);
  return (
    <>
      <div className="row mt-3">
        <div className="h1 font-weight-bold d-flex justify-content-center col-sm-12">
          Projects I Worked Upon
        </div>
      </div>
      {/* <div className="row d-flex justify-content-center">
        <div className="col-sm-6">
          <MyImg src={project_img} />
        </div>
      </div> */}
      <hr />
      <div className="row mt-sm-3 mt-md-5 d-flex justify-content-center">
        <div className="col-sm-12">
          {projects.map((project, index) => {
            return <Project project={project} key={index} />;
          })}
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Projects;
