export default function createButton(text: string, classes: string[]): HTMLButtonElement {
	const button = document.createElement("button");
	button.textContent = text;
	button.classList.add(...classes);
	return button;
}
