const container = document.querySelector('.cards__wrapper');

fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.className = 'card';
            cardElement.innerHTML = `
            <div class="card__info">
                <img src="${card.logo}" alt="${card.name}">
                <ul class="card__text">
                <li id="cardTitle">${card.name}</li>
                <li id="cardText">${card.description}</li>
                </ul>
            </div>
            <div class="card__buttons">
                <span class="remove__button">Remove</span>
                <label class="switch-container">
                <input type="checkbox" class="checkbox" ${card.isActive ? 'checked' : ''}/>
                <div class="switch">
                    <div class="slider"></div>
                </div>
                </label>
            </div>
            `;

            container.appendChild(cardElement);
            
        });
    })