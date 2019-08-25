import React from "react";

function FreddieCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <span onClick={() => props.removeFriend(props.id)} className="remove">
                x
            </span>
        </div>
    );
}

export default FreddieCard;