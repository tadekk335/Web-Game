function help(fromElement, choice, conversation = "...") {
    hideButtons(fromElement);
    if(sessionStorage.getItem("Help")==="false") {
       document.getElementById(choice).innerHTML = "<p>Unfortunately the wizard used up all his energy in the swamps, without the wizard's help you are not able to fight the bandits alone..'</p> <div class='d-flex justify-content-around'>"+
       "<a href='../intro/end.html'><button class='btn btn-secondary' id='endOfCity'>End </button></a></div>"
        displayConversation(conversation);
    }
    toggleHidden(choice);
}

function toggleHidden(element) {
    const div = document.getElementById(element);
    div.classList.toggle("hidden");
}


function hideButtons(fromElement) {
    const parent = document.getElementById(fromElement);
    const matches = parent.querySelectorAll("button");
    matches.forEach(element => {
        element.classList.add("hidden");
    });
}

function displayConversation(text) {
    const bubble = document.getElementById("speech");
    bubble.innerHTML = text;
}

function changeBackground() {
    const background = document.querySelector(".bg");
    background.classList.remove("bg");
    background.classList.add("bgCastle");
}


