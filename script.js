document.addEventListener('DOMContentLoaded', () => {
    // Функция для добавления класса анимации
    const addFadeInEffect = (selector, delay = 0) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            element.classList.add('fade-in');
            setTimeout(() => {
                element.classList.add('visible');
            }, delay + index * 500); // Задержка между элементами
        });
    };

    // Анимация для всех страниц
    addFadeInEffect('header');
    addFadeInEffect('nav ul li', 1000);
    addFadeInEffect('main h1', 1500);
    addFadeInEffect('main p', 2000);

    // Анимация на странице продуктов
    if (document.body.contains(document.querySelector('.product-grid'))) {
        const products = [
            { name: 'Ноутбук', description: 'Высокопроизводительный ноутбук для игр.' },
            { name: 'Смартфон', description: 'Самая последняя версия всеми любимого яблока.' },
            { name: 'Наушники', description: 'Наушники с шумоподавлением.' },
            { name: 'Умные часы', description: 'Стильные и функциональные смарт-часы.' }
        ];

        const productGrid = document.querySelector('.product-grid');
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `<h2>${product.name}</h2><p>${product.description}</p>`;
            productGrid.appendChild(productDiv);
        });

        // Убедимся, что новый добавленный элемент имеет класс fade-in
        document.querySelectorAll('.product-grid div').forEach(div => {
            div.classList.add('fade-in');
        });

        addFadeInEffect('.product-grid div', 2500);

        // Добавление эффектов при наведении мыши на продукты
        productGrid.addEventListener('mouseover', (event) => {
            if (event.target.closest('div')) {
                event.target.closest('div').classList.add('hover-effect');
            }
        });

        productGrid.addEventListener('mouseout', (event) => {
            if (event.target.closest('div')) {
                event.target.closest('div').classList.remove('hover-effect');
            }
        });
    }

    // Анимация на контактной странице
    if (document.body.contains(document.querySelector('#contactForm'))) {
        const contactForm = document.querySelector('#contactForm');
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Мы скоро свяжемся с Вами!');
            contactForm.reset();
        });

        document.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                contactForm.querySelector('button').click();
            }
        });

        addFadeInEffect('#contactForm label', 2500);
        addFadeInEffect('#contactForm input, #contactForm textarea, #contactForm button', 3000);

        // Добавление эффекта при фокусе на инпуты
        contactForm.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('focus', (event) => {
                event.target.classList.add('focus-effect');
            });
            input.addEventListener('blur', (event) => {
                event.target.classList.remove('focus-effect');
            });
        });
    }

    // Общие эффекты для всех страниц
    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => {
        heading.addEventListener('click', () => {
            heading.classList.add('rotate-effect');
            setTimeout(() => {
                heading.classList.remove('rotate-effect');
            }, 1000);
        });
    });

    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        paragraph.addEventListener('mouseenter', () => {
            paragraph.classList.add('scale-effect');
        });
        paragraph.addEventListener('mouseleave', () => {
            paragraph.classList.remove('scale-effect');
        });
    });
});
