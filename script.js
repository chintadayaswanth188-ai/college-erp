document.getElementById("loginBtn").addEventListener("click", function () {

    let hallticket = document.querySelector("input[type='text']").value.trim();
    let password = document.querySelector("input[type='password']").value.trim();

    const students = [
        { hallticket: "25ME1A04E9", password: "1234" },
        { hallticket: "25ME1A04F3", password: "1234" },
        { hallticket: "25ME1A04E3", password: "1234" },
        { hallticket: "25ME1A04I4", password: "1234" }
    ];

    let validUser = students.find(student =>
        student.hallticket === hallticket &&
        student.password === password
    );

    if (validUser) {
        alert("Login Successful");
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Hall Ticket Number or Password");
    }

});