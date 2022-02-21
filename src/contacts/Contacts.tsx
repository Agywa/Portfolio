import React from "react";
import style from "./Contacts.module.css";
import styleContainer from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>My Contacts</h2>
                <form className={style.form}>
                    <input  placeholder="Enter Your email"/>
                    <input  placeholder="Enter Your phone"/>
                    <textarea  placeholder="Enter Your message"></textarea>
                </form>

                <button>Send</button>

            </div>


        </div>
    )
}

export default Contacts