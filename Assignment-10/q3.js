document.getElementById("pizzaForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let size = document.querySelector('input[name="size"]:checked');
    let selectedSize = size ? size.value : "No size selected";

    let toppings = document.querySelectorAll('input[name="topping"]:checked');
    let selectedToppings = Array.from(toppings).map(topping => topping.value);

    let summary = `You ordered a <strong>${selectedSize}</strong> pizza with:<br>`;
    summary += selectedToppings.length > 0 ? selectedToppings.join(", ") : "No toppings selected.";

    document.getElementById("orderSummary").innerHTML = summary;
});
