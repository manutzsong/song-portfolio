import React from 'react';
export default ({skill,bg})=>{
    return <div>
            <span className={"col text-white tag mx-2 " + bg} >{skill}</span>
        </div>
}