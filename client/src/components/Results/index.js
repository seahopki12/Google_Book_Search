import React, { useRef } from "react";
import Card from "react-bootstrap/Card";
import { useStoreContext } from "../../utils/GlobalState"
import { ADD_SAVE, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import "./style.css";

function Results() {
    // const titleRef = useRef();
    // const authorsRef = useRef();
    // const descriptionRef = useRef();
    // const imageRef = useRef();
    // const linkRef = useRef();
    const [state, dispatch] = useStoreContext();

    const addSave = savedBook => {
        dispatch({ type: LOADING });
        API.saveBook({
            title: savedBook.title,
            authors: savedBook.authors,
            description: savedBook.description,
            image: savedBook.image,
            link: savedBook.link
        })
            .then(result => {
                console.log(result);
                dispatch({
                    type: ADD_SAVE,
                    book: result.data
                });
            })
            .catch(err => console.log(err));
    };

    return (
        <Card className="position" bg="light">
            <Card.Body>
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
                            <Card.Link onClick={() => {addSave(book)}}>Save</Card.Link>
                        </Card.Body>
                    </Card>
                ))}
            </Card.Body>
        </Card>
    )
}

export default Results;