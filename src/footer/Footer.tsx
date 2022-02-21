import React from "react";
import style from "./Footer.module.css";
import styleContainer from "../common/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Bondar Andrei</h2>
                <div className={style.form}></div>

            </div>

        </div>
    )
}
export default Footer