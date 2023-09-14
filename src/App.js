
import './App.css';
import './Components/style.scss'
import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
import Child_int from './Components/Child_int';
import Child_radio from './Components/Child';
import settings from './settings.json'; // Import the JSON data
import { useState, useEffect } from 'react';
// import Child_toggle from './Components/Child_toggle';

function App() {

    const array = []

    const [loading, setLoading] = useState(true);
    const [mapped_config, setConfigs] = useState({});

    useEffect(() => {
        fetch('/get_all_configs', { method: 'GET' })
            .then(res => res.json()).then(data => {
                let mapped_config = {};
                data.forEach(element => {
                    mapped_config[element[0]] = element[1];
                });

                setLoading(false);
                console.log(mapped_config);
                setConfigs(mapped_config);
            })
    }, []);

    return (
        <div className="app">
            <div className="app-inner">
                <Navbar />

                <div className="middle">


                    <div className='mid-top'>
                        <h2> Customize Ubuntu Configurations</h2>
                        <h3>You can modify the settings for each type of the following functionalities</h3>
                    </div>


                    {
                        loading && ("loading") ||
                        <div className='mid-mid' style={{ maxHeight: '400px', overflowY: 'auto' }}>
                            {/* //conditionally conder karna hai by using new settings.json */}
                            {settings.map((setting, index) => (
                                mapped_config[setting.id] != undefined ? (
                                    setting.value_type === "bool" ? (
                                        <Child_radio
                                            myArray={array}
                                            id={setting.id}
                                            key={index}
                                            name={setting.name}
                                            type={`Type: ${setting.type}`}
                                            description={`${setting.description}`}
                                            value_type={`Value Type: ${setting.value_type}`}
                                            schema={`Schema: ${setting.schema}`}
                                            current_value={mapped_config[setting.id]}
                                        />
                                    ) : (
                                        setting.value_type === "int" && (
                                            <Child_int
                                                myArray={array}
                                                id={setting.id}
                                                key={index}
                                                name={setting.name}
                                                type={`Type: ${setting.type}`}
                                                description={`${setting.description}`}
                                                value_type={`Value Type: ${setting.value_type}`}
                                                schema={`Schema: ${setting.schema}`}
                                                current_value={mapped_config[setting.id]}
                                            />
                                        )
                                    )
                                ) : <>man, the setting got purged {JSON.stringify(setting)}<br /></>)
                            )

                            }

                        </div>}



                </div>
                {/* <Footer /> */}

                {/* <div className='footer'>
                <button onClick={handleClick}>SUBMIT</button>
                <button>CANCEL</button>
            </div> */}


            </div>
        </div>
    );
}

export default App;
