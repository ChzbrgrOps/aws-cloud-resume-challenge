// javascript code

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://db5cvrxxm2lfvgdmmigyvp3nla0lbfkc.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();