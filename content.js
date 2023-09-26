function addBtn() {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'autoSubmit'; // Assign an id to the checkbox if needed
    checkbox.name = 'Auto Submit: '; // Assign a name to the checkbox if needed
    checkbox.value = 'Auto Submit'; // Assign a value to the checkbox if needed
    checkbox.classList.add('mr-3');

    var label = document.createElement('label');
    label.htmlFor = 'autoSubmit'; // Set the "for" attribute of the label to match the checkbox's id
    label.textContent = 'Auto Submit: '; // Set the label text
    label.style = "color: white;";
    label.classList.add('mr-2');

    var credits = document.createElement('label');
    credits.textContent = "(by Ali Abbas Nagari)"
    credits.style = "color: white;";

    var divs = document.querySelectorAll('.m-portlet__head');
    for (var i = 0; i < divs.length; i++) {
        var bfbutton = document.createElement('button');
        bfbutton.type = 'button';
        bfbutton.textContent = 'Best Feedback';
        bfbutton.classList.add('btn');
        bfbutton.classList.add('btn-success');
        bfbutton.classList.add('m-2');
        bfbutton.addEventListener("click", () => AutoFeedback(2));


        var afbutton = document.createElement('button');
        afbutton.type = 'button';
        afbutton.textContent = 'Average Feedback';
        afbutton.classList.add('btn');
        afbutton.classList.add('btn-info');
        afbutton.classList.add('m-2');
        bfbutton.addEventListener("click", () => AutoFeedback(1));

        var wfbutton = document.createElement('button');
        wfbutton.type = 'button';
        wfbutton.textContent = 'Worst Feedback';
        wfbutton.classList.add('btn');
        wfbutton.classList.add('btn-danger');
        wfbutton.classList.add('m-2');
        bfbutton.addEventListener("click", () => AutoFeedback(0));

        divs[0].appendChild(bfbutton);
        divs[0].appendChild(afbutton);
        divs[0].appendChild(wfbutton);
    }

    divs[0].appendChild(label);
    divs[0].appendChild(checkbox);
    divs[0].appendChild(credits);
}


function AutoFeedback(level) {
    var autoSubmit = document.getElementById('autoSubmit');
    var radioButtons = document.querySelectorAll('.rdo');
    var textareas = document.querySelectorAll('textarea');

    var offset = (level == 0) ? 4 : 0;
    for (var i = 0; i < radioButtons.length; i += 5) {
        if (level == 1) offset = Math.floor(Math.random() * 3);
        radioButtons[i + offset].checked = true;
    }

    var fb_message = "Excellent!";
    if (level == 0) fb_message = "Not Good!";
    else if (level == 1) fb_message = "Fine!";
    for (var i = 0; i < textareas.length; i++) {
        textareas[i].value = fb_message;
    }

    if (autoSubmit.checked) document.getElementById('submit').click();
}
/*
function BestFeedback() {
    var autoSubmit = document.getElementById('autoSubmit');
    var radioButtons = document.querySelectorAll('.rdo'); // Get all radio buttons with class "rdo"
    for (var i = 0; i < radioButtons.length; i++) {
        if (i % 5 == 0) radioButtons[i].checked = true; // Check each radio button
    }
    var textareas = document.querySelectorAll('textarea');
    for (var i = 0; i < textareas.length; i++) {
        textareas[i].value = "Excellent!";
    }
    if (autoSubmit.checked) document.getElementById('submit').click();
}

function WorstFeedback() {
    var autoSubmit = document.getElementById('autoSubmit');
    // To check all radio buttons with the class "rdo"
    var radioButtons = document.querySelectorAll('.rdo'); // Get all radio buttons with class "rdo"
    for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = true; // Check each radio button
    }
    var textareas = document.querySelectorAll('textarea');
    for (var i = 0; i < textareas.length; i++) {
        textareas[i].value = "Not Good!";
    }
    if (autoSubmit.checked) document.getElementById('submit').click();
}


function AverageFeedback() {
    var autoSubmit = document.getElementById('autoSubmit');
    var offset = 0;
    var radioButtons = document.querySelectorAll('.rdo'); // Get all radio buttons with class "rdo"
    for (var i = 0; i < radioButtons.length; i += 5) {
        offset = Math.floor(Math.random() * 3);
        radioButtons[i + offset].checked = true;
    }

    var textareas = document.querySelectorAll('textarea');
    for (var i = 0; i < textareas.length; i++) {
        textareas[i].value = "Fine!";
    }
    if (autoSubmit.checked) document.getElementById('submit').click();
}
*/

setTimeout(addBtn, 2000);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "reloadContentScript") {
        addBtn();
    }
});