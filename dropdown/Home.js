import React, { useState } from "react";


const App = () => {
    const countries = [
        { country: "India", currency: "INR", president: "Modi", capital: "Delhi" },
        { country: "America", currency: "USD", president: "Biden", capital: "Washington" },
        { country: "UAE", currency: "AED", president: "Mohammed bin Zayed Al Nahyan", capital: "Dubai" },
        { country: "Russia", currency: "RUB", president: "Putin", capital: "Moscow" },
      ];
      const[selectcountry,setselectedcountry]=useState(countries[0])
      const handlechange=(e)=>{
        const select=countries.find((c)=>c.country===e.target.value)
        setselectedcountry(select)
      }
return(<div>hello
   <select value={selectcountry.country} onChange={handlechange}>
   
   {countries.map((countryObj) => (
          <option key={countryObj.country} value={countryObj.country}>
            {countryObj.country}
          </option>
        ))}

    

   </select>
   <div>
    <h3>detailes of country:{selectcountry.country}</h3>
    <p>currency:{selectcountry.currency}</p>
    <p>president:{selectcountry.president}</p>
    <p>capital:{selectcountry.capital}</p>
   </div>
       
</div>)}

export default App;






