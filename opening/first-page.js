import * as methods from "/main/main"

function displayFirst(fromElement, choice, conversation) {
    methods.hideButtons(fromElement);
    methods.toggleHidden(choice);
    displayNarrator(conversation);
}

function elfChoice(fromElement, choice, conversation = "...") {
    methods.hideButtons(fromElement);
    if(sessionStorage.getItem("Race") === "Elf") {
       document.getElementById(choice).innerHTML = "<p>As an elf you do not have that problem and you read it aloud 'Relatives beware of heat, for the ancient greed has awakened in mountains again.'</p> <div class='d-flex justify-content-around'>"+
       "<button class='btn btn-secondary' id='moveOnButton' onclick=\"displayNext('elvenAdvert','startingPlace')\">Continue</button></div>"
        methods.displayConversation(conversation);
    }
    toggleHidden(choice);
}

function displayNarrator(conversation) {
    toggleHidden("narrator");
    displayConversation(conversation);
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

    methods.displayConversation("Nice to meet you " + sessionStorage.getItem("Name"));
    methods.toggleHidden("submit");
    methods.toggleHidden("advertScene");
}