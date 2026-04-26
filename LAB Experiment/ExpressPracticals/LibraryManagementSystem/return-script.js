const returnForm = document.getElementById("returnForm");

if (returnForm) {
    returnForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const bookId = document.getElementById("returnBID").value.trim();
        const studentName = document.getElementById("returnSname").value.trim();
        const actualReturnDate = document.getElementById("actualReturnDate").value;

        if (!bookId || !studentName || !actualReturnDate) {
            alert("Fill all fields");
            return;
        }

        const res = await fetch(`http://localhost:3000/book/return/${bookId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                studentName,
                actualReturnDate
            })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message);
            return;
        }

        alert("Book Returned Successfully ✔");
        returnForm.reset();
    });
}