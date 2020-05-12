import React, { useState } from 'react';

function SearchBar(props) {

    const [currentInput, setCurrentInput] = useState("");

    function onSubmit(e) {
        e.preventDefault();
        props.setInput(currentInput);
    }

    function onChange(e) {
        setCurrentInput(e.target.value);
    }

    return (
        <div className="mt-3">
        <form onSubmit={onSubmit}>
        <input className="form-control form-control-lg" type="text" value = {currentInput} placeholder="search" onChange={onChange} />
        </form>
        </div>

    );

}

export default SearchBar;