import React from 'react';
import style from "../Dialogs.module.css";


type DialogsPropsType = {}

const DialogItem = (props:DialogsPropsType) => {
    //let userDialogs = props.dataUsers.map(user => <Dialog id={user.id} name={user.name} img={user.img}/>)
    return (
            <div className={style.dialogsItems}>
                {/*{userDialogs}*/}
                <ul>
                    <li>Slava</li>
                    <li>Sveta</li>
                    <li>Maks</li>
                    <li>Roma</li>
                </ul>
            </div>
    );
};

/*function Dialog(props: any) {
    return (
        <div className={style.dialog}>
            <NavLink to={"/dialog/" + props.id}>
                {props.name}
            </NavLink>
        </div>

    )
}*/

export default DialogItem;