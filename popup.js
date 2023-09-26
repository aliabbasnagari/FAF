document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('bfButton').addEventListener('click', function () {
        var autos = document.getElementById('autoSubmit').checked;
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const activeTab = tabs[0];
            chrome.scripting.executeScript({
                target: { tabId: activeTab.id, allFrames: true },
                function: BestFeedback,
                args: [autos]
            });
        });
    });

    document.getElementById('wfButton').addEventListener('click', function () {
        var autos = document.getElementById('autoSubmit').checked;
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const activeTab = tabs[0];
            chrome.scripting.executeScript({
                target: { tabId: activeTab.id, allFrames: true },
                function: WorstFeedback,
                args: [autos]
            });
        });
    });

    document.getElementById('afButton').addEventListener('click', function () {
        var autos = document.getElementById('autoSubmit').checked;
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const activeTab = tabs[0];
            chrome.scripting.executeScript({
                target: { tabId: activeTab.id, allFrames: true },
                function: AverageFeedback,
                args: [autos]
            });
        });
    });
});

function BestFeedback(asubmit) {
    // To check all radio buttons with the class "rdo"
    var radioButtons = document.querySelectorAll('.rdo'); // Get all radio buttons with class "rdo"
    for (var i = 0; i < radioButtons.length; i++) {
        if (i % 5 == 0) radioButtons[i].checked = true; // Check each radio button
    }
    var textareas = document.querySelectorAll('textarea');
    for (var i = 0; i < textareas.length; i++) {
        textareas[i].value = "Excellent!";
    }
    if (asubmit) document.getElementById('submit').click();
    console.log(asubmit)
}

function WorstFeedback(asubmit) {
    // To check all radio buttons with the class "rdo"
    var radioButtons = document.querySelectorAll('.rdo'); // Get all radio buttons with class "rdo"
    for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = true; // Check each radio button
    }
    var textareas = document.querySelectorAll('textarea');
    for (var i = 0; i < textareas.length; i++) {
        textareas[i].value = "Not Good!";
    }
    if (asubmit) document.getElementById('submit').click();
}


function AverageFeedback(asubmit) {
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
    if (asubmit) document.getElementById('submit').click();
}
