import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_BOOKS, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import "./style.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SearchCard() {
    const titleRef = useRef();
    const [state, dispatch] = useStoreContext();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: LOADING });
        API.getBooksByTitle(titleRef.current.value)
            .then(results => {
                dispatch({
                    type: UPDATE_BOOKS,
                    books: results
                });
            })
            .catch(err => console.log(err));

        titleRef.current.value = "";
    };

    return (
        <Card className="position" bg="light">
            <Card.Body>
                <Card.Title>Book Search</Card.Title>
                <Card.Text>Book</Card.Text>
                <Form onSubmit={handleSubmit}>
                    <Form.Control required ref={titleRef} placeholder="Harry Potter" />
                    <br />
                    <Button variant="primary" disabled={state.loading} type="submit">Search</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default SearchCard;