import React from 'react';
import imageIcon from '../../assets/image/Number.jpg'
import style from './Main.module.css'
const Main = () => {
    return (
        <div>
            <div className={style.mainContainer}>
                <h3>Dashboard</h3>
                <div className={style.primaryContainer}>

                <div className={style.leftContainer}>
                    <div className={style.leftItemContainer}>
                        <img src={ imageIcon } alt="axe"/>
                        <p>0 XVS</p>
                    </div>
                    <div className={style.leftItemContainer}>
                        <img src={ imageIcon } alt="axe"/>
                        <p>0 XVS</p>
                    </div>
                    <div className={style.leftItemContainertwo}>
                        <h1>0 XVS</h1>
                        <p>available</p>

                        <p>Borrow</p>
                    </div>
                </div>
                <div>
                    <div className={style.rightcontainer}>
                        <p>amount <span>0$</span></p>

                        <p>Number <span>0</span></p>

                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Main;