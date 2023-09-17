import React from 'react'
import incrementLogic from './Hoclogic';
 const Hovercomp= (props) => {
  return (
    <div>
       <h3 onMouseEnter={props.increment}>hover{props.count}</h3>
    </div>
  )
}
export default incrementLogic( Hovercomp);
