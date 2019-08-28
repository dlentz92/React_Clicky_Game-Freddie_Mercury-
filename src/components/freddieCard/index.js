import React from "react";
// import Jumbotron from 'react-bootstrap/Jumbotron'
// import Container from 'react-bootstrap/Container'
import "./style.css";

function freddieCard(props) {
    return (
   
            <div className="col">
             

                    <img onClick={() => props.clickCount(props.id)} style={{ width: '10rem', height: '10rem', margin:"10px" }} alt={props.name} src={props.image} />


               
            </div>
     
    );
}

export default freddieCard;