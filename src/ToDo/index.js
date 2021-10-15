import React from 'react';
import CardTask from './components/CardTask';
import Search from './components/Search';
import InputTask from './components/InputTask';

const ToDo = () => {
    return (
        <>
            <Search />
            <CardTask />
            <InputTask />
        </>
    )
}

export default ToDo