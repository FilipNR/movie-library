import { useState } from 'react';
import { setNextPage, setPreviousPage } from '../actions/moviesActions';
import Genres from './Genres';
import MovieList from './MovieList';
import MovieSearch from './MovieSearch';
import {
    AppShell,
    Navbar,
    Header,
    Text,
    MediaQuery,
    Burger,
    Button,
    useMantineTheme
} from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';

const MovieTemplate = () => {
    const movie = useSelector(state => state);
    const { currentPage, totalPages, genres } = movie.movieData
    const dispatch = useDispatch();

    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            fixed
            navbar={
                // <div style={{ minHeight: '100vh' }}>
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }} height="100vh" style={{ maxHeight: '100vh' }}>
                    <MovieSearch />
                    <Genres genres={genres} />
                    <Text style={{ marginTop: '7em' }}>Powered by: <a href="https://www.themoviedb.org/">Tmdb API</a></Text>
                </Navbar>
                // </div>
            }
            header={
                <Header height={50} p="xs">
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="md"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>
                        <Text size="lg">Movie Library</Text>
                    </div>
                </Header>
            }
        >
            <MovieList movies={movie.movieData.movies} />  {/*Movie list component*/}
            <div className="button-container">
                {totalPages === 0 && <h1>No movies found</h1>}
                {currentPage > 1 ? <Button onClick={() => dispatch(setPreviousPage(currentPage))}>Previous page</Button>
                    : <Button disabled>Previous page</Button>}
                {totalPages !== currentPage ? <Button onClick={() => dispatch(setNextPage(currentPage))}>Next page</Button>
                    : <Button disabled >Next page</Button>}
            </div>
        </AppShell>
    );
};

export default MovieTemplate;