function displayNext(fromElement, choice, conversation = "...") {
    hideButtons(fromElement);
    toggleHidden(choice);
    displayConversation(conversation);
}
function hideButtons(fromElement) {
    const parent = document.getElementById(fromElement);
    const matches = parent.querySelectorAll("button");
    matches.forEach(element => {
        element.classList.add("hidden");
    });
}

function toggleHidden(element) {
    const div = document.getElementById(element);
    div.classList.toggle("hidden");
}

function displayConversation(text) {
    const bubble = document.getElementById("speech");
    bubble.innerHTML = text;
}

function displayFirst(fromElement, choice, conversation) {
    hideButtons(fromElement);
    toggleHidden(choice);
    displayNarrator(conversation);
}