import react from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () =>{
    return(
    <>
   <NavLink  activeClassName="Active_class" to="/">Contact</NavLink>
   <NavLink to="/about"> About</NavLink>
    </>
    );
}
export default Menu;