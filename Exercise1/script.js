function ChangeName() {
    let name = prompt("Please enter your name:", "");
    let text = `Hello ${name}`;
    document.getElementById("inputName").innerHTML = text;
}