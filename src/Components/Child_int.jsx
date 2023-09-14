import React from 'react';
import './style.scss';

const Child = (props) => {
    const currId = props.id;

    const handleClick = (e) => {
        e.preventDefault();
        const inputValue = document.getElementById(`${currId}inputField`).value;
        console.log(inputValue);
        props.myArray[currId] = inputValue;
        console.log(props.myArray);
        fetch('/set_config', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": parseInt(currId),
                "value": parseInt(inputValue) || inputValue
            })
        }).then(res => {
            if (res.ok) {
                props.myArray[currId] = inputValue;
                props.current_value = inputValue;
            } else {
                alert('This setting cannot be changed and is restricted by permissions');
            }
        });
    };

    return (
        <div className='child'>
            <hr id="hr1" />
            <h3>{props.name}</h3>
            <h5>{props.description}</h5>

            <form onSubmit={handleClick}>
                <div className='child_int'>
                    <h4 id='option'>Enter Value: </h4>
                    <input defaultValue={props.current_value} type={props.current_val instanceof String ? "string" : "number"} id={currId + "inputField"} />
                    <button type="submit" >SUBMIT</button>
                </div>
            </form>
        </div>
    );
};

export default Child;
