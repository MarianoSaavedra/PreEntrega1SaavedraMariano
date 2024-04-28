import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import logo from '../assets/logo.jpg';

const NavBar = () => {
	return (
		<div className='header'>
			<div className='headerLogo'>
				<Link to={'/'}>
					<img src={logo} alt='Random Store' className='logo' />
				</Link>
			</div>
			<ul className='headerUl'>
				<NavLink to={'/category/smartphones'} className='navUlLink'>
					Smartphones
				</NavLink>
				<NavLink to={'/category/fragrances'} className='navUlLink'>
					Fragrances
				</NavLink>
				<NavLink to={'/category/groceries'} className='navUlLink'>
					Groceries
				</NavLink>
				<NavLink to={'/category/laptops'} className='navUlLink'>
					Laptops
				</NavLink>
				<NavLink to={'/category/skincare'} className='navUlLink'>
					Skincare
				</NavLink>
				<NavLink to={'/category/home-decoration'} className='navUlLink'>
					Home-Decoration
				</NavLink>
			</ul>
			<CartWidget />
		</div>
	);
};

export default NavBar;
