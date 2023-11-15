interface ListItem {
	id: number;
	name: string;
}

type ListItemArray = Array<ListItem>;

const listItems: ListItemArray = [];

const unprintListItem = (elementId: string): void => {
	const element = document.getElementById(elementId);
	element.remove();
};

const deleteListItem = (value: string): void => {
	const listItemId = Number(value);
	const index = listItems.findIndex((l) => l.id === listItemId);
	listItems.splice(index, 1);

	const elementId = `list-item-${listItemId.toString()}`;
	unprintListItem(elementId);
};

const printListItem = ({ name, id }: ListItem): void => {
	const listItemsContainer = document.getElementById("list-items-container");

	const listItemElement: HTMLLIElement = document.createElement("li");
	listItemElement.textContent = name;
	listItemElement.id = `list-item-${id.toString()}`;

	const deleteButton: HTMLButtonElement = document.createElement("button");
	deleteButton.textContent = "Delete";
	deleteButton.value = id.toString();
	deleteButton.addEventListener("click", () => {
		deleteListItem(deleteButton.value);
	});

	listItemElement.appendChild(deleteButton);
	listItemsContainer.appendChild(listItemElement);
};

const addListItem = (itemName: string): void => {
	const item: ListItem = { name: itemName, id: listItems.length + 1 };
	listItems.push(item);
	printListItem(item);
};

const init = (): void => {
	const form = document.getElementById("add-item-form") as HTMLFormElement;
	form.addEventListener("submit", (event) => {
		event.preventDefault();

		const inputElement = document.getElementById("add-item-input") as HTMLInputElement;
		const itemName = inputElement.value;

		addListItem(itemName);
	});
};

document.addEventListener("DOMContentLoaded", init);
