document.addEventListener("DOMContentLoaded", function () {

  // 🔒 LOGIN CHECK
  if (!localStorage.getItem("isLoggedIn")) {
    window.location.href = "login.html";
  }

  // ✅ ADD BOOK
  const form = document.getElementById("bookForm");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const book = {
        id: document.getElementById("BID").value.trim(),
        name: document.getElementById("bname").value.trim(),
        author: document.getElementById("aname").value.trim(),
        category: document.getElementById("category").value.trim(),
        quantity: parseInt(document.getElementById("quan").value.trim())
      };

      fetch("http://localhost:3000/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        alert("Book Added Successfully ✅");
        form.reset();
      })
      .catch(err => console.log("Error:", err));
    });
  }

  // ✅ VIEW BOOKS (FROM BACKEND 🔥)
  const tablebody = document.getElementById("bookTableBody");

  if (tablebody) {
    fetch("http://localhost:3000/book") 
      .then(res => res.json())
      .then(books => {
        tablebody.innerHTML = "";

        books.forEach(book => {
          const row = document.createElement("tr");

          row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.category}</td>
            <td>${book.quantity}</td>
          `;

          tablebody.appendChild(row);
        });
      })
      .catch(err => console.log(err));
  }

  // 🔴 LOGOUT
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function (event) {
      event.preventDefault();
      localStorage.removeItem("isLoggedIn");
      window.location.href = "login.html";
    });
  }

});