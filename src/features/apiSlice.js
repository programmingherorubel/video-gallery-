import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    name:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:9000/'
    }),
    endpoints:(builder)=>({
        getVideos:builder.query({
            query:({tags,search})=> {
                let queryString = ''

                if(tags.length > 0){
                    queryString += tags.map(tag => `tags_like=${tag}`).join("&")
                }

                if(search !== ''){
                    queryString += `&q=${search}`
                }
                return `/videos/?${queryString}`
            }
        }),
        getTags:builder.query({
            query:()=> '/tags'
        }),
        getSingleVideo:builder.query({
            query:(id)=> `/videos/${id}`
        }),
        getReletedVideo:builder.query({
            query:({id,tags})=> {
                const limit = 4
                 const queryString = tags?.length > 0 ? tags.map(tag => `tags_like=${tag}`).join("&") + `&id_ne=${id}&_limit=${limit}`
                :`id_ne=${id}&_limit=${limit}`
                
                return `/videos?${queryString}` 
            }
        }),
    }),
})



export const {useGetVideosQuery,useGetTagsQuery,useGetSingleVideoQuery,useGetReletedVideoQuery} = apiSlice