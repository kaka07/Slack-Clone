import React from 'react'
import './Header.css'
import {Avatar} from "@material-ui/core"
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                {/*Avatars for logged in user*/}
                <Avatar className="header__avatar" alt='Jatin Sethi' src=''/>
                {/*Time Icon*/}
                <AccessTimeIcon/>
            </div>
            <div className="header__Search">
                {/*Search Icon*/}
                <SearchIcon/>
                {/*Input*/}
                <input placeholder="Search Clever Programmer"/>
            </div>
            <div className="header__right">
                {/*Help icon*/}
                <HelpOutlineIcon/>
            </div>
        </div>
    )
}

export default Header
