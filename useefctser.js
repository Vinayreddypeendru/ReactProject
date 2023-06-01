import React, { useState , useEffect } from "react";
import "./style.css"
const   URL ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const Final = () =>{
    const[drinksData,setDrinksData] = useState([]);
       const[searchTerm, setSearchTerm] = useState("");
        const [loading, setLoading] = useState(false);
        
      
        const fetchDrink = async (apiURL) => {
          setLoading(true);
         
          try {
            const response = await fetch(apiURL);
            const { drinks } = await response.json();
            setDrinksData(drinks);
            setLoading(false);
          
            
          } catch (error) {
            console.log(error);
            setLoading(false);
           
          }
        };
      
        useEffect(() => {
         const correctURL=`${URL}${searchTerm}`
          fetchDrink(correctURL);
        }, [searchTerm]);
      
        return (
          <div>
            <form>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="search something new..."
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
               
              />
            </form>
      
            <hr />
           (
              <ul className="cocktail-data">
                {drinksData.map((eachDrink) => {
                  const { idDrink, strDrink, strDrinkThumb } = eachDrink;
                  return (
                    <li key={idDrink}>
                      <div>
                        <img src={strDrinkThumb} alt={strDrink} />
                      </div>
                      <div className="text">
                        <h3>{strDrink}</h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      };
        
export default Final;