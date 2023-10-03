const container = document.getElementById("container");
const colors = ["#056CF2", "#05AFF2", "#F2E205", "#F28705", "#A62103"];
const squares = 500;

const getRandomColor = () => 
    colors[Math.floor(Math.random() * colors.length)];

    const setColor = (square) => {
        const color = getRandomColor();
        square.style.background = color;
        square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;

    };

    