import React from 'react';
import Pagination from '../components/pagination';
import Tags from '../components/Tags/Tags';
import VideosList from '../components/Video/VideosList';

const Home = () => {
    return (
        <>
            <Tags />
            <VideosList/>
            <Pagination/>
        </>
    );
};

export default Home;