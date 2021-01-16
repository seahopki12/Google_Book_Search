import React from "react";
import Header from "../components/Header";
import Results from "../components/Results";
import SearchCard from "../components/SearchCard";

function Search() {
    return (
        <div>
            <Header/>
            <SearchCard/>
            <Results/>
        </div>
    )
}

export default Search;