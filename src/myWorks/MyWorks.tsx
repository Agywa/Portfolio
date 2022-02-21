import React from 'react';
import style from "./MyWorks.module.css";
import styleContainer from "../common/styles/Container.module.css";
import Work from "./work/Work";


const MyWorks = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>My Works</h2>
                <div className={style.work}>
                    <Work title={"Social network"} description={"bla bla bla"}/>
                    <Work title={"Todolist"} description={"bla bla bla"}/>

                </div>

            </div>
        </div>
    )
}

export default MyWorks