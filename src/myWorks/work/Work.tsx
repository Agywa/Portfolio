import React from "react"
import style from "./Work.module.css"


type WorkPropsType = {
    title: string
    description: string
}

const Work = (props: WorkPropsType) => {
    return (
        <div className={style.work}>
            <div className={style.img}>
                <div > <button>look</button></div>

            </div>

            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    )
}

export default Work