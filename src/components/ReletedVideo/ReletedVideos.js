import React from 'react';
import { useGetReletedVideoQuery } from '../../features/apiSlice';
import SingleReletedVideo from '../ReletedVideo/SingleReletedVideo';
import Loading from '../Loading'
import Error from '../Error'

const ReletedVideos = ({id,tags}) => {
    const {data:videos,isLoading,isError} = useGetReletedVideoQuery({id,tags})
    
    let content = null
    if(isLoading){
        content =  <Loading />
    }
    if(!isLoading && isError){
        content =  <Error message='thare was an error'/>
    }
    if(!isLoading && !isError && videos?.length === 0){
        content =  <Error message='data not found'/>
    }
    if(!isLoading && !isError && videos?.length > 0){
        content =  videos?.map((video,index) => <SingleReletedVideo video={video} key={index} />)
    }
    return (
        <div
                        className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
                    >
                        {/* <!-- single related video --> */}
                        {content}
                    </div>
    );
};

export default ReletedVideos;