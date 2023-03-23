import React from 'react';
import { useGetTagsQuery } from '../../features/apiSlice';
import Tag from './Tag';
import Loading from '../../components/Loading'
import Error from '../../components/Error'

const Tags = () => {
    const {data:tags,isLoading,isError}= useGetTagsQuery() 
    let content = null
    if(isLoading){
        content =  <Loading />
    }
    if(!isLoading && isError){
        content =  <Error message='thare was an error'/>
    }
    if(!isLoading && !isError && tags?.length === 0){
        content =  <Error message='data not found'/>
    }
    if(!isLoading && !isError && tags?.length > 0){
        content =  tags?.map((tag,index) => <Tag title={tag.title} key={index}/>)
    }
    
    return (
        <section>
            <div
                className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto"
            >
                {content}
            </div>
        </section>
    );
};

export default Tags;