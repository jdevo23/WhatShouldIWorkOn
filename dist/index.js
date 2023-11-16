import createButton from "./utils.js";
import buttonConfig from "./elementConfig.js";
var ideas = [
    {
        id: 1,
        name: "Valve Clearance Helper Site",
        priority: 1,
        createdAt: new Date(),
        lastModified: new Date(),
        img: "",
    },
    {
        id: 2,
        name: "Prep for next job",
        priority: 2,
        createdAt: new Date(),
        lastModified: new Date(),
        img: "",
    },
    {
        id: 3,
        name: "Ray Tracer",
        priority: 3,
        createdAt: new Date(),
        lastModified: new Date(),
        img: "",
    },
    {
        id: 4,
        name: "Compiler",
        priority: 4,
        createdAt: new Date(),
        lastModified: new Date(),
        img: "",
    },
    {
        id: 5,
        name: "Leetcode Interview Top 150",
        priority: 5,
        createdAt: new Date(),
        lastModified: new Date(),
        img: "",
    },
    {
        id: 6,
        name: "Advent of Code",
        priority: 6,
        createdAt: new Date(),
        lastModified: new Date(),
        img: "",
    },
    {
        id: 7,
        name: "Strategy Game",
        priority: 7,
        createdAt: new Date(),
        lastModified: new Date(),
        img: "",
    },
];
var projects = [
    {
        id: 1,
        name: "Project 1",
        completed: false,
        createdAt: new Date(),
        lastModified: new Date(),
        description: "",
    },
    {
        id: 2,
        name: "Project 2",
        completed: false,
        createdAt: new Date(),
        lastModified: new Date(),
        description: "",
    },
    {
        id: 3,
        name: "Project 3",
        completed: false,
        createdAt: new Date(),
        lastModified: new Date(),
        description: "",
    },
    {
        id: 4,
        name: "Project 4",
        completed: false,
        createdAt: new Date(),
        lastModified: new Date(),
        description: "",
    },
    {
        id: 5,
        name: "Project 5",
        completed: false,
        createdAt: new Date(),
        lastModified: new Date(),
        description: "",
    },
];
var unprintItemByID = function (elementId) {
    var element = document.getElementById(elementId);
    element.remove();
};
var deleteIdea = function (value) {
    var listItemId = Number(value);
    var index = ideas.findIndex(function (l) { return l.id === listItemId; });
    ideas.splice(index, 1);
    var elementId = "idea-".concat(listItemId.toString());
    unprintItemByID(elementId);
};
var printIdeaItem = function (_a) {
    var name = _a.name, id = _a.id;
    var listItemsContainer = document.getElementById("ideas-container");
    var listItemElement = document.createElement("div");
    listItemElement.textContent = name;
    listItemElement.id = "idea-".concat(id.toString());
    var button = createButton(buttonConfig.text, buttonConfig.classes);
    button.value = id.toString();
    button.addEventListener("click", function () {
        deleteIdea(button.value);
    });
    listItemElement.appendChild(button);
    listItemsContainer.appendChild(listItemElement);
};
var printProjectItem = function (_a) {
    var id = _a.id, name = _a.name;
    var projectItemsContainer = document.getElementById("projects-container");
    var gridElement = document.createElement("div");
    gridElement.textContent = name;
    gridElement.id = "project-".concat(id.toString());
    projectItemsContainer.appendChild(gridElement);
};
var addListItem = function (itemName) {
    var idea = {
        id: ideas.length + 1,
        name: itemName,
        priority: 0,
        createdAt: new Date(),
        lastModified: new Date(),
        img: "",
    };
    ideas.push(idea);
    printIdeaItem(idea);
};
var init = function () {
    ideas.forEach(function (i) { return printIdeaItem(i); });
    projects.forEach(function (p) { return printProjectItem(p); });
};
document.addEventListener("DOMContentLoaded", init);
