// import Express from "express";
const express = require("express");

const app = express();

const projects = [
  { project: "Challenges_jschallenger.com" },
  { project: "Using-Studio-Ghilis-API-With-JS-Only" },
  { project: "my-portfolio-next" },
  { project: "Youtube-Navbar-2021" },
  { project: "Mana-raWozonWebsite" },
  { project: "Movies-Website" },
  { project: "Add-Remove-Mark-and-Mark-off-With-ReactJS" },
  { project: "My-Portfolio" },
  { project: "Github_Explorer" },
  { project: "MestreALMO.github.io" },
  { project: "Tests-With-useState-useEffect-useRef" },
  { project: "Tic-Tac-Toe-React-in-JS" },
  { project: "ReactJS-with-TypeScript-Template" },
  { project: "Retractable-Accordion" },
];

// const projects = [
//   {
//     author: "Challenges_jschallenger.com",
//     content: "Using-Studio-Ghilis-API-With-JS-Only",
//   },
//   {
//     author: "Challenges_jschallenger.com",
//     content: "Using-Studio-Ghilis-API-With-JS-Only",
//   },
//   {
//     author: "Challenges_jschallenger.com",
//     content: "Using-Studio-Ghilis-API-With-JS-Only",
//   },
//   {
//     author: "Challenges_jschallenger.com",
//     content: "Using-Studio-Ghilis-API-With-JS-Only",
//   },
// ];

app.get("/", function (req, res) {
  res.send(projects);
});

app.listen(3100);
