import React, {useState} from 'react';
import './App.css'

function Tweet(props){

    const [likes, setLikes] = useState(0);
    const likeIncrement = () =>{
    setLikes(likes + 1);
  };
    return(
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <h3>{likes}</h3>
            <button onClick={likeIncrement}>Press to Like</button>
        </div>
    )
}

export default Tweet;