document.addEventListener("DOMContentLoaded", function () {
    const clothesDiv = document.querySelector("#clothes-div");
    const closeButton = document.querySelector("#close-button");
  
    // Function to fetch a random clothing item
    function fetchRandomClothingItem() {
      fetch("http://localhost:3000/clothes")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((clothesData) => {
          console.log("Clothes data:", clothesData);
          // Randomly select an item from the fetched data
          const randomIndex = Math.floor(Math.random() * clothesData.length);
          const clothingItem = clothesData[randomIndex];
          displayClothingItem(clothingItem);
        })
        .catch((error) => {
          console.error("Error fetching clothes data:", error);
        });
    }
  
    // Function to display a clothing item
    function displayClothingItem(clothingItem) {
      // Clear previous content
      clothesDiv.innerHTML = "";
  
      // Create elements for the clothing item
      const image = document.createElement("img");
      image.src = clothingItem.image_url;
  
      const titleHeading = document.createElement("h3");
      titleHeading.textContent = clothingItem.name;
  
      const sku = document.createElement("h4");
      sku.textContent = `SKU: ${clothingItem.sku}`;
  
      const size = document.createElement("p");
      size.textContent = `Size: ${clothingItem.size}`;
  
      // Append elements to the clothesDiv
      clothesDiv.appendChild(image);
      clothesDiv.appendChild(titleHeading);
      clothesDiv.appendChild(sku);
      clothesDiv.appendChild(size);
    }
  
    // Event listener for the close button
    closeButton.addEventListener("click", fetchRandomClothingItem);
  
    // Initial fetch for a random clothing item
    fetchRandomClothingItem();
  });
  