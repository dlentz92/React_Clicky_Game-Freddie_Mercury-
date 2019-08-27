import React from "react";
// import Jumbotron from 'react-bootstrap/Jumbotron'
// import Container from 'react-bootstrap/Container'
import "./style.css";

function freddieCard(props) {
    return (
   
            <div className="col">
             

                    <img onClick={() => props.clickCount(props.id)} style={{ width: '25rem', height: '25rem', margin:"10px" }} alt={props.name} src={props.image} />


               
            </div>
     
    );
}

export default freddieCard;