const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four",
];

const getRandomMessage = () => 
messages[Math.floor(Math.random() * messages.length)];