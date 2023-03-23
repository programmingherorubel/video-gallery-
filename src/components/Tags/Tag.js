import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {removeTags,tagsSelected} from '../../features/filter/filter'

const Tag = ({title}) => {

    const dispatch = useDispatch()
    const {tags:info} = useSelector(state => state.filter)
    const isSelected = info.includes(title) ? true : false 

    const style = isSelected ? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer': 'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer'

    const handelSelect = ()=>{
        if(isSelected){
            dispatch(removeTags(title))
        }else{
            dispatch(tagsSelected(title))
        }
    }
    return (
        <>
            <div className={style} onClick={handelSelect}>
                {title}
            </div>  
        </>
    );
};

export default Tag;
