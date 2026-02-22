fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('items-container');

    data.items.forEach(item => {
      const baseCard = document.createElement('div');
      baseCard.classList.add('base-card');

      baseCard.innerHTML = `
        <h2>${item.baseItem.name}</h2>
        <p>Category: ${item.baseItem.category}</p>
      `;

      container.appendChild(baseCard);
    });
  })
  .catch(error => console.error('Error loading data:', error));