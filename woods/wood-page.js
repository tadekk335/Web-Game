function elfChoice(fromElement, choice, conversation = "...") {
    hideButtons(fromElement);
    if (sessionStorage.getItem("Race") === "Elf") {
        document.getElementById(choice).innerHTML = "<p>As an Elf you come over to talk with them - after a short courtesy exchange, you and the elves will exchange information about the road ahead. You learn that this forest is haunted by frost dragons that target all living creatures in the evenings. This knowledge will certainly be useful to you. You thank the elves and return to the camp.'</p> <div class='d-flex justify-content-around'>" +
            "<button class='btn btn-secondary' id='elvenGroupbButton' onclick=\"displayNext('elvenGroup','startingForest')\">Continue</button></div>"
        displayConversation(conversation);
    }
    toggleHidden(choice);
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

function displayNext(fromElement, choice, conversation = "...") {
    hideButtons(fromElement);
    toggleHidden(choice);
    displayConversation(conversation);
}


function classChoice(fromElement, choice, conversation = "...") {
    hideButtons(fromElement);
    if (sessionStorage.getItem("Class") === "Mage") {
        document.getElementById(choice).innerHTML = "<p>You cooperate with the wizard, but you are not able to deal with it as two wizards, you run away into the depths of the forest trying to lose the beasts." +
            "<a href='../swamps/swamps.html'><button class='btn btn-secondary' id='endOfCity'>Run </button></a></div>"
        displayConversation(conversation);
    }
    toggleHidden(choice);
}

function changeBackground() {
    const background = document.querySelector(".bg");
    background.classList.remove("bg");
    background.classList.add("bgForest");
}
