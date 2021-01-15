import React from "react";
import Card from "react-bootstrap/Card";
import SavedBook from "../SavedBook/index";
import './style.css';

function SavedBooksCard(props) {
    return (
        <Card className="position" bg="light">
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <SavedBook/>
            </Card.Body>
        </Card>
    )
}

export default SavedBooksCard;