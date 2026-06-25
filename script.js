function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username.trim() !== "" && password.trim() !== "") {
        window.location.href = "profile.html";
    } else {
        alert("Please enter username and password");
    }

}