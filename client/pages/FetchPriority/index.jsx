import React from 'react';

export default () => {
  return (
    <div>
      1
      <img src="http://127.0.0.1:3000/v3/long" alt="" />
      <img src="http://127.0.0.1:3000/v3/short" alt="" fetchPriority="low"/>
    </div>
  )
}