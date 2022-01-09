import  style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

function  Dialogs() {

    const setActive = navData => navData.isActive ? style.active : style.dialogLink;
    return (
        <div className={style.dialogs}>
            <ul className={style.dialogList}>
                <li className={style.dialogItem}>
                    <NavLink className={setActive} to="/dialogs/1">Dimych</NavLink>
                </li>
                <li className={style.dialogItem}>
                    <NavLink className={setActive} to="/dialogs/2">Andrey</NavLink>
                </li>
                <li className={style.dialogItem}>
                    <NavLink className={setActive} to="/dialogs/3">Sveta</NavLink>
                </li>
                <li className={style.dialogItem}>
                    <NavLink className={setActive} to="/dialogs/4">Sasha</NavLink>
                </li>
                <li className={style.dialogItem}>
                    <NavLink className={setActive} to="/dialogs/5">Kostya</NavLink>
                </li>
            </ul>
            <ul className={style.messageList}>
                <li className={style.messageItem}>Hi</li>
                <li className={style.messageItem}>How is your work?</li>
                <li className={style.messageItem}>Fine</li>
            </ul>
        </div>
    )
}

export default Dialogs;