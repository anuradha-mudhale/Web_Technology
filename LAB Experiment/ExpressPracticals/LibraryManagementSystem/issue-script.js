const issueForm = document.getElementById("issueForm");

if (issueForm) {
    issueForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const ibookId = document.getElementById("issueBID").value.trim();
        const studentName = document.getElementById("issueSname").value.trim();
        const issueDate = document.getElementById("issueDate").value;
        const returnDate = document.getElementById("returnDate").value;

        if (!ibookId || !studentName || !issueDate || !returnDate) {
            alert("Fill all fields");
            return;
        }

        const res = await fetch(`http://localhost:3000/book/issue/${ibookId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                issuedTo: studentName,
                issueDate,
                returnDate
            })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message);
            return;
        }

        alert("Book Issued Successfully ✔");
        issueForm.reset();
    });
}