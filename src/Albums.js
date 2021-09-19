import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhotoById } from './Redux/Actions/photosAction';
import { Container, List, Typography } from '@mui/material';

const Albums = ({ searchResult }) => {
    const AlbumsData = useSelector(state => state.albums);
    const photos = useSelector(state => state.photos.slice(0, 10));
    const dispatch = useDispatch();

    useEffect(() => {
        AlbumsData.forEach(album => dispatch(getPhotoById(album.id)));
    }, []);

    return (
        <div>
            {searchResult.map(album => (
                <Container key={album.id} style={{ marginTop: '20px' }}>
                    <Typography variant='h5' color='primary' gutterBottom component='div'>
                        {album.title}
                    </Typography>
                    <Typography variant='body2' gutterBottom component='div'>
                        {photos.map(photo => (
                            <List>{photo.title}</List>
                        ))}
                    </Typography>
                </Container>
            ))}
        </div>
    );
};

export default Albums;
