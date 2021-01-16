import React, { useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_SAVE, LOADING, UPDATE_SAVED } from "../../utils/actions";
import API from "../../utils/API";
import Card from "react-bootstrap/Card";
import './style.css';

function SavedBooks() {
    const [state, dispatch] = useStoreContext();

    const getSaved = () => {
        dispatch({ type: LOADING });
        API.getSaved()
            .then(results => {
                dispatch({
                    type: UPDATE_SAVED,
                    saved: results.data
                });
            })
            .catch(err => console.log(err));
    };

    const removeFromSaved = id => {
        API.deleteSave(id)
            .then(() => {
                dispatch({
                    type: REMOVE_SAVE,
                    _id: id
                });
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getSaved();
    }, []);

    return (
        <Card className="position" bg="light">
            <Card.Body>
                <Card.Title>Saved Books</Card.Title>
                {state.saved.map(save => (
                    <Card key={save._id}>
                        <Card.Body>
                            <Card.Img className="image" variant="top" src={save.image} />
                            <Card.Title>{save.title}</Card.Title>
                            <Card.Text>{save.authors}</Card.Text>
                            <Card.Text>{save.description}</Card.Text>
                            <Card.Link href={save.link}>View</Card.Link>
                            <Card.Link onClick={() => { removeFromSaved(save._id) }}>Delete</Card.Link>
                        </Card.Body>
                    </Card>
                ))}
            </Card.Body>
        </Card>
    )
}

export default SavedBooks;