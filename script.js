const movies = [
    {
        title: "Inception",
        genre: "sci-fi",
        rating: "8.8/10",
        image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        description: "A skilled thief enters people's dreams to steal secrets and manipulate their minds."
    },
    {
        title: "The Dark Knight",
        genre: "action",
        rating: "9.0/10",
        image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        description: "Batman faces a dangerous criminal mastermind who creates chaos in Gotham City."
    },
    {
        title: "The Hangover",
        genre: "comedy",
        rating: "7.7/10",
        image: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
        description: "Three friends wake up after a wild bachelor party and try to remember what happened."
    },
    {
        title: "The Shawshank Redemption",
        genre: "drama",
        rating: "9.3/10",
        image: "https://image.tmdb.org/t/p/w500/lyQBXzOQSuE59IsHyHRNYmH8k.jpg",
        description: "A prisoner develops an unlikely friendship while holding onto hope inside prison."
    },
    {
        title: "The Conjuring",
        genre: "horror",
        rating: "7.5/10",
        image: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
        description: "Paranormal investigators help a family experiencing terrifying supernatural events."
    },
    {
        title: "The Notebook",
        genre: "romance",
        rating: "7.8/10",
        image: "https://image.tmdb.org/t/p/w500/rNzQyW4f8B8cQeg7Dgj3n6Qf4Q.jpg",
        description: "A romantic story about two people whose love survives separation and time."
    }
];

function recommendMovies() {
    const selectedGenre = document.getElementById("genre").value;
    const movieList = document.getElementById("movieList");

    movieList.innerHTML = "";

    let recommendations;

    if (selectedGenre === "all") {
        recommendations = movies;
    } else {
        recommendations = movies.filter(
            movie => movie.genre === selectedGenre
        );
    }

    if (recommendations.length === 0) {
        movieList.innerHTML = `
            <p>No movies found for this genre.</p>
        `;
        return;
    }

    recommendations.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movie-card";

        card.innerHTML = `
            <img 
                src="${movie.image}" 
                alt="${movie.title}"
                class="movie-poster"
            >

            <div class="movie-info">
                <h2>${movie.title}</h2>
                <p class="genre">
                    Genre: ${movie.genre.toUpperCase()}
                </p>
                <p class="rating">
                    ⭐ ${movie.rating}
                </p>
                <p class="description">
                    ${movie.description}
                </p>
            </div>
        `;

        movieList.appendChild(card);
    });
}

// Show all movies when the page loads
recommendMovies();