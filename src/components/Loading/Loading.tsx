import React from 'react'
import { cn } from '@bem-react/classname';
import "./Loading.css"

const Loading = () => {
    const cnLoading = cn("Loading");
    return (
        <div className="container">
            <div className={cnLoading()}></div>
        </div>
    )
}

export default Loading
