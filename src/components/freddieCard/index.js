import React from "react";
// import Jumbotron from 'react-bootstrap/Jumbotron'
// import Container from 'react-bootstrap/Container'
import "./style.css";

function freddieCard(props) {
    return (
        <div>
            {/* <Jumbotron fluid>
                <Container>
                    <h1>Fluid jumbotron</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
    </p>
                </Container>
            </Jumbotron> */}
            <div className="card" style={{ width: '25rem' }} >
                <div className="container">
                    <img alt={props.name} src={props.image} />
                </div>
                <span onClick={() => props.removeFreddie(props.id)} className="remove">
                    x
            </span>
            </div>
        </div>
    );
}

export default freddieCard;