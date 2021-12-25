import React, { useEffect } from 'react'
import Notes from './Notes';

const Home = () => {
    return (
        <>
            <div className="container mt-3">
                <h1 className="display-4 text-center">Add a typed note</h1>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="should not be left empty" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" rows="3" placeholder="should not contain less than 5 characters"></textarea>
                </div>
            </div>
            <Notes/>
        </>
    )
}

export default Home;
