const inputbox = document.getElementById("input-box");
const listbox = document.getElementById("list-box");

function Addtask() {
    if (inputbox.value == '') {
        alert("You Must Write Something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listbox.appendChild(li);

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        li.appendChild(checkbox);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        let isChecked = false;

        checkbox.onclick = function() {
            isChecked = checkbox.checked;
        };

        span.onclick = function() {
            if (isChecked) {
                li.remove();
                savedata();
            }
        };

        savedata();
    }
    inputbox.value = '';
}

function savedata() {
    localStorage.setItem("data", listbox.innerHTML);
}

function showTask() {
    listbox.innerHTML = localStorage.getItem("data");
    listbox.addEventListener('click', (event) => {
        const target = event.target;
        const li = target.closest('li');
        if (target.tagName === 'INPUT') { // Checkbox clicked
            li.classList.toggle('completed');
            savedata();
        } else if (target.tagName === 'SPAN') { // Delete button clicked
            li.remove();
            savedata();
        }
    });
}

showTask();
