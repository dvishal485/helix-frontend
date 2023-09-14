import React, { useState } from 'react';
import ReactSwitch from 'react-switch';
import './style.scss';

function ToggleSwitch(props) {
    const [checked, setChecked] = useState(props.current_value);

    const handleChange = val => {
        fetch('/set_config', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                "id": props.id,
                "value": val
            })
        }).then(res => {
            if (res.ok) {
                console.log(`Successfully set config with id ${props.id} to value ${val}`);
                setChecked(val)
            } else {
                alert('This setting cannot be changed and is restricted by permissions');
            }
        });
    }

    return (
        <div className="toggler" style={{ textAlign: "center" }}>
            <ReactSwitch
                checked={checked}
                onChange={handleChange}
            />
        </div>
    );
}

export default ToggleSwitch;
