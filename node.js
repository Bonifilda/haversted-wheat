// Dark Mode Toggle
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkToggle.textContent = document.body.classList.contains("dark") ? "☀ Light" : "🌙 Dark";
});

// Harvest Declaration Form
const harvestForm = document.querySelector('form[action="haverst decration"]');
harvestForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const quantity = document.getElementById("quantity").value;
  const province = document.getElementById("province").value;

  if (!name || !quantity) {
    alert("Please enter your name and quantity.");
    return;
  }

  alert(`Harvest submitted:\nFarmer: ${name}\nQuantity: ${quantity}\nProvince: ${province}`);
  harvestForm.reset();
});

// Add type of wheat button
const addWheatButton = document.querySelector('button[type="add type of wheat"]');
addWheatButton.addEventListener("click", (e) => {
  e.preventDefault();
  const wheatType = prompt("Enter type of wheat:");
  if (wheatType) {
    const select = document.getElementById("province"); // Example: add to province? adjust as needed
    const option = document.createElement("option");
    option.textContent = wheatType;
    select.appendChild(option);
    alert(`${wheatType} added!`);
  }
});

// Customer Form
const customerForm = document.querySelector('form[action="choose types of wheate"]');
customerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const customerName = customerForm.querySelector('input[id="name"]').value;
  const wheatType = customerForm.querySelector('select[id="types-of-wheat"]').value;

  if (!customerName) {
    alert("Please enter customer name.");
    return;
  }

  alert(`Customer: ${customerName}\nSelected Wheat: ${wheatType}`);
});

// Delete customer selection button
const deleteButton = customerForm.querySelector('button[type="delete"]');
deleteButton.addEventListener("click", (e) => {
  e.preventDefault();
  customerForm.querySelector('input[id="name"]').value = "";
  customerForm.querySelector('select[id="types-of-wheat"]').selectedIndex = 0;
  alert("Customer selection deleted!");
});
