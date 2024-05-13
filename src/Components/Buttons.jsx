import React from 'react';

function Button({ name, onClick , active}) {
  return (
    <button className={active && 'active'} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
