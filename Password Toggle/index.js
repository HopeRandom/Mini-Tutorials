const eyeIcon = document.getElementById("eyeIcon");
const password = document.getElementById("password");

eyeIcon.addEventListener('click', () => {
    
    if (password.type == "password") {
        password.type = "text";
        eyeIcon.src = "Visibility_on.png";
    } else {
        password.type = "password";
        eyeIcon.src = "Visibility_off.png";
    }

});