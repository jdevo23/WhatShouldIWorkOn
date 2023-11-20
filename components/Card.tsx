import { h, FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import ProgressBar from "./ProgressBar";
import "../input.css";

type CardProps = {
	id: number;
	title: string;
	description: string;
	progress?: number;
};

const Card: FunctionalComponent<CardProps> = ({ id, title, description, progress }) => {
	const [menuOpen, setMenuOpen] = useState(false);

	// TODO: change this
	const idPrefix = `${id.toString()}-${title}`;
	return (
		<div class="p-5 relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
			<header class="mb-2 flex flex-row justify-between">
				<h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>
				<button
					id="dropdownMenuIconButton"
					data-dropdown-toggle="dropdownDots"
					class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					type="button"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<svg
						class="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 4 15"
					>
						<path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
					</svg>
				</button>
			</header>

			<div
				id={`${idPrefix}-dropdown`}
				class={`bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute right-5 ${
					menuOpen ? "" : "hidden"
				} `}
			>
				<ul
					class="py-2 text-sm text-gray-700 dark:text-gray-200"
					aria-labelledby="dropdownMenuIconButton"
				>
					<li>
						<a
							href="#"
							class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>
							Dashboard
						</a>
					</li>
					<li>
						<a
							href="#"
							class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>
							Settings
						</a>
					</li>
					<li>
						<a
							href="#"
							class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>
							Earnings
						</a>
					</li>
				</ul>
				<div class="py-2">
					<a
						href="#"
						class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
					>
						Separated link
					</a>
				</div>
			</div>

			<div>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>

				{progress ? (
					<div class="my-5">
						<ProgressBar progress={progress}></ProgressBar>
					</div>
				) : null}

				<a
					href="#"
					class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Read more
					<svg
						class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</a>
			</div>
		</div>
	);
};

export default Card;
