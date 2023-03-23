import React from 'react';
import { useGetVideosQuery } from '../../features/apiSlice';
import SingleVido from '../Video/singleVideo';
import Loading from '../Loading'
import Error from '../Error'
import { useSelector } from 'react-redux';


const VideosList = () => {
    const {search,tags} = useSelector(state => state.filter)
    const {data:videos,isLoading,isError} = useGetVideosQuery({tags,search})
    
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
        content =  videos?.map((video,index) => <SingleVido video={video} key={index}/>)
    }
    return (
        <section className="pt-12">
            <section className="pt-12">
                <div
                    className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                    {/* <!-- single video --> */}
                    
                    {content}
                    {/* <!-- error section
                    <div className="col-span-12">some error happened</div> --> */}
                </div>
            </section>
        </section>
    );
};

export default VideosList;