import React from 'react';

export default function DogInfo(props) {
  return (
    <div className="centerAll">
      <h1>{props.name}</h1>
      <div className="container">
        <img src={props.img} alt="dog" id="hover" width={300} />
        <lottie-player
          src="https://assets4.lottiefiles.com/packages/lf20_tnjb8ios.json"
          background="transparent"
          speed="1"
          style={{ width: '300px', height: '300px' }}
          loop
          hover
        ></lottie-player>
      </div>
      <p>{props.discribe}</p>
    </div>
  );
}
