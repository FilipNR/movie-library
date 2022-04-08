const genres = [
    { isChecked: false, genre_id: '28', name: 'Action' },
    { isChecked: false, genre_id: '12', name: 'Adventure' },
    { isChecked: false, genre_id: '16', name: 'Animation' },
    { isChecked: false, genre_id: '35', name: 'Comedy' },
    { isChecked: false, genre_id: '80', name: 'Crime' },
    { isChecked: false, genre_id: '99', name: 'Documentary' },
    { isChecked: false, genre_id: '18', name: 'Drama' },
    { isChecked: false, genre_id: '10751', name: 'Family' },
    { isChecked: false, genre_id: '14', name: 'Fantasy' },
    { isChecked: false, genre_id: '36', name: 'History' },
    { isChecked: false, genre_id: '27', name: 'Horror' },
    { isChecked: false, genre_id: '10402', name: 'Music' },
    { isChecked: false, genre_id: '9648', name: 'Mystery' },
    { isChecked: false, genre_id: '10749', name: 'Romance' },
    { isChecked: false, genre_id: '878', name: 'Sci-fi' },
    { isChecked: false, genre_id: '10770', name: 'TV Movie' },
    { isChecked: false, genre_id: '53', name: 'Thriller' },
    { isChecked: false, genre_id: '10752', name: 'War' },
    { isChecked: false, genre_id: '37', name: 'Western' }
];

const initialState = {
    movies: [],
    currentPage: 1,
    searchInput: '',
    genres,
    genreList: [],
    totalPages: 0,
    lastCall: 'DISCOVER'
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INITIAL_FETCH":
            return { ...state, movies: action.payload };
        case "UPDATE_PAGE":
            return { ...state, currentPage: action.payload };
        case "SET_GENRE_LIST":
            return { ...state, genreList: action.payload }
        case "CLEAN_PAGES":
            return { ...state, genres: genres, currentPage: action.payload }; // Cleans genres
        case "SET_PAGES":
            return { ...state, totalPages: action.payload };
        case "SET_CURRENT_PAGE":
            return { ...state, currentPage: action.payload };
        case "SET_INPUT":
            return { ...state, searchInput: action.payload };
        case "SET_LAST_CALL":
            return { ...state, lastCall: action.payload };
        default:
            return state;
    };
};

export default movieReducer;