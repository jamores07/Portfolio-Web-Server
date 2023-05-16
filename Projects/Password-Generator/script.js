const Slider = document.querySelector(".pass-length input");
const options = document.querySelectorAll(".option input");
const copyIcon = document.querySelector(".input-box span");
const pwInput = document.querySelector(".input-box input");
const pwIndicator = document.querySelector(".pass-indicator");
const generateBtn = document.querySelector(".generate-btn");

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!$%&|[](){}:;.,*+-#@<>~"
}

const generatePassword = () => {
    let staticPassword = "",
        randomPassword = "",
        excludeDuplicate = false,
        passLength = Slider.value;

    options.forEach(option => {
        if (option.checked) {
            if (option.id !== "exc-duplicate" && option.id !== "spaces") {
                staticPassword += characters[option.id];
            } else if (option.id === "spaces") {
                staticPassword += `  ${staticPassword}  `;
            } else {
                excludeDuplicate = true;
            }
        }
    });

    for (let i = 0; i < passLength; i++) {
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        if (excludeDuplicate) {
            !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
        } else {
            randomPassword += randomChar;
        }
    }
    pwInput.value = randomPassword;

}

const updatePassIndicator = () => {
    pwIndicator.id = 
    Slider.value <= 8 ? "weak" : 
    Slider.value <= 16 ? "medium" : "strong";
}

const updateSlider = () => {
    document.querySelector(".pass-length span").innerText = Slider.value;
    generatePassword();
    updatePassIndicator();
}
updateSlider();

const copyPassword = () => {
    navigator.clipboard.writeText(pwInput.value);
    copyIcon.innerText = "check";
    copyIcon.style.color = "#4285f4";
    setTimeout(() => {
        copyIcon.innerText = "copy_all";
        copyIcon.style.color = "#707070";
    }, 1500);
}

copyIcon.addEventListener("click", copyPassword);
Slider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);