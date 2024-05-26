function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username == "" || password == "") {
        alert("Please fill all fields...!!!!!!");
        return false;
    }

    else if (username === "admin" && password === "admin") {
        alert("Login successful");
        window.location = "video.html";
    }
    else {
        alert("Login failed");
    }
}

function sendEmail() {
    console.log("sendEmail");
    Email.send({
        Host: "smtp.gmail.com",
        Username: "",
        Password: "",
        To: '',
        From: "",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
    })
        .then(function (message) {
            alert("mail sent successfully")
        });
}