import { useDispatch } from 'react-redux';
import { InputWrapper, Input } from '@mantine/core';
import { cleanPages, setInput, setLastCall } from '../actions/moviesActions';
import { setGenreList } from '../actions/genreActions';
import { FaSearch } from 'react-icons/fa';

const MovieSearch = () => {
    const dispatch = useDispatch();

    return (
        <form onSubmit={e => {
            e.preventDefault();
            dispatch(setGenreList([]));
            dispatch(cleanPages());
            dispatch(setInput(e.target[0].value));
            dispatch(setLastCall('SEARCH'));
        }}>
            <InputWrapper label="Search for a movie:" >
                <Input
                    placeholder='Enter a movie...'
                    icon={<FaSearch />}
                    required
                    style={{ marginBottom: '2em' }} />
            </InputWrapper>
        </form>
    )
}

export default MovieSearch;