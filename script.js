let yourAura = [];
let totalSpins = 0;
const aura = [
    "Amateur",
    "Novice",
    "Regular",
    "Uncommon",
    "Special",
    "Epic",
    "Legendary",
    "Mythical",
    "Divine",
    "INFINITY"
];

const newP = document.createElement("p");
const newP2 = document.createElement("p");
const totalSpinText = document.createElement("p");
const spinRarity = document.createElement("p");
const buttons = document.getElementById("button");

function submit() {
    newP2.remove();
    document.body.appendChild(newP);
    if (yourAura.length === 0) {
        newP.textContent = "Your auras are: None";
    } else {
        newP.textContent = `Your auras are: ${yourAura.join(", ")}`;
    }
}

function spin() {
    newP.remove();
    document.body.appendChild(newP2);
    document.body.appendChild(totalSpinText);
    document.body.appendChild(spinRarity);
    totalSpins += 1;

    let randomNum = Math.random() * 100.01;
    let auraGotten;

    switch (true) {
        case randomNum < 50:
            auraGotten = "Amateur (50%)";
            break;
        case randomNum < 80:
            auraGotten = "Novice (30%)";
            break;
        case randomNum < 95:
            auraGotten = "Regular (15%)";
            break;
        case randomNum < 96:
            auraGotten = "Uncommon (1%)";
            break;
        case randomNum < 98:
            auraGotten = "Special (2%)";
            break;
        case randomNum < 98.5:
            auraGotten = "Epic (0.5%)";
            break;
        case randomNum < 99.5:
            auraGotten = "Legendary (1%)";
            break;
        case randomNum < 99.999:
            auraGotten = "Mythical (0.4%)";
            break;
        default:
            auraGotten = "INFINITY (0.1%)"
            break;
    }

    if (yourAura.includes("INFINITY (0.1%)")) {
        document.body.style.backgroundColor = "black";
        buttons.style.border = "2px solid white";
        buttons.style.backgroundColor = "black";
        buttons.style.color = "#fff";
        newP2.style.color = "#fff";
        newP.style.color = "#fff";
        totalSpinText.style.color = "#fff";
    } else if (yourAura.includes("Mythical (0.4%)")) {
        document.body.style.backgroundColor = "blue";
    } else if (yourAura.includes("Legendary (1%)")) {
        document.body.style.backgroundColor = "brown";
    } else if (yourAura.includes("Epic (0.5%)")) {
        document.body.style.backgroundColor = "purple";
    }

    newP2.textContent = `You got ${auraGotten}`;

    yourAura = yourAura.filter(item => item !== auraGotten);
    yourAura.push(auraGotten);
    yourAura.sort((a, b) => aura.indexOf(a) - aura.indexOf(b));

    console.log(yourAura);
    totalSpinText.textContent = `Total Spins: ${totalSpins}`;
    spinRarity.textContent = `Rarity you got: ${randomNum.toFixed(2)}`;
}

