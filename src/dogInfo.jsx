import React from 'react';

export default function DogInfo(props) {
  return (
    <div className="centerAll">
      <h1>{props.name}</h1>
      <div className="container">
        <img src={props.img} alt="dog" id="hover" width={300} />
      </div>
      <p>{props.discribe}</p>
    </div>
  );
}
