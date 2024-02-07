import React, { useEffect } from "react";
import { Box, Center, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import CircleMarquee from "./CircularMarqee";
import html from ".././images/skills/html.png"
import css from ".././images/skills/css.png";
import js from ".././images/skills/javascript.png";
import react from ".././images/skills/react.png";
import reactrouter from ".././images/skills/router.png";
import typescript from ".././images/skills/typescript.png";
import nextjs from ".././images/skills/nextjs.png";
import redux from ".././images/skills/redux.png";
import svelte from ".././images/skills/svelte-icon.png";
import tailwind from ".././images/skills/tailwind-css.png";
import chakraui from ".././images/skills/chakraui.png";
import bootstrap from ".././images/skills/bootstrap.png";
import mongoDb from ".././images/skills/mongodb.png";
import nodejs from ".././images/skills/node-js.png";
import mongoose from ".././images/skills/mongoose.png";
import express from ".././images/skills/express.png";
import chatgpt from ".././images/skills/chatgpt.png";
import figma from ".././images/skills/figma.png";
import git from ".././images/skills/git.png";
import github from ".././images/skills/github.png";
import jira from ".././images/skills/jira.png";
import postman from ".././images/skills/postman.png";
import vscode from ".././images/skills/vscode.png";
import projectStyle from "./skills.module.css";
import { AppWrap, MotionWrap } from "../wrapper";

const Skills = () => {
  const skillLogo = {
    logo: [
      [
        { border: "#e65026b0", bg: "#f5a48e83", icn: html },
        { border: "#2196F3", bg: "#d3e6f792", icn: css },
        { border: "#F7DF1E", bg: "#f5eec38d", icn: js },
        { border: "#77CDE4", bg: "#aee9fa83", icn: react },
        { border: "#D10215", bg: "#f7c1c68d", icn: reactrouter },
        { border: "#77CDE4", bg: "#d5eef583", icn: typescript },
        { border: "#000000", bg: "#dddddd86", icn: nextjs },
        { border: "#8D68BD", bg: "#dbc6f786", icn: redux },
        { border: "#e65026b0", bg: "#f5a48e86", icn: svelte },
        { border: "#F7DF1E", bg: "#f5eec389", icn: tailwind },
        { border: "#86f553", bg: "#c9faaf8d", icn: chakraui },
        { border: "#8D68BD", bg: "#e2d2f786", icn: bootstrap },
        { border: "#499D4A", bg: "#c1fac290", icn: mongoDb },
        { border: "#8AB149", bg: "#dff8b75c", icn: nodejs },
        { border: "#F7DF1E", bg: "#f5eec381", icn: mongoose },
        { border: "#48dff3", bg: "#bde5f87a", icn: express },
      ],
      [
        { border: "#e65026b0", bg: "#f5a48e83", icn: git },
        { border: "#2196F3", bg: "#d3e6f792", icn: github },
        { border: "#f7801e", bg: "#f5c1868d", icn: postman },
        { border: "#77CDE4", bg: "#aee9fa83", icn: vscode },
        { border: "#2faef7", bg: "#83d3f390", icn: jira },
        { border: "#46e4bc", bg: "#97fcd583", icn: chatgpt },
        { border: "#f13b96", bg: "#eea9e285", icn: figma },
      ],
    ],
  };

  const exp = [
    {
      name: "Masai School",
      role: "SDE intern",
      summary:
        "As a SDE intern, successfully engineered an elegant Average Performance, resulting in a commendable 15% improvement in user satisfaction. I leveraged AWS services to optimize email and SMS functionalities, achieving a remarkable 30% reduction in server response times. Through strategic optimization of API design, I accomplished a tenfold or more reduction in server costs.",
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.getElementsByClassName(projectStyle.card);

      for (const card of cards) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    document
      .getElementsByClassName(projectStyle.cards)[0]
      .addEventListener("mousemove", handleMouseMove);

    return () => {
      document
        .getElementsByClassName(projectStyle.cards)[0]
        .removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Flex
      mt={"12px"}
      overflow={"hidden"}
      flexDir={{ base: "column", md: "column", lg: "row" }}
      background={"rgba(255,255,255,0.04)"}
      style={{
        WebkitBackdropFilter: "blur(3px)",
      }}
      borderRadius={"12px"}
      backdropFilter={"blur(3px)"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={10}
      padding={{ base: "5px", sm: "8px", md: "12px", lg: "18px" }}


    >
      <CircleMarquee pack={skillLogo} />
      <Flex flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"} mt={3}>
        <Heading 
         backgroundImage={"linear-gradient(0deg, #4039a7, #d647db)"}
         backgroundClip={"text"}
         color={"transparent"}
        fontSize={{base:"20px",md:"23px",lg:"39px"}} fontWeight={900} mb={{base:"10px",md:"17px",lg:"22px"}}>1 year of Experience</Heading>
        <Grid
          className={projectStyle.cards}
        justifyContent={"center"}
        alignItems={"center"}
        >
          {
            exp.map((el,i)=>{
              return(
                <Box
                key={i}
                className={projectStyle.card}
                // height={{ base: "260px", md: "280px", lg: "300px" }}
                p={1}
                w={"100%"}
              >
                <Box className={projectStyle.cardborder}></Box>
                <Box
                  className={projectStyle.cardcontent}
                  overflow={"hidden"}
                  padding={{ base: "20px", md: "22px", lg: "30px" }}
                >
                  <Center
                    // color={"#fff"}
                    fontWeight={600}
                    fontSize={{ base: "15px", md: "20px", lg: "30px" }}
                  >
                   {el.name}
                  </Center>
                  <Center
                    // color={"#fff"}
                    fontWeight={200}
                    fontSize={{ base: "15px", md: "17px", lg: "20px" }}
                  >
                    {el.role}
                  </Center>
                  <Text textAlign={"center"} fontSize={{base:"12px",md:"13px",lg:"14px"}} width={{base:"200px",md:"250px",lg:"200px"}} >{el.summary}</Text>
                </Box>
              </Box>
              )
            })
          }
         
        </Grid>
      </Flex>
    </Flex>
  );
};
export default AppWrap(MotionWrap(Skills,'app__skills'),"Skills",'app__primarybg')
