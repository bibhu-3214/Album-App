import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Albums from './Albums';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

const App = () => {
    const [searchInput, setSearchInput] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const albums = useSelector(state => state.albums);

    useEffect(() => {
        const results = albums.filter(album => album.title.toLowerCase().includes(searchInput));
        setSearchResult(results);
    }, [albums, searchInput]);

    return (
        <Container>
            <TextField
                type='search'
                size='small'
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                style={{ width: '100%' }}
            />
            <Albums searchResult={searchResult} />
        </Container>
    );
};

export default App;
