/*
    We need to be able to add list items
    We need to be able to remove list items
    We can ask the program to select a random list item
*/
var listItems = [];
var addListItem = function (itemName) {
    var item = { name: itemName, id: listItems.length + 1 };
    console.log("addListItem", item);
    listItems.push(item);
    console.log("listItems", listItems);
    printListItem(item);
};
var deleteListItem = function (value) {
    var listItemId = Number(value);
    var index = listItems.findIndex(function (l) { return l.id === listItemId; });
    listItems.splice(index, 1);
    var elementId = "list-item-" + listItemId.toString();
    unprintListItem(elementId);
};
var printListItem = function (_a) {
    var name = _a.name, id = _a.id;
    var listItemsContainer = document.getElementById("list-items-container");
    var listItemElement = document.createElement("li");
    listItemElement.textContent = name;
    listItemElement.id = "list-item-" + id.toString();
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.value = id.toString();
    deleteButton.addEventListener("click", function () { deleteListItem(deleteButton.value); });
    listItemElement.appendChild(deleteButton);
    listItemsContainer.appendChild(listItemElement);
};
var unprintListItem = function (elementId) {
    var element = document.getElementById(elementId);
    element.remove();
};
// const printListItems = (): undefined => {
//     const listItemsContainer = document.getElementById("list-items-container");
//     listItems.forEach(({ id, name }) => {
//         const element: HTMLLIElement = document.createElement("li");
//         element.textContent = name;
//         element.id = id.toString();
//         listItemsContainer.appendChild(element);
//     });
// }
var init = function () {
    var form = document.getElementById("add-item-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var inputElement = document.getElementById("add-item-input");
        var itemName = inputElement.value;
        addListItem(itemName);
    });
};
document.addEventListener("DOMContentLoaded", init);
