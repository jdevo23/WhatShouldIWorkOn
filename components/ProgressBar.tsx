import { h, FunctionalComponent } from "preact";
import "../input.css";

type ProgressProps = {
	progress: number;
};

const ProgressBar: FunctionalComponent<ProgressProps> = ({ progress }) => {
	const style = {
		width: `${progress.toString()}%`,
	};

	return (
		<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
			<div class="bg-blue-600 h-2.5 rounded-full" style={style}></div>
		</div>
	);
};

export default ProgressBar;
