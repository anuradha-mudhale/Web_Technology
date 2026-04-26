const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", function () {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    // simple static login
    if (username === "admin" && password === "1234") {
      localStorage.setItem("isLoggedIn", "true");

      alert("Login Successful");

      window.location.href = "index.html";
    } else {
      alert("Invalid username or password");
    }
  });
}