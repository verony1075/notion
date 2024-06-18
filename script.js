	"use strict";


	document.addEventListener('DOMContentLoaded', function() {
			const content = document.getElementById("content");


			const savedText = localStorage.getItem("notepadText");
			if (savedText) {
					content.value = savedText;
			}
			updateWordCount();
			setInterval(saveNotes, 5000);

			content.addEventListener("input", () => {
					localStorage.setItem("notepadText", content.value);
					updateWordCount();
			});

			function saveNotes() {
					localStorage.setItem("notepadText", content.value);
			}

			function updateWordCount() {
					const wordCount = content.value.split(/\s+/).filter(Boolean).length;
					document.querySelector(".word-count").textContent = `Word Count: ${wordCount}`;
			}
	});
    document.addEventListener('DOMContentLoaded', function() {
			const content = document.getElementById("content");

			content.addEventListener("input", () => {
					localStorage.setItem("notepadText", content.value);
					updateWordCount();
			});
	});
window.addEventListener("load", () => {
			const savedText = localStorage.getItem("notepadText");
			if (savedText) {
					content.value = savedText;
			}
			updateWordCount();
	});
// this is the function for the textarea in counting the number of words being type
	function updateWordCount() {
			const wordCount = content.value.split(/\s+/).filter(Boolean).length;
			document.querySelector(".word-count").textContent = `Word Count: ${wordCount}`;
	}
	document.getElementById('add-task-btn').addEventListener('click', addTask);
// this part
	function addTask() {
			const taskText = document.getElementById('new-task').value;
			if (!taskText) return;

			const taskItem = document.createElement('li');
			taskItem.textContent = taskText;

			const deleteBtn = document.createElement('button');
			deleteBtn.textContent = 'X';
			deleteBtn.addEventListener('click', () => taskItem.remove());

			taskItem.appendChild(deleteBtn);
			document.getElementById('todo-list').appendChild(taskItem);

			document.getElementById('new-task').value = '';
	}

	document.querySelector('.close-button').addEventListener('click', function() {
			window.close();
	});

	document.querySelector('.maximize-button').addEventListener('click', function() {
			const notion = document.querySelector('.notion');
			notion.classList.toggle('maximized');
	});

	document.querySelector('.minimize-button').addEventListener('click', function() {
			const contentArea = document.getElementById('content');
			contentArea.style.display = contentArea.style.display === 'none' ? 'block' : 'none';
	});


// for the dropbutton
document.addEventListener('DOMContentLoaded', function() {
  var dropdown = document.querySelector('.drop-btn');
  dropdown.addEventListener('click', function() {
    this.classList.toggle('expanded');
  });
});
/*for the table to show*/
document.addEventListener('DOMContentLoaded', function() {
  var dropdownButton = document.querySelector('.drop-btn');
  var scheduleTable = document.getElementById('schedule-table');

  // Initially hide the table
  scheduleTable.style.display = 'none';

  dropdownButton.addEventListener('click', function() {
    this.classList.toggle('expanded');
    if (scheduleTable.style.display === 'none') {
      scheduleTable.style.display = 'block';
    } else {
      scheduleTable.style.display = 'none';
    }
  });
});
/*for the textaera inside the each  box*/
function toggleTextarea(listItem) {

    const listItemText = listItem.textContent.replace(/\s/g, '');
    const textareaId = `textarea-${listItemText}`;
    const savedContent = localStorage.getItem(textareaId);

    const existingTextarea = document.getElementById(textareaId);

    if (existingTextarea) {

        existingTextarea.parentNode.removeChild(existingTextarea);
    } else {

        const textarea = document.createElement('textarea');
        textarea.id = textareaId;
        textarea.placeholder = 'Start typing...';
        textarea.value = '\u2022 '; // Unicode  the bullet point character

        if (savedContent) {
            textarea.value += savedContent;
        }

        const textContainer = listItem.closest('.category');
        textContainer.appendChild(textarea);
        textarea.addEventListener('input', function () {
            localStorage.setItem(textareaId, textarea.value);
        });


        textarea.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                textarea.value += '\n\u2022 ';
                localStorage.setItem(textareaId, textarea.value);
            }
        });
    }
}

/*this is for the add more button on the planner*/

document.querySelector('.new-item-btn').addEventListener('click', function () {

    var newItemDiv = document.createElement('div');
    newItemDiv.classList.add('planner-item');


    var checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';


    var labelInput = document.createElement('input');
    labelInput.type = 'text';
    labelInput.placeholder = '';

    newItemDiv.appendChild(checkboxInput);
    newItemDiv.appendChild(labelInput);

    document.querySelector('.planner').appendChild(newItemDiv);
});


/*this is for the widget*/
function updateTimeAndDate() {
    const currentTime = new Date();
    const timeString = currentTime.toLocaleTimeString();
    const dateString = currentTime.toLocaleDateString();
    const dateTimeString = `${dateString} ${timeString}`;
    document.getElementById("time-and-date").innerHTML = dateTimeString;
}

setInterval(updateTimeAndDate, 1000);
updateTimeAndDate();
