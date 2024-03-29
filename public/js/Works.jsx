import React from "react";
import ReactDom from "react-dom";
import startBirdDefense  from "../projects/birdDefense/birdDefense";

var demoSpaceCreated = false;

function creatDemoSpace(event, subject) {
    console.log("creating demo area......");
    // // event.preventDefault();
    // var renderingLocation =  document.getElementById("demo");
    // // if (demoSpaceCreated) {        
    // //     ReactDom.render(<div></div>, renderingLocation);
    // //     demoSpaceCreated = false;
    // // }
    // // else {
    //     ReactDom.render(
    //         <div>
    //             <h1>{subject} Demo</h1>
    //             <canvas id="demoCanvas" width="1400" height="800"></canvas>
    //         </div>,
    //         renderingLocation
    //     );
    // //     demoSpaceCreated = true;
    // // }
    // // Open a new window and save a reference to it

    var modalWindow = window.open("", "modalWindow", "screenX=1500,screenY=500,width=1400,height=800");
    

    // Make the new window modal by disabling the parent window
    modalWindow.document.addEventListener('click', function() {
        console.log("clicked");
        // modalWindow.close();
    });

    // Disable the parent window
    window.addEventListener('blur', function() {
    window.focus();
    });

}

const projects = [
    {
        id: "MazeSolver",
        name: "Maze Solver",
        description: "Create a maze and then solve it with a bunch of bouncing balls.",
        category: "Java Appliet",
        imgSrc: "images/maze-solver.png",
        appStarter: function runMazeSolver(event) { creatDemoSpace(event, "Maze Solver"); }
    },
    {
        id: "RegressionCalculator",
        name: "Regression Calculator",
        description: "Plot some points and watch the calculator find an equation of best fit.",
        category: "Website",
        imgSrc: "images/regression-calculator-icon.jpg",
        appStarter: function runRegressCalculator(event) { creatDemoSpace(event, "Regression Calculator"); }
    },
    {
        id: "BirdDefense",
        name: "Bird Defense",
        description: "Tower defense game written with vanilla Javascript with multiplayer mode.",
        category: "Website",
        imgSrc: "images/bird-defense-icon.jpg",
        appStarter: function runBirdDefense(event) {creatDemoSpace(event, "Bird Defense"); startBirdDefense(); }
    },
    {
        id: "EmailFormatter",
        name: "Email Formatter",
        description: "Create email templates and write emails with a powerful formatting language.",
        category: "Website",
        imgSrc: "images/email-formatter-icon.png",
        appStarter: function runEmailFormatter(event) { creatDemoSpace(event, "Email Formatter");  }
    },
    {
        id: "KnowledgeBase",
        name: "Knowledge Base",
        description: "Personal knowledge repository. Record and search through your prior knowledge.",
        category: "Website",
        imgSrc: "images/knowledge-base-icon.jpg",
        appStarter: function runKnowledgeBase(event) { creatDemoSpace(event, "Knowledge Base");  }
    },
    {
        id: "Minesweeper",
        name: "Minesweeper",
        description: "The classic minesweeper game.",
        category: "Java Applet",
        imgSrc: "images/minesweeper-icon.jpg",
        appStarter: function runMinesweeper(event) { event.preventDefault(); }
    }
];

function ProjectCard(proj) {
    return (
      <li class="folio-list__item column">
        <a class="folio-list__item-link" href={proj.id} onClick={proj.appStarter}>
            <div class="folio-list__item-pic">
                <img src={proj.imgSrc} alt=""/>
            </div>
            <div class="folio-list__item-text">
                <div class="folio-list__item-cat">
                    {proj.category}
                </div>
                <div class="folio-list__item-title">
                    {proj.name}
                </div>
                <div class="folio-list__item-desc">
                    {proj.description}
                </div>
            </div>
        </a>
      </li>
    );
}

function CreateProject(proj) {
    return (
        <ProjectCard
                key={proj.id}
                category={proj.category}
                name={proj.name}
                imgSrc={proj.imgSrc}
                description={proj.description}
                appStarter={proj.appStarter}
        />
    );
}

function Works() {
    // data-animate-el doesn't work in <h2 />, <li />
    return (
        <div class="row works-portfolio">
            <div class="column lg-12" data-animate-block>
                <h2 class="text-pretitle">  
                    Recent Works
                </h2>
                <div id="demo"></div>
                <ul class="folio-list row block-lg-one-half block-stack-on-1000">
                    {projects.map(CreateProject)}                    
                </ul>
            </div>
        </div>
    );
}

export default Works;