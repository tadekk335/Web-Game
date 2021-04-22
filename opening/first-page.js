function displayFirst(fromElement, choice, conversation) {
    hideButtons(fromElement);
    toggleHidden(choice);
    displayNarrator(conversation);
}

function displayNext(fromElement, choice, conversation = "...") {
    hideButtons(fromElement);
    toggleHidden(choice);
    displayConversation(conversation);
}

function elfChoice(fromElement, choice, conversation = "...") {
    hideButtons(fromElement);
    if(sessionStorage.getItem("Race") === "Elf") {
       document.getElementById(choice).innerHTML = "<p>As an elf you do not have that problem and you read it aloud 'Relatives beware of heat, for the ancient greed has awakened in mountains again.'</p> <div class='d-flex justify-content-around'>"+
       "<button class='btn btn-secondary' id='moveOnButton' onclick=\"displayNext('elvenAdvert','startingPlace')\">Continue</button></div>"
        displayConversation(conversation);
    }
    toggleHidden(choice);
}

function toggleHidden(element) {
    const div = document.getElementById(element);
    div.classList.toggle("hidden");
}

function displayNarrator(conversation) {
    toggleHidden("narrator");
    displayConversation(conversation);
}

function displayConversation(text) {
    const bubble = document.getElementById("speech");
    bubble.innerHTML = text;
}

function hideButtons(fromElement) {
    const parent = document.getElementById(fromElement);
    const matches = parent.querySelectorAll("button");
    matches.forEach(element => {
        element.classList.add("hidden");
    });
}

function submitAnswers() {

    const form = document.getElementById("introductionForm");

    if (!form.querySelector("input[name=race]:checked") || !form.querySelector("input[name=class]:checked")) {
        var msg = "<span class='error'>You must select a race and a class!</span>";
        document.getElementById("error").innerHTML = msg;
        return;
    }
    document.getElementById("error").innerHTML = "";
    const name = form[0].value || "Adventurer";
    const selectedRace = form.querySelector("input[name=race]:checked").value;
    const selectedClass = form.querySelector("input[name=class]:checked").value;
    sessionStorage.setItem("Name", name);
    sessionStorage.setItem("Race", selectedRace);
    sessionStorage.setItem("Class", selectedClass);

    displayConversation("Nice to meet you " + sessionStorage.getItem("Name"));
    toggleHidden("submit");
    toggleHidden("advertScene");
}