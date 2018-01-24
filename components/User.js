import React from 'react';

const user = props => (
  <div>
    <h1>{props.name}</h1>
    <p>Age {props.age}</p>
    <style jsx>
      {`
        div {
          border: 1px solid #ccc;
          box-shadow: 3px 0 1px #aaa;
          padding: 15px;
          text-align: center;
        }
      `}
    </style>
  </div>
);

export default user;
