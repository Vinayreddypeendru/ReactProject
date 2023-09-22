import React from 'react';
import Count2 from './costom hook/count2';
import Count1 from './costom hook/count1';
import useIntihook from './customhook2';


const TemperatureStats = () => {
 const Tempratures =[4,9,25]

 const [minnum,squrerout]=useIntihook(Tempratures)
 

  return (
    <div>
      <Count1 />
      <h4>{minnum}</h4>
      <h5>{squrerout}</h5>
      
      <Count2 />
    </div>
  );
};

export default TemperatureStats;






