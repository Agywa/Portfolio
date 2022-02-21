import React from "react";
import style from "./Contacts.module.css";
import styleContainer from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>My Contacts</h2>
                <form className={style.form}>
                    <div><input/></div>
                    <div><input/></div>
                    <div><textarea></textarea></div>
                    <input/>
                    <input/>
                    <textarea></textarea>

                </form>


            </div>


        </div>
    )
}

export default Contacts