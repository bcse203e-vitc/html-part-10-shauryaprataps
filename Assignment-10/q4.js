document.getElementById("tableForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let num = parseInt(document.getElementById("numberInput").value, 10);
  
    if (isNaN(num)) {
        alert("Please enter a valid number!");
        return;
    }

    let tableHTML = `<table>
                        <tr>
                            <th>Multiplier</th>
                            <th>Result</th>
                        </tr>`;

    for (let i = 1; i <= 10; i++) {
        tableHTML += `<tr>
                        <td>${num} × ${i}</td>
                        <td>${num * i}</td>
                      </tr>`;
    }

    tableHTML += `</table>`;

    document.getElementById("tableContainer").innerHTML = tableHTML;
});
