import React, { useContext, useEffect } from 'react'
import noteContext from '../Context/notes/noteContext'

const Home = () => {
    const a = useContext(noteContext)
    useEffect(() => {
        a.update();
    }, [])
    return (
        <div>
            This is HOME {a.state.name} and he is in class {a.state.class}
        </div>
    )
}

export default Home;
