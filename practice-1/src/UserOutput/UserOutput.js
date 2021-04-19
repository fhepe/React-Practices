import React from 'react';

const userOutput = (props) => {
  
  const outputstyle = {
    backgroundColor: '#ccc',
    width: '60%',
    padding: '16px',
    margin: '16px',
    border: '2px solid black',
    textAlign: 'center',

  }

  return (
    <div style={outputstyle}>
        <p >Username: {props.username}</p>
        <p>Observações</p>
    </div>
  )
};

export default userOutput;