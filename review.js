// Function to handle review submission
document.getElementById("submit-review").addEventListener("click", function () {
  const name = document.getElementById("customer-name").value;
  const text = document.getElementById("feedback-text").value;
  const rating = parseInt(document.getElementById("feedback-rating").value);
  const imageUrl = document.getElementById("image-url").value;

  if (name && text) {
    const newReview = { name, text, rating, imageUrl };
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push(newReview);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    displayReviews();
    document.getElementById("customer-name").value = "";
    document.getElementById("feedback-text").value = "";
    document.getElementById("image-url").value = "";
  } else {
    alert("Please enter both your name and feedback!");
  }
});

function displayReviews() {
  const feedbackContainer = document.getElementById("feedback-container");
  feedbackContainer.innerHTML = ""; 

  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.forEach((review, index) => {
    const feedbackItem = document.createElement("div");
    feedbackItem.classList.add("feedback-item");

    feedbackItem.innerHTML = `
            <div class="feedback-info">
                <p class="customer-name">${review.name}</p>
                <p class="feedback-text">${review.text}</p>
            </div>
            <div class="feedback-rating">
                ${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}
            </div>
            ${
              review.imageUrl
                ? `<div class="feedback-image">
                <img src="${review.imageUrl}" alt="Feedback Image" class="zoom-image"/>
            </div>`
                : ""
            }
            <button class="remove-button" onclick="removeReview(${index})">Remove</button>
        `;

    feedbackContainer.appendChild(feedbackItem);
  });
}

function removeReview(index) {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.splice(index, 1);
  localStorage.setItem("reviews", JSON.stringify(reviews));

  displayReviews();
}

window.onload = displayReviews;
