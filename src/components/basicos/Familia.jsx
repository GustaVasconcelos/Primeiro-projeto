import React, { cloneElement } from "react";


export default props => {
    console.log(props.children)
    return (
        <div>
            {
                React.Children.map(props.children, child =>{
                    return cloneElement(child, props)
                })
            }

        </div>
    )
}