export const setMovies = (movies) => {
    return {
        type: "INITIAL_FETCH",
        payload: movies
    };
};

export const setPages = (pages) => {
    return {
        type: "SET_PAGES",
        payload: pages
    };
};

export const setNextPage = (page) => {
    return {
        type: "SET_CURRENT_PAGE",
        payload: page + 1
    };
};

export const setPreviousPage = (page) => {
    return {
        type: "SET_CURRENT_PAGE",
        payload: page - 1
    };
};

export const cleanPages = () => {
    return {
        type: "CLEAN_PAGES",
        payload: 1
    };
};

export const setInput = (input) => {
    return {
        type: "SET_INPUT",
        payload: input
    };
};

export const setLastCall = (call) => {
    return {
        type: "SET_LAST_CALL",
        payload: call
    };
};