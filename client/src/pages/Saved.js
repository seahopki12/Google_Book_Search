import React from "react";
import Header from "../components/Header";
import SavedBooksCard from "../components/SavedBooksCard";

function Saved() {
    return (
        <div>
            <Header/>
            <SavedBooksCard title="Saved Book"/>
        </div>
    )
}

export default Saved;