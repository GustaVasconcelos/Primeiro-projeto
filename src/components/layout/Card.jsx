import "./Card.css";
import React from "react";

export default params => {
    const cardStyle ={
        backgroundColor: params.color || "#F00",
        borderColor: params.color || "#F00",
    }
    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{params.titulo}</div>
            <div className="Content">
                {params.children}
            </div>


        </div>
    )
}