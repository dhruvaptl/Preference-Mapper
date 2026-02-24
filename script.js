const data = {
  items: [
    {
      id: 1,
      baseItem: {
        name: "Bohemian White Maxi Dress",
        category: "dress",
        image: "images/white-maxi.jpg"
      },
      variations: [
        {
          vibe: "Elegant Princess",
          description: "Gold stacked jewellery gives a royal and polished feminine vibe.",
          tags: ["romantic", "brunch"],
          accessoryImage: "images/gold chain.webp"
        },
        {
          vibe: "Chill Evening",
          description: "Minimal silver jewellery gives relaxed evening energy.",
          tags: ["minimal", "evening"],
          accessoryImage: "images/silver chain.jpg"
        },
        {
          vibe: "Playful Charm",
          description: "Pearls create a soft playful youthful vibe.",
          tags: ["playful", "casual"],
          accessoryImage: "images/pearl chain.webp"
        }
      ]
    }
  ]
};

const container = document.getElementById("items-container");

data.items.forEach(item => {
  const baseCard = document.createElement("div");
  baseCard.classList.add("base-card");

  baseCard.innerHTML = `
    <h2>${item.baseItem.name}</h2>
    <p class="category">Category: ${item.baseItem.category}</p>
    <img src="${item.baseItem.image}" class="base-image">
  `;

  const variationContainer = document.createElement("div");
  variationContainer.classList.add("variation-container");

  item.variations.forEach(variation => {
    const variationCard = document.createElement("div");
    variationCard.classList.add("variation-card");

    variationCard.innerHTML = `
      <div class="variation-content">
        <img src="${variation.accessoryImage}" class="accessory-image">
        <div>
          <h3>${variation.vibe}</h3>
          <p>${variation.description}</p>
          <small>Tags: ${variation.tags.join(", ")}</small>
        </div>
      </div>
    `;

    variationContainer.appendChild(variationCard);
  });

  baseCard.appendChild(variationContainer);
  container.appendChild(baseCard);
});

function toggleTheme() {
  document.body.classList.toggle("dark");
}


function goToPage(pageIndex) {
  const wrapper = document.querySelector('.slider-wrapper');
  wrapper.style.transform = `translateX(-${pageIndex * 50}%)`;

  const allButtons = document.querySelectorAll('.page-nav button');
  allButtons.forEach(btn => btn.classList.remove('active'));

  const activeButtons = document.querySelectorAll(`.page-nav button:nth-child(${pageIndex + 1})`);
  activeButtons.forEach(btn => btn.classList.add('active'));
}
// IMAGE MODAL SYSTEM (Clean Version)

// Open modal when clicking any image
document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("base-image") ||
    e.target.classList.contains("accessory-image")
  ) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "block";
    modalImg.src = e.target.src;
  }
});

// Close logic
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const closeBtn = document.querySelector(".close-modal");

  if (modal && closeBtn) {

    // Close on X
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    // Close on outside click
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });

    // Close on ESC
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        modal.style.display = "none";
      }
    });

  }
});