export function displayNext(fromElement, choice, conversation = "...") {
    hideButtons(fromElement);
    toggleHidden(choice);
    displayConversation(conversation);
}
export function hideButtons(fromElement) {
    const parent = document.getElementById(fromElement);
    const matches = parent.querySelectorAll("button");
    matches.forEach(element => {
        element.classList.add("hidden");
    });
}

export function toggleHidden(element) {
    const div = document.getElementById(element);
    div.classList.toggle("hidden");
}

export function displayConversation(text) {
    const bubble = document.getElementById("speech");
    bubble.innerHTML = text;
}
