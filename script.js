let isBlue = true;

function showAlert(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Hello ${name}!`);
}

function changeColor() {
    document.body.style.backgroundColor = isBlue ? '#90EE90' : '#87CEEB';
    isBlue = !isBlue;
}

function validateText(event) {
    event.preventDefault();
    const text = document.getElementById('textInput').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if(validation.test(text)) {
        alert("Special characters detected!!")
    } else {
        alert("No special characters found.")
    }
}

function addText() {
    const heading = document.getElementById('pageHeading');
    heading.textContent += 'Add Text';
}