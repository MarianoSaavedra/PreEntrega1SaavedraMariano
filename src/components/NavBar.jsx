import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../assets/logo.jpg';

const NavBar = () => (
	<div className='header'>
		<NavLink to={'/'}>
			<img src={logo} alt='Random Store' className='logo' />
		</NavLink>
		<ul className='navUl'>
			<NavLink to={'/category/smartphones'} className='navUlLink'>
				Smartphones
			</NavLink>
			<NavLink to={'/category/fragrances'} className='navUlLink'>
				Fragrances
			</NavLink>
			<NavLink to={'/category/groceries'} className='navUlLink'>
				Groceries
			</NavLink>
		</ul>
		<CartWidget />
	</div>
);

export default NavBar;
