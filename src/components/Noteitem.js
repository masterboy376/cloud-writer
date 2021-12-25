import React from 'react'

function Noteitem(props) {
    const { note } = props;
    return (
        <>
            <div class="card mt-3">
                <div class="card-header">
                    <h6>{note.title} <span class="badge bg-secondary">{note.tag}</span></h6>
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>{note.description}</p>
                        <footer class="fs-6">{note.date}</footer>
                    </blockquote>
                </div>
            </div>
        </>
    )
}

export default Noteitem
