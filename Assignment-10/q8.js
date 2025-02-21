const stateData = {
    USA: ["California", "Texas", "New York"],
    India: ["Maharashtra", "Delhi", "Karnataka"],
    UK: ["England", "Scotland", "Wales"]
};

document.getElementById("country").addEventListener("change", function() {
    let country = this.value;
    let stateDropdown = document.getElementById("state");

    stateDropdown.innerHTML = '<option value="">Select a state</option>'; // Reset states

    if (country && stateData[country]) {
        stateData[country].forEach(state => {
            let option = document.createElement("option");
            option.value = state;
            option.textContent = state;
            stateDropdown.appendChild(option);
        });
    }
});
