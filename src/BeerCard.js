import React from 'react';
import './App.js';



function BeerCard(props) {
    // const {handleClick}= props;
    return(
        <li className= "BeerCard" style={{listStyle:"none"}}>
           <img className='photo'  src={props.image_url} alt="bottle"></img>
            <h3 className='name'>{props.name}</h3>
            <h3 className= 'date'> {props.first_brewed}</h3>
            <h4 className='tag'>{props.tagline}</h4>
            <h3 className='abv'>{props.abv}</h3>
            <p className='description'>{props.description}</p>
            <button onClick = {props.clickToLike}>Click Me</button>
       
            {/* <button className='buttonStyle' onClick ={() =>props.handleClick(props.index)}>Like Me</button> */}
           
            
        
            
        </li>
    )
}

export default BeerCard