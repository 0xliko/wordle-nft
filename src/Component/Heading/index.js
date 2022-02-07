import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";

import Twiter from "../../assets/img/twiter.svg";
import Instagram from "../../assets/img/instagram.svg";
import Discord from "../../assets/img/discord.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import {Link, Events, scrollSpy} from 'react-scroll'
import {useEffect, useState} from "react";

function HeaderBar(props) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(() => {
        Events.scrollEvent.register('begin', function (to, element) {
            // console.log('begin', arguments);
        });

        Events.scrollEvent.register('end', function (to, element) {
            // console.log('end', arguments);
            handleClose();
        });
        scrollSpy.update();
        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        }
    }, []);
    return (
        <Box>
            <AppBar position="fixed" style={{alignItems: "flex-end", fontFamily: 'Poppins', zIndex: 1}}>
                <Toolbar>
                    <Box sx={{display: {xs: "none", sm: "block"}}}>
                        <Grid container columnSpacing={5} className="menu-items">
                            <Grid item>

                                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-110}
                                      duration={500}>
                                    <Button color="inherit">
                                        HOME
                                    </Button>
                                </Link>

                            </Grid>
                            <Grid item>

                                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50}
                                      duration={500}>
                                    <Button color="inherit">
                                        ABOUT
                                    </Button>
                                </Link>

                            </Grid>
                            <Grid item>

                                <Link activeClass="active" to="roadmap" spy={true} smooth={true} offset={-50}
                                      duration={500}>
                                    <Button color="inherit">ROADMAP</Button>
                                </Link>

                            </Grid>
                            <Grid item>

                                <Link activeClass="active" to="team" spy={true} smooth={true} offset={-40}
                                      duration={500}>
                                    <Button color="inherit">TEAM</Button>
                                </Link>

                            </Grid>
                            <Grid item>

                                <Link activeClass="active" to="faq" spy={true} smooth={true} offset={-40} duration={500}>
                                    <Button color="inherit">FAQ</Button>
                                </Link>

                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{display: {xs: "none", sm: "block"}, ml: 5, mt: 1}}>
                        <Grid container columnSpacing={5}>
                            <Grid item>
                                <img src={Twiter}/>
                            </Grid>
                            <Grid item>
                                <img src={Instagram}/>
                            </Grid>
                            <Grid item>
                                <img src={Discord}/>
                            </Grid>
                        </Grid>
                    </Box>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ml: 2, display: {xs: "block", sm: "none"}}}
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            "aria-labelledby": "basic-button",
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-110} duration={500}>
                                HOME
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500}>
                                ABOUT
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link activeClass="active" to="roadmap" spy={true} smooth={true} offset={-50} duration={500}>
                                ROADMAP
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link activeClass="active" to="team" spy={true} smooth={true} offset={-40} duration={500}>
                                TEAM
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link activeClass="active" to="faq" spy={true} smooth={true} offset={-40} duration={500}>
                                FAQ
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <img src={Twiter}/>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <img src={Instagram}/>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <img src={Discord}/>
                        </MenuItem>
                    </Menu>


                </Toolbar>
            </AppBar>
        </Box>

    );
}

export default HeaderBar;
