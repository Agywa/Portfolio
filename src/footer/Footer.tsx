import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={style.contactsContainer}>
                <h2 className={style.title}>Bondar Andrei</h2>
                <div className={style.formContainer}>
                    <div className={style.form}>1</div>
                    <div className={style.form}>22</div>
                    <div className={style.form}>3</div>
                    <div className={style.form}>4</div>
                </div>
                <span className={style.res}> All rights reserved</span>
            </div>


        </div>
    )
}
export default Footer