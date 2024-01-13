import {NavLink} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div className={`${css.header}`}>
            <div className={css.logo}>English Tests</div>
            <div className={css.nav}>
                <NavLink to={'main'}>Main</NavLink>
                <NavLink to={'tests'}>Tests</NavLink>
            </div>
            <div className={css.switchUser}>
                <div className={css.user}>
                    <img src="https://cdn-icons-png.flaticon.com/512/848/848006.png" alt="user"/>
                    <h6>User</h6>
                </div>
            </div>
        </div>
    );
};

export {Header};