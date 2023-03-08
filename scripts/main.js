

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
    const myName = prompt("Напиши своє ім'я");
    localStorage.setItem("name", myName);
    myHeading.textContent = ` ${myName}, ти чудо`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName}, ти чудо`;
}

myButton.onclick = () => {
    setUserName();
}