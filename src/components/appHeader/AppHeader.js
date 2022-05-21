import { NavLink, Link } from 'react-router-dom';

import './appHeader.scss';
import paths from '../../pages/pathes';

const AppHeader = () => {
	return (
		<header className="app__header">
			<h1 className="app__title">
				<Link to={paths.mainPage}>
					<span>Marvel</span> information portal
				</Link>
			</h1>

			<nav className="app__menu">
				<ul>
					<li>
						<NavLink
							end
							style={({ isActive }) => ({
								color: isActive ? '#9F0013' : null,
							})}
							to={paths.mainPage}
						>
							Characters
						</NavLink>
					</li>
					/
					<li>
						<NavLink
							style={({ isActive }) => ({
								color: isActive ? '#9F0013' : null,
							})}
							to={paths.comicPage}
						>
							Comics
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default AppHeader;
