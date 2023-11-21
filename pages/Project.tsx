import { h, FunctionalComponent } from "preact";
import { ProgressBar, SubHeader } from "../components/index";

interface Item {
	id: number;
	title: string;
	description: string;
	progress?: number;
}

type ItemsArray = Array<Item>;

const items: ItemsArray = [
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

type ProjectProps = {
	path: string;
	id?: string;
	matches?: object;
	url?: string;
};

const Project: FunctionalComponent<ProjectProps> = props => {
	let id: number;
	if (props.id) {
		id = parseInt(props.id, 10);
	} else {
		return <div></div>;
	}

	// fetch data
	const item = items.find(({ id: itemId }) => itemId === id);

	if (!item) {
		throw new Error("Item not found");
	}

	const { title, description, progress } = item;

	return (
		<section>
			<header>
				<h1 class="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
					{title}
				</h1>
			</header>

			<SubHeader>Description</SubHeader>
			<p>{description}</p>

			{typeof progress === "number" ? <ProgressBar progress={progress} /> : null}

			{/* TO-DO LIST */}
			<div></div>
		</section>
	);
};

export default Project;
