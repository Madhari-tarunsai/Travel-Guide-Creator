const API_URL = "https://67f0dd25c733555e24ab6ba1.mockapi.io/places";

async function fetchPlaces() {
  try {
    document.body.style.backgroundColor = "#7FFFD4"; 

    const response = await fetch(API_URL);
    const data = await response.json();
    const container = document.getElementById("places-container");

    data.forEach(place => {
      const card = document.createElement("div");
      card.style.backgroundColor = "#20B2AA"; 
      card.style.borderRadius = "8px";
      card.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
      card.style.overflow = "hidden";
      card.style.width = "300px";
      card.style.padding = "15px";
      card.style.boxSizing = "border-box";
      card.style.display = "flex";
      card.style.flexDirection = "column";
      card.style.alignItems = "center";
      card.style.margin = "10px"; 
      card.style.transition = "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"; // Add transition for box-shadow

      // Hover effect for zoom and box-shadow
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)'; // Zoom in on hover
        card.style.boxShadow = "0px 3px 2px 3px black"; // Add stronger box shadow on hover
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)'; // Zoom out when hover ends
        card.style.boxShadow = "2px 4px 2px 1px black"; // Return to original box shadow
      });

      const image = document.createElement("img");
      image.src = place.image;
      image.alt = place.name;
      image.style.width = "100%";
      image.style.height = "200px";
      image.style.objectFit = "cover";
      image.style.borderRadius = "6px";
      image.style.transition = "transform 0.3s ease-in-out"; // Adding smooth transition to image

      // Hover effect for image zoom
      image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.1)'; // Zoom image in on hover
      });
      image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)'; // Zoom image out when hover ends
      });

      const title = document.createElement("h1");
      title.textContent = place.title || place.name;  // Assuming title is a new field in the API
      title.style.margin = "10px 0 5px 0";
      title.style.fontSize = "18px";
      title.style.textAlign = "center";

      const desc = document.createElement("p");
      desc.textContent = place.description;
      desc.style.textAlign = "center";
      desc.style.fontSize = "14px";
      desc.style.color = "#333";

      const rating = document.createElement("p");
      rating.textContent = `Rating: ${place.rating || "4.5"} ⭐`;
      rating.style.margin = "5px 0";
      rating.style.fontWeight = "bold";
      rating.style.color = "#444";

      const cost = document.createElement("p");
      cost.textContent = `Cost: ₹${place.cost || "1000"}`;
      cost.style.margin = "0";
      cost.style.color = "#555";

      // Buttons container
      const buttonContainer = document.createElement("div");
      buttonContainer.style.display = "flex";
      buttonContainer.style.gap = "10px";
      buttonContainer.style.marginTop = "10px";

      // Book Now button
      const bookNowBtn = document.createElement("button");
      bookNowBtn.textContent = "Book Now";
      bookNowBtn.style.padding = "10px 15px";
      bookNowBtn.style.border = "none";
      bookNowBtn.style.backgroundColor = "#007bff";
      bookNowBtn.style.color = "white";
      bookNowBtn.style.borderRadius = "4px";
      bookNowBtn.style.cursor = "pointer";
      bookNowBtn.onclick = () => {
        window.location.href = "booking.html";
      };

      buttonContainer.appendChild(bookNowBtn);

      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(desc);
      card.appendChild(rating);
      card.appendChild(cost);
      card.appendChild(buttonContainer);

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching places:", error);
  }
}

fetchPlaces();
