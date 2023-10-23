const key = "4e0e5026";
const apiUrl = 'https://www.omdbapi.com'

const searchMovies = (search: string) => {
    return fetch(`${apiUrl}/?apikey=${key}&s=${search}`).then((response) => {
        return response.json()
    }).then(response => response.Search ? response.Search.map(
        (movie: any) => ({
            title: movie.Title,
            poster: movie.Poster,
            releaseYear: movie.Year,
            id: movie.imdbID
        })) : []
    )
}
const getMovieDetails = (id: string) => {
    return fetch(`${apiUrl}/?apikey=${key}&i=${id}`).then(
        (response) => response.json()).then(
            response => ({
                title: response.Title,
                poster: response.Poster,
                releaseYear: response.Year,
                id: response.imdbID,
                genre: response.Genre,
                director: response.Director,
                actors: response.Actors,
                plot: response.Plot
            }))
}

export {
    searchMovies,
    getMovieDetails
}