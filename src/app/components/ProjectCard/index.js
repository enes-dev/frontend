/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { Container, Text, TopDiv } from "./style";
import { StyledButton, ChartLang } from "../index";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const ProjectCard = ({ repository }) => {
  const path = `/project${repository.pathname}`;
  // const pathx = path.split("/");
  // const len = repository.issues;
  // console.log(len.length);
  return (
    <Container>
      <TopDiv>
        <div
          style={{
            width: 112.98,
            height: 112.98,
            marginTop: 30,
            color: "white",
          }}
        >
          <CircularProgressbarWithChildren value={66}>
            <div
              style={{
                fontSize: 12,
               marginTop: -5,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* <strong>{len.length}</strong> <br /> */}
              issues
            </div>
          </CircularProgressbarWithChildren>
          <Text>
            {repository.pathname}
            {/* {pathx[2]}📌{pathx[3]} */}
          </Text>

          <StyledButton>
            <Link to={path}>Details</Link>
          </StyledButton>
        </div>
      </TopDiv>
      <ChartLang />
    </Container>
  );
};

export default ProjectCard;
