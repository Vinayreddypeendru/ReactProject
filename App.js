import React from "react";

 function 

function App () {
 const members = [{firstName:"vinay" , lastName:"redd" , surName:"pendru",  },
{firstName:"vijay", lastName:"rao" , surName:"gandra"},] ;
  
 

 return (
  <div>
    <ul>
      {members.map((eachItem, index) => {
        const { firstName, lastName, surName,  } = eachItem;
        return (
          <li key={index}>
            <div>
              my firstName <strong>{firstName}</strong>
            </div>
            <div>
              my lastName <strong> {lastName}</strong>
            </div>
            <div>
              my surName <strong>{surName}</strong>
            </div>

          </li>
        );
      })}
    </ul>
  </div>
);
};


//export default App;
