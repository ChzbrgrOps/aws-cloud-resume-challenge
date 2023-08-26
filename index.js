// javascript code

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://3mqwq7yxh2crc6lxipp3nd2egm0rqhei.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();