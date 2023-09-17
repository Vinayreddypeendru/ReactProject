import React from 'react'
import incrementLogic from './Hoclogic';
 const Clickcomp= (props) => {
  return (
    <div>
        <button onClick={props.increment}>clicked{props.count}</button>
    </div>
  )
}
export default incrementLogic(Clickcomp);
