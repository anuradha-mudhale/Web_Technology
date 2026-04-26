const tableBody = document.getElementById("historyTableBody");
const emptyMsg = document.getElementById("emptyMessage");

async function loadHistory() {
    const res = await fetch("http://localhost:3000/history");
    const history = await res.json();

    tableBody.innerHTML = "";

    if (history.length === 0) {
        emptyMsg.style.display = "block";
        return;
    } else {
        emptyMsg.style.display = "none";
    }

    history.forEach(item => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.student}</td>
            <td>${item.date}</td>
            <td style="color:${item.type === "Issued" ? "green" : "blue"};">
                ${item.type}
            </td>
            <td>
                <button onclick="deleteHistory('${item.id}','${item.student}','${item.date}','${item.type}')">
                    Delete
                </button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

async function deleteHistory(id, student, date, type) {

    if (!confirm("Delete?")) return;

    const res = await fetch("http://localhost:3000/history", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, student, date, type })
    });

    const data = await res.json();

    if (!res.ok) {
        alert(data.message);
        return;
    }

    alert("Deleted ✔");
    loadHistory();
}

loadHistory();