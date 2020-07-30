import * as React from 'react';
import { Link, useHistory } from "react-router-dom";
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";


function Header({backButton}) {
    const history =useHistory();
        return (
                <div className="header">
                    {backButton ? (
                        <IconButton onClick={() => history.replace(backButton)}>
                            <ArrowBackIosIcon fontSize="large" className="header__icon"/>
                        </IconButton>
                    ): (
                        <IconButton>
                            <PersonIcon className="header__icon" fontSize="large"/>
                        </IconButton>
                    )}
                    <Link to="/">
                        <WhatshotIcon className="tinder" fontSize="large"/>
                    </Link>
                    <Link to="/chat">
                        <IconButton>
                            <ForumIcon className="header__icon" fontSize="large"/>
                        </IconButton>
                    </Link>
                </div>
        );
};

export default Header;