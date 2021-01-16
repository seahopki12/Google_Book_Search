import React from "react";
import Card from "react-bootstrap/Card";
import { useStoreContext } from "../../utils/GlobalState"
import "./style.css";

function Results() {
    const [state, dispatch] = useStoreContext();

    return (
        <Card className="position" bg="light">
            <Card.Title>Results</Card.Title>
            {state.books.map(book => (
                <Card key={book._id}>
                    <Card.Body>
                        <Card.Img className="image" variant="top" src={book.image} />
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>Written By: {book.authors}</Card.Text>
                        <Card.Text>
                            {book.description}
                        </Card.Text>
                        <Card.Link href={book.link}>View</Card.Link>
                        <Card.Link href="#">Save</Card.Link>
                    </Card.Body>
                </Card>
            ))}
        </Card>
    )
}

export default Results;