form = document.getElementById('form');
registerBtn = document.getElementById('register-btn');

function validUsername(username) {
    // console.log(username.length);
    if (username.length >= 6) return true;
    return false;
}

function validEmail(email) {
    if (email.endsWith('@gmail.com')) return true;
    return false;
}

function validPassword(password) {
    let hasNumber = false;
    let hasLetter = false;

    for (let i = 0; i < password.length && !(hasLetter && hasNumber); i++) {
        console.log(i + " " + password.charAt(i));
        if (password.charAt(i) >= '0' && password.charAt(i) <= '9') hasNumber = true;
        if ((password.charAt(i) >= 'A' && password.charAt(i) <= 'Z') || (password.charAt(i) >= 'a' && password.charAt(i) <= 'z')) hasLetter = true;
    }

    if (hasNumber && hasLetter) return true;

    return false;
}

function passwordConfirmed(password, confirm) {
    console.log(password + " " + confirm);
    if (password === confirm) return true;

    return false;
}

function checkedGender() {
    const maleRadio = document.getElementById('male');
    const femaleRadio = document.getElementById('female');
    const rainbowRadio = document.getElementById('rainbow');

    if (maleRadio.checked || femaleRadio.checked || rainbowRadio.checked) return true;
    return false;
}

function checkedAgree() {
    const agree = document.getElementById('check');

    if (agree.checked) return true;
    
    return false;
}

function validFullName(fullName) {
    if (fullName.includes(' ')) return true;
    return false;
}

registerBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const fullName = document.getElementById('full-name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value

    if (!validFullName(fullName)) {
        alert("Only people with 2 words in their name can register");
        return;
    }

    if (!validUsername(username)) {
        alert("'Username' must be at least 6 characters");
        return;
    }

    if (!validEmail(email)) {
        alert("'Email' must ends with '@gmail.com'");
        return;
    }

    if (!validPassword(password)) {
        alert("Password must contain at least 1 letter and 1 number");
        return;
    }

    if (!passwordConfirmed(password, document.getElementById('confirm-password').value)) {
        alert("Password doesn't match");
        return;
    }
    
    alert('Success!');
    // document.getElementById("text").innerText = "AKSJDHFJASHFDA";
});