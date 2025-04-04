const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
	if (inputBox.value === "") {
		alert("Oops! Your to-do list needs a task, not just empty thoughts! 😆");
	} else {
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = `<img src ="/Images/trash.png">`;
		li.appendChild(span);
	}
	inputBox.value = "";
	saveData();
}

listContainer.addEventListener(
	"click",
	function (e) {
		if (e.target.tagName === "LI") {
			e.target.classList.toggle("checked");
      let allTasks = document.querySelectorAll("#list-container li");
      let tasksArray = Array.from(allTasks);
      tasksArray.sort((a,b) => {
        return a.classList.contains("checked") - b.classList.contains("checked")
      });
      listContainer.innerHTML = "";
      tasksArray.forEach(task => listContainer.appendChild(task));
			saveData();
		} else if (e.target.tagName === "IMG") {
			e.target.parentElement.parentElement.remove();
			saveData();
		}
		/*
    e.target is the <img>
    e.target.parentElement is the <span>
    e.target.parentElement.parentElement is the <li> → that's what you want to remove  
    */
	},
	false
);

function saveData() {
	localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
