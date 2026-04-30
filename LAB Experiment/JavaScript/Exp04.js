function SubmitButtonClick(event){

    event.preventDefault(); // prevent page reload

    console.log("SubmitButtonClick called");

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    document.getElementById('nameError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('passwordError').innerHTML = "";
    document.getElementById('successMsg').innerHTML = "";

    let isValid = true;

    if(name.trim() === ""){
        document.getElementById('nameError').innerHTML = "Name field is required";
        isValid = false;
    }

    if(email.trim() === "" || !email.includes("@")){
        document.getElementById('emailError').innerHTML = "Enter valid email";
        isValid = false;
    }

    if(password.trim() === "" || password.length < 6){
        document.getElementById('passwordError').innerHTML = "Password must be at least 6 characters";
        isValid = false;
    }

    if(isValid){
        alert("form submitted successfully")
        document.getElementById('successMsg').style.color = "green";

        // DOM Manipulation Example
        document.body.style.backgroundColor = "#e6ffe6";

        // Clear fields
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
    }

    return false; // stop default submission
}