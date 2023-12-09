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
/*for the sticky note*/
