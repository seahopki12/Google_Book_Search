import React from "react";
import Card from "react-bootstrap/Card";
import './style.css';

function SavedBooks() {
    return (
        <Card className="position" bg="light">
            <Card.Body>
                <Card.Title>Saved Books</Card.Title>
                <Card>
                    <Card.Body>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Title>Book Title</Card.Title>
                        <Card.Subtitle>Book Subtitle</Card.Subtitle>
                        <Card.Text>Written By: Author Name</Card.Text>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Link href="#">View</Card.Link>
                        <Card.Link href="#">Delete</Card.Link>
                    </Card.Body>
                </Card>
            </Card.Body>
        </Card>
    )
}

export default SavedBooks;