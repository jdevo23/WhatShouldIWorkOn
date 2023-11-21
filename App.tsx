import { h, FunctionalComponent } from "preact";
import Router from "preact-router";
import { Card, SubHeader } from "./components/index";
import { Project as ProjectPage } from "./pages/index";
import "./input.css";

interface Project {
	id: number;
	title: string;
	description: string;
	progress: number;
}

interface Idea {
	id: number;
	title: string;
	description: string;
}

type ProjectsArray = Array<Project>;
type IdeasArray = Array<Idea>;

const projects: ProjectsArray = [
	{
		id: 1,
		title: "Project 1",
		description: "First project",
		progress: 25,
	},
	{
		id: 2,
		title: "Project 2",
		description: "Second project",
		progress: 50,
	},
	{
		id: 3,
		title: "Project 3",
		description: "Third project",
		progress: 75,
	},
];

const ideas: IdeasArray = [
	{
		id: 1,
		title: "Idea 1",
		description: "First idea",
	},
	{
		id: 2,
		title: "Idea 2",
		description: "Second idea",
	},
	{
		id: 3,
		title: "Idea 3",
		description: "Third idea",
	},
];

const App: FunctionalComponent = () => (
	<Router>
		<section class="w-full" path="/">
			<header>
				<h1 class="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
					What Should I Work On?
				</h1>
			</header>

			{/* PROJECTS */}
			<section class="my-10">
				<SubHeader>Projects</SubHeader>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{projects.map(({ id, title, description, progress }) => (
						<Card id={id} title={title} description={description} progress={progress} />
					))}
				</div>
			</section>

			{/* IDEAS */}
			<section class="my-10">
				<SubHeader>Ideas</SubHeader>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{ideas.map(({ id, title, description }) => (
						<Card id={id} title={title} description={description} />
					))}
				</div>
			</section>
		</section>

		<ProjectPage path="/project/:id" />
	</Router>
);

export default App;
