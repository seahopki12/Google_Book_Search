import React from "react";
import Card from "react-bootstrap/Card";

function Header() {
    return (
        <Card>
            <Card.Body>
                <Card.Title>(React) Google Book Search</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Search for and Save Books of Interest</Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default Header;