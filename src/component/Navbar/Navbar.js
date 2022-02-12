import React , { useState } from 'react';
import style from './Navbar.module.css'
import { FaHome } from 'react-icons/fa';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { IoLogoBitcoin } from 'react-icons/io';
import { SiMarketo , SiVault } from 'react-icons/si';
import { GrTransaction } from 'react-icons/gr';
import { MdForum } from 'react-icons/md';

const Navbar = () => {
    const [ check , setCheck ] = useState ( false )
    const checkHandler = () => {
        setCheck ( ! check )
    }
    return (
        <div className={style.container}>

            <div className={ style.navigation }>
                <ul>
                    <li className={ check ? style.active : style.list } onClick={ checkHandler }>
                        <a href="#">
                            <span className={ style.icon }><FaHome/></span>
                            <span className={ style.title }>Dashboard</span>
                        </a>
                    </li>
                    <li className={ style.list }>
                        <a href="#">
                            <span className={ style.icon }><BsGrid3X3Gap/></span>
                            <span className={ style.title }>Vote</span>
                        </a>
                    </li>
                    <li className={ style.list }>
                        <a href="#">
                            <span className={ style.icon }><IoLogoBitcoin/></span>
                            <span className={ style.title }>XVS</span>
                        </a>
                    </li>
                    <li className={ style.list }>
                        <a href="#">
                            <span className={ style.icon }><SiMarketo/></span>
                            <span className={ style.title }>Market</span>
                        </a>
                    </li>
                    <li className={ style.list }>
                        <a href="#">
                            <span className={ style.icon }><SiVault/></span>
                            <span className={ style.title }>Vault</span>
                        </a>
                    </li>
                    <li className={ style.list }>
                        <a href="#">
                            <span className={ style.icon }><GrTransaction/></span>
                            <span className={ style.title }>Transactions</span>
                        </a>
                    </li>
                    <li className={ style.list }>
                        <a href="#">
                            <span className={ style.icon }><IoLogoBitcoin/></span>
                            <span className={ style.title }>XVS Prediction</span>
                        </a>
                    </li>
                    <li className={ style.list }>
                        <a href="#">
                            <span className={ style.icon }><MdForum/></span>
                            <span className={ style.title }>Forum</span>
                        </a>
                    </li>
                </ul>
            </div>

                    <button className={ style.btn }>
                        Connect
                    </button>

        </div>
    );
};

export default Navbar;