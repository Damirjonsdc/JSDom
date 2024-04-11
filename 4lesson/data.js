// script.js

// Данные о фильмах
const moviesData = [
    {
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        rating: 8.8,
        imageUrl: "https://example.com/inception.jpg",
        description: "Inception is a science fiction action film written and directed by Christopher Nolan."
    },
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        year: 1994,
        rating: 9.3,
        imageUrl: "https://example.com/shawshank.jpg",
        description: "The Shawshank Redemption is a drama film directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption."
    }
    // Добавьте другие фильмы по аналогии...
];

// Получаем случайный фильм из массива данных
const randomMovie = moviesData[Math.floor(Math.random() * moviesData.length)];

// Получаем элемент, в который будем добавлять информацию о фильме
const movieInfoContainer = document.getElementById("movieInfo");

// Создаем HTML-разметку для отображения информации о фильме
const movieHtml = `
    <div>
        <img src="${randomMovie.imageUrl}" alt="${randomMovie.title}">
        <h2>${randomMovie.title} (${randomMovie.year})</h2>
        <p><strong>Director:</strong> ${randomMovie.director}</p>
        <p><strong>Rating:</strong> ${randomMovie.rating}</p>
        <p>${randomMovie.description}</p>
    </div>
`;

// Добавляем HTML-разметку в блок movieInfo
movieInfoContainer.innerHTML = movieHtml;
