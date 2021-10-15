import React from 'react';
import CardTask from './components/CardTask';
import Search from './components/Search';
import InputTask from './components/InputTask';

const ToDo = () => {
    return (
        <>
            <CardTask />
            <Search />
            <InputTask />
        </>
    )
}

export default ToDo