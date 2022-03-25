import React from 'react';
import style from "./Skills.module.css";
import styleContainer from "../common/styles/Container.module.css";
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill
                        title={"JS"}
                        description={"JS it ol ned"}
                    />
                    <Skill
                        title={"CSS"}
                        description={"OOOOO CSS "}
                    />
                    <Skill
                        title={"React"}
                        description={"Rect it imposible sfvbdsf sfdf df d d d d d d d d d "}
                    /> <Skill
                        title={"React"}
                        description={"Rect it imposible dfdf df df d d df df dsf hj jh  hi ih i"}
                    /> <Skill
                        title={"React"}
                        description={"Rect it imposible sd df jbkhb hdi ihd osn uosn jihbd sfhi bdffji "}
                    /> <Skill
                        title={"React"}
                        description={"Rect it imposible"}
                    />
                </div>

            </div>
        </div>
    )
}

export default Skills