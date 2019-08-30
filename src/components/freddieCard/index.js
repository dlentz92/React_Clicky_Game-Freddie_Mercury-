import React from "react";

import "./style.css";

function freddieCard(props) {
    return (
   
            <div className="col backGround">
             

                    <img onClick={() => props.clickCount(props.id)} style={{ width: '10rem', height: '10rem', margin:"10px" }} alt={props.name} src={props.image} />


               
            </div>
     
    );
}

export default freddieCard;