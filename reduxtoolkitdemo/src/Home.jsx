import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Home(props) {

    const dispatch  = useDispatch();

    const {c} = useSelector(state => state.custom)

    const addBtn = () => {
        dispatch({
            type: 'increment'
        })
    }

    const subBtn = () => {
        dispatch({
            type:'decrement'})
    }

    const incByVal = () => {
        dispatch({
            type:'incrementByValue',
            payload: 50
        })
    }

    return (
        <>
        {c}
        <div>
            <button onClick={addBtn}>Increment</button>
            <button onClick={subBtn}>Decrement</button>
            <button onClick={incByVal}>Increment by 50</button>
        </div></>
    );
}

export default Home;