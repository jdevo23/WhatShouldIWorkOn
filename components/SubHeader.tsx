import { h, FunctionalComponent } from "preact";
import "../input.css";

const SubHeader: FunctionalComponent = ({ children }) => (
	<h2 class="my-5 text-4xl font-extrabold dark:text-white">{children}</h2>
);

export default SubHeader;
