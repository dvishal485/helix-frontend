import React from 'react'
import './style.scss'
import GppGoodIcon from '@mui/icons-material/GppGood';
import GppBadIcon from '@mui/icons-material/GppBad';


const Child = (props) => {

    const handleClick = (currId, val) => 
    {
        console.log(`Clicked radio button with id ${currId} and value ${val}`);

        props.myArray[currId] = val;
    
        console.log(props.myArray)
      };
    
    
  return (

    <div className='child'>
    <hr id="hr1" />
    <h3>{props.name}</h3>
    <h5>{props.description}</h5>

    <form>
        <label>

        <input
            type="radio"
            name="radioGroup"
            onClick={() => handleClick(props.id, 1)} // Call handleClick with id=props.id and value=1
          />
          <GppGoodIcon className='col1' />

        <h4 id='option'>Enable {props.name}</h4>
        </label>    

        <br />

        <label>
          <input
            type="radio"
            name="radioGroup"
            onClick={() => handleClick(props.id, 0)} // Call handleClick with id=props.id and value=0
          />
          <GppBadIcon className='col2' />
        <h4 id='option'>Disable {props.name}</h4>
        </label>
    </form>
    </div>
  )
}

export default Child;