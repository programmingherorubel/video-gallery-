import React from 'react';
import { useParams } from 'react-router-dom';
import Error from '../components/Error';
import Loading from '../components/Loading';
import ReletedVideos from '../components/ReletedVideo/ReletedVideos';
import VideoDescription from '../components/ReletedVideo/VideoDescription';
import VideoPlayer from '../components/ReletedVideo/VideoPlayer';
import { useGetSingleVideoQuery } from '../features/apiSlice';



const VideoPage = () => {
    const {id} = useParams()
    const {data:video,isLoading,isError} = useGetSingleVideoQuery(id)
    const {title,description,author,avatar,date,duration,views,link,thumbnail,tags,likes,unlikes} = video || {}
    let content = null
    if(isLoading){
        content =  <Loading />
    }
    if(!isLoading && isError){
        content =  <Error message='thare was an error'/>
    }
    if(!isLoading && !isError && !video?.id){
        content =  <Error message='No Video Found'/>
    }
    if(!isLoading && !isError && video?.id){
        content =  <div className="grid grid-cols-3 gap-2 lg:gap-8">
                        <div className="col-span-full w-full space-y-8 lg:col-span-2">
                            {/* <!-- video player --> */}
                            <VideoPlayer link={link}title={title} />

                            {/* <!-- video description --> */}
                            <VideoDescription title={title} date={date} description={description} likes={likes} unlikes={unlikes}/>
                        </div>

                        {/* <!-- related videos --> */}
                        <ReletedVideos id={id} tags={tags} />
                    </div>
    }

   
    
    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                {content}
            </div>
        </section>
    );
};

export default VideoPage;