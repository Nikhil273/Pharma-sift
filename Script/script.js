
  // Sample medicine data (you can fetch this data from a database or API)
  const medicines = [
      { name: "Paracetamol", price: 10, quantity: 100 },
      { name: "Paracetamol 100mg", price: 20, quantity: 150 },
      { name: "Medicine C", price: 15, quantity: 120 }
      // Add more medicine data as needed
  ];
  const compareMedicines = [
    { name: "Paracetamol", price: 10, quantity: 100 },
    { name: "Paracetamol 100 mg", price: 20, quantity: 150 },
    { name: "Medicine C", price: 15, quantity: 120 }
    // Add more medicine data as needed
];

  function suggestMedicine() {
      const searchInput = document.getElementById("searchInput").value.toLowerCase();
      const suggestionsDiv = document.getElementById("suggestions");
      suggestionsDiv.innerHTML = ""; // Clear previous suggestions
      
      if (searchInput.length === 0) {
          return; // Exit the function if input is empty
      }
      
      // Filter medicines based on search input
      const filteredMedicines = medicines.filter(medicine => medicine.name.toLowerCase().includes(searchInput));//gpt

      if (filteredMedicines.length === 0) {
          suggestionsDiv.innerHTML = "";
      } else {
          // Display medicine suggestions
          filteredMedicines.forEach(medicine => {
              const suggestion = document.createElement("div");
              suggestion.textContent = medicine.name;
              suggestion.addEventListener("click", function() {
                  document.getElementById("searchInput").value = medicine.name;
                  suggestionsDiv.innerHTML = ""; // Clear suggestions after selection
              });
              suggestionsDiv.appendChild(suggestion);
          });
      }
  }
  function searchMedicine() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase().trim();
    const medicineInfoDiv = document.getElementById("medicineInfo");
    const suggestionsDiv = document.getElementById("suggestions"); // Add this line

    medicineInfoDiv.innerHTML = ""; // Clear previous search results
    suggestionsDiv.innerHTML = ""; // Clear suggestions

    // Check if the search input is empty
    if (searchInput === "") {
        return; // Exit the function if input is empty
    }

    // Filter medicines based on search input
    const filteredMedicines = medicines.filter(medicine => medicine.name.toLowerCase().includes(searchInput));

    if (filteredMedicines.length === 0) {
        medicineInfoDiv.innerHTML = "No medicine found";
    } else {
        // Display medicine information
        filteredMedicines.forEach(medicine => {
            const medicineInfo = document.createElement("div");
            medicineInfo.innerHTML = `
                <h2>${medicine.name}</h2>
                <p>Price: ${medicine.price}</p>
                <p>Quantity: ${medicine.quantity}</p>
            `;
            medicineInfoDiv.appendChild(medicineInfo);
        });
    }
}


