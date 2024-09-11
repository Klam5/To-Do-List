document.getElementById("myinput").addEventListener("keypress", function(event) {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
        var inputValue = event.target.value;
        var listItem = document.createElement("li");
        listItem.textContent = inputValue;
        listItem.className = "todo-item";

        listItem.addEventListener("click", function() {
            this.classList.toggle("strike"); // Toggles the 'strike' class
        });

        document.getElementById("todo-list").appendChild(listItem);
        event.target.value = ""; // clear input field after adding item
    }
});



// event listener for clearing entire list
document.querySelector(".clearBtn").addEventListener("click", function() {
    var todoList = document.getElementById("todo-list");
    todoList.innerHTML = ""; // clears all items
});