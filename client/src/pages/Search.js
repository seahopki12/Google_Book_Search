import React from "react";
import Header from "../components/Header";
import SavedBooksCard from "../components/SavedBooksCard";
import SearchCard from "../components/SearchCard";

function Search() {
    return (
        <div>
            <Header/>
            <SearchCard/>
            <SavedBooksCard title="Results"/>
        </div>
    )
}

export default Search;