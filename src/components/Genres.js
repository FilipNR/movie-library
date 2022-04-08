import { useState } from 'react';
import { Checkbox, Button } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { cleanPages, setLastCall } from '../actions/moviesActions';
import { setGenreList } from '../actions/genreActions';

const Genres = () => {
    const dispatch = useDispatch();
    const movie = useSelector(state => state);
    const [tempGenreList, setTempGenreList] = useState([]);
    const { genres } = movie.movieData;

    const changeValue = (prop, index) => {
        let tempObj = { ...genres };
        tempObj[index].isChecked = prop;
        setTempGenreList([]); // Clear genres

        genres.map(genre => {
            return genre.isChecked && setTempGenreList(spreadGenres => [...spreadGenres, genre.genre_id]) // Spread checked genres, and add another one
        });
    };

    return (
        <>
            <div className="checkbox-container">
                <form onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(setGenreList(tempGenreList));
                    dispatch(cleanPages());
                    dispatch(setLastCall('GENRE'));
                }}>

                    {genres.map((genre, index) => (
                        <Checkbox
                            key={index}
                            label={genre.name}
                            onChange={e => changeValue(e.target.checked, index)}
                        />
                    ))}

                    <Button type="submit" style={{ maxWidth: '100%' }}>
                        Discover
                    </Button>

                </form>
            </div>
        </>
    );
};

export default Genres;