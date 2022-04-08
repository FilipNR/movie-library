import { SimpleGrid } from "@mantine/core";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
    return (
        <SimpleGrid
            cols={4}
            spacing="lg"
            breakpoints={[
                { minWidth: 1700, cols: 4, spacing: 'sm' },
                { minWidth: 1350, cols: 3, spacing: 'sm' },
                { minWidth: 1000, cols: 2, spacing: 'sm', marginBottom: "2em" },
                { minWidth: 800, cols: 1, spacing: 'sm' },
                { maxWidth: 800, cols: 1, spacing: 'sm' },
            ]}
        >   {/* Map movies and don't return those that don't include a poster */}
            {movies.map(movie => {
                return <MovieCard key={movie.id}
                    title={movie.title}
                    original_title={movie.original_title}
                    overview={movie.overview}
                    imgUrl={movie.poster_path}
                    adult={movie.adult}
                    rating={movie.vote_average}
                    votes={movie.vote_count}
                    genres={movie.genre_ids}
                    released={movie.release_date}
                    name={movie.name}
                    original_name={movie.original_name}
                />
            })}
        </SimpleGrid>
    );
};

export default MovieList;