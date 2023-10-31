import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import styles from './Header.module.css';

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? styles.actual : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

export default CustomLink;
