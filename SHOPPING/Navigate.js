import { NavLink } from "react-router-dom";
import { Image } from "./Products";

 
const Navbar=()=>{
    const Imagestyle={
        width:'50px',
    }
    return(
        <div>

            <nav>
                <NavLink to="/"><img src={Image} alt="Home" style={Imagestyle} /></NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/laptops">Laptops</NavLink>
                <NavLink to='/cart'>Cart</NavLink>
            </nav>
        </div>
    )
}
export default Navbar;