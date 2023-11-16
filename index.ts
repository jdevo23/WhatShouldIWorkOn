import createButton from "./utils.js";
import buttonConfig from "./elementConfig.js";

interface Idea {
	id: number;
	name: string;
	priority: number;
	createdAt: Date;
	lastModified: Date;
	img: string;
}

interface Project {
	id: number;
	name: string;
	completed: boolean;
	createdAt: Date;
	lastModified: Date;
	description: string;
}

type IdeasArray = Array<Idea>;
const ideas: IdeasArray = [
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

type ProjectsArray = Array<Project>;

const projects: ProjectsArray = [
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

const unprintItemByID = (elementId: string): void => {
	const element = document.getElementById(elementId);
	element.remove();
};

const deleteIdea = (value: string): void => {
	const listItemId = Number(value);
	const index = ideas.findIndex(l => l.id === listItemId);
	ideas.splice(index, 1);

	const elementId = `idea-${listItemId.toString()}`;
	unprintItemByID(elementId);
};

const printIdeaItem = ({ name, id }: Idea): void => {
	const listItemsContainer = document.getElementById("ideas-container");

	const listItemElement: HTMLDivElement = document.createElement("div");
	listItemElement.textContent = name;
	listItemElement.id = `idea-${id.toString()}`;

	const button = createButton(buttonConfig.text, buttonConfig.classes);
	button.value = id.toString();
	button.addEventListener("click", () => {
		deleteIdea(button.value);
	});
	listItemElement.appendChild(button);

	listItemsContainer.appendChild(listItemElement);
};

const printProjectItem = ({ id, name }: Project): void => {
	const projectItemsContainer = document.getElementById("projects-container");

	const gridElement: HTMLDivElement = document.createElement("div");
	gridElement.textContent = name;
	gridElement.id = `project-${id.toString()}`;

	projectItemsContainer.appendChild(gridElement);
};

// const addListItem = (itemName: string): void => {
// 	const idea: Idea = {
// 		id: ideas.length + 1,
// 		name: itemName,
// 		priority: 0,
// 		createdAt: new Date(),
// 		lastModified: new Date(),
// 		img: "",
// 	};
// 	ideas.push(idea);
// 	printIdeaItem(idea);
// };

const init = (): void => {
	ideas.forEach(i => printIdeaItem(i));
	projects.forEach(p => printProjectItem(p));
};

document.addEventListener("DOMContentLoaded", init);
