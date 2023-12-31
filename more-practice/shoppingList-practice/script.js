// Dirty way of appending elements
function createListItem(item) {
  const li = `<li>${item}</li>`;
  //   document.querySelector(".items").appendChild(li);
}

// an okay way appending elements
function createListItem2(item) {
  const li = document.createElement("li");

  li.innerHTML = `${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;

  document.querySelector(".items").appendChild(li);
}

// clean and performant way appending elements
function createListItem3(item) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(item));

  const btn = document.createElement("button");
  btn.className = "remove-item btn-link text-red";

  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark";

  btn.appendChild(icon);
  li.appendChild(btn);
  document.querySelector(".items").appendChild(li);
}

// createListItem("Chocolate");
// createListItem2("Chocolate");
// createListItem3("Garri");
////////////////////////////////////////////////////

// replacing elements
function replaceFirstItem() {
  const firstItem = document.querySelector("li:last-child");
  const li = document.createElement("li");

  li.textContent = "Cupcakes";
  firstItem.replaceWith(li);
}
// replaceFirstItem();

function replaceSecondItem() {
  const secondItem = document.querySelector("li:nth-child(2");
  secondItem.outerHTML = "<li> Replace Second Item</li>";
}

// replaceSecondItem();

function replaceChildHeading() {
  const header = document.querySelector("header");
  const h1 = document.querySelector("header h1");

  const h2 = document.createElement("h2");
  h2.id = "app-title";
  h2.textContent = "Shopping Cart";

  header.replaceChild(h2, h1);
}
// replaceChildHeading();

/////////////////////////////////////////////////////////////////////////
// Event listeners
const clearBtn = document.querySelector("#clear");
const logo = document.querySelector("img");

function clearAllBtn() {
  const ul = document.querySelector(".items");
  const lis = ul.querySelectorAll("li");
  ul.remove(lis);
}

const onClick = () => console.log("you click me");
const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== "purple") {
    document.body.style.backgroundColor = "orangeRed";
  }
};
const onRightClick = () => console.log("Context menu");
const onMouseDwn = () => console.log("Mouse down");
const onMouseUp = () => console.log("Mouse Up");
const onDragStart = () => console.log("We started dragging");
const onDragStop = () => console.log("We stopped dragging");

clearBtn.addEventListener("click", clearAllBtn);

// logo.addEventListener("click", onClick);
// logo.addEventListener("dblclick", onDoubleClick);
// logo.addEventListener("contextmenu", onRightClick);
// logo.addEventListener("mousedown", onMouseDwn);
// logo.addEventListener("mouseup", onMouseUp);
// logo.addEventListener("dragstart", onDragStart);
// logo.addEventListener("dragend", onDragStop);
// setTimeout(() => clearBtn.removeEventListener("click", clearAllBtn), 5000);

/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/

// logo.addEventListener("click", (e) => {
//   console.log(e.target);
//   //   e.target.style.backgroundColor = "black";
//   console.log(`Event Type: ${e.type}`);
//   console.log(`Event Timestamp: ${e.timeStamp}`);
//   console.log(`Event clientX: ${e.clientX}, Event clientY: ${e.clientY}`);
//   console.log(`Event offsetX: ${e.offsetX}, Event offsetY: ${e.offsetY} `);
//   console.log(`Event pageX: ${e.pageX}, Event pageY: ${e.pageY}`);
//   console.log(`Event screenX: ${e.screenX}, Event screenY: ${e.screenY}`);
// });

const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");

function onInput(e) {
  console.log(e.target.value);
}

function onSelect(e) {
  console.log(e.target.value);
}

function onChecked(e) {
  console.log(e.target.checked);
}

function onFocus(e) {
  console.log("Input is focus");
  itemInput.style.outline = "2px solid green";
}

function onBlur(e) {
  console.log("Input not focus");
}

// itemInput.addEventListener("input", onInput);
// itemInput.addEventListener("focus", onFocus);
// itemInput.addEventListener("blur", onBlur);
// priorityInput.addEventListener("change", onSelect);
// checkbox.addEventListener("change", onChecked);

// const form = document.getElementById("item-form");

function onSubmit(e) {
  e.preventDefault();
  console.log("submit");
  const formValue = itemInput.value;
  const priorityValue = priorityInput.value;

  if (formValue === " " || priorityValue === "0") {
    alert("Please fill all fields");
    // return;
  }

  console.log(formValue, priorityValue);
}

function onSubmit2(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const entries = formData.entries();
  // console.log(formData.get("priority"));
  for (let entry of entries) {
    console.log(entry[1]);
  }
}

// form.addEventListener("submit", onSubmit2);

// event bubbling
const addBtn = document.querySelector("form button");
const div = document.querySelector("form div:last-child");
const form = document.querySelector("form");

// addBtn.addEventListener("click", () => {
//   alert("button was clicked");
// });

// div.addEventListener("click", () => {
//   alert("Div was clicked");
// });

// form.addEventListener("click", () => {
//   alert("form was clicked");
// });

// event delegation
const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// listItems.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     console.log(e.target);
//     e.target.remove();
//   });
// });

list.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
