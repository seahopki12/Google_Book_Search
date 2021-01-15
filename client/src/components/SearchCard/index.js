import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SearchCard() {
    return (
        <Card className="position" bg="light">
            <Card.Body>
                <Card.Title>Book Search</Card.Title>
                <Card.Text>Book</Card.Text>
                <Form>
                    <Form.Control placeholder="Harry Potter" />
                </Form>
                <br/>
                <Button variant="primary">Submit</Button>
            </Card.Body>
        </Card>
    )
}

export default SearchCard;