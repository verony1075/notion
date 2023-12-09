	"use strict";


	document.addEventListener('DOMContentLoaded', function() {
			const content = document.getElementById("content");


			const savedText = localStorage.getItem("notepadText");
			if (savedText) {
					content.value = savedText;
			}
			updateWordCount();

		// this is the maximum is can saved on the note
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
// this part is for todo list
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
			window.close(); // Closes the current browser window/tab
	});

	document.querySelector('.maximize-button').addEventListener('click', function() {
			const notepad = document.querySelector('.notepad');
			notepad.classList.toggle('maximized');
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
    // Toggle the 'expanded' class for the button
    this.classList.toggle('expanded');

    // Toggle the table visibility
    if (scheduleTable.style.display === 'none') {
      scheduleTable.style.display = 'block';
    } else {
      scheduleTable.style.display = 'none';
    }
  });
});
/*for the textaera inside the each  box*/
function toggleTextarea(listItem) {
    // Generate a unique ID for each list item
    const listItemText = listItem.textContent.replace(/\s/g, '');
    const textareaId = `textarea-${listItemText}`;

    // Check if there is data saved in localStorage for this textarea
    const savedContent = localStorage.getItem(textareaId);

    // Check if a textarea with the same ID already exists
    const existingTextarea = document.getElementById(textareaId);

    if (existingTextarea) {
        // If the textarea already exists, remove it
        existingTextarea.parentNode.removeChild(existingTextarea);
    } else {
        // Create the textarea if it doesn't exist
        const textarea = document.createElement('textarea');
        textarea.id = textareaId;
        textarea.placeholder = 'Start typing...';

        // Add a bullet point character when creating the textarea
        textarea.value = '\u2022 '; // Unicode bullet point character

        if (savedContent) {
            // If there is saved content, load it into the textarea
            textarea.value += savedContent;
        }

        const textContainer = listItem.closest('.category');
        textContainer.appendChild(textarea);

        // Add an event listener to the textarea to handle changes
        textarea.addEventListener('input', function () {
            // Save the content to localStorage when it changes
            localStorage.setItem(textareaId, textarea.value);
        });

        // Add an event listener to the textarea to handle Enter key presses
        textarea.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent Enter key from creating a new line
                textarea.value += '\n\u2022 '; // Add a new line and bullet point
                localStorage.setItem(textareaId, textarea.value); // Save the updated content
            }
        });
    }
}

/*this is for the add more button on the planner*/
// Add an event listener to the "Add More" button
document.querySelector('.new-item-btn').addEventListener('click', function () {
    // Create a new div element
    var newItemDiv = document.createElement('div');
    newItemDiv.classList.add('planner-item');

    // Create a checkbox input
    var checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';

    // Create an input field for the label
    var labelInput = document.createElement('input');
    labelInput.type = 'text';
    labelInput.placeholder = ''; // You can set a placeholder text

    // Append the checkbox and label input to the div
    newItemDiv.appendChild(checkboxInput);
    newItemDiv.appendChild(labelInput);

    // Append the new item div to the planner section
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

// Initial update
updateTimeAndDate();
