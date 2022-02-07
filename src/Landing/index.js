import {Grid, Typography, CssBaseline, Box, styled, Button} from "@mui/material";
import HeaderBar from "../Component/Heading";
import GreenTile from "../assets/img/green_tile.svg";
import YellowTile from "../assets/img/yellow_tile.svg";
import BlackTile from "../assets/img/black_tile.svg";
import GroupTile from "../assets/img/group_tile.svg";
import TextWhat from "../assets/img/Text_What.svg";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Twiter from "../assets/img/twiter.svg";
import Instagram from "../assets/img/instagram.svg";
import Discord from "../assets/img/discord.svg";
import React, {useRef} from 'react';
import GreenOne from "../assets/img/greenNo1.svg";
import Vector from "../assets/img/vector.svg"
import YellowTwo from "../assets/img/yellowNo2.svg";
import BlackThree from "../assets/img/blackNo3.svg";
import GreenFive from "../assets/img/greenNo5.svg";
import GreenFour from "../assets/img/greenNo4.svg";
import BlackSix from "../assets/img/blackNo6.svg";
import YellowFour from "../assets/img/yellowNo4.svg";
import * as Scroll from 'react-scroll';
import MintModal from "../Component/MintModal";


const roadMaps = [
    {
        icon: GreenOne,
        text: "Creation of a community fund to be used exclusively for DAO roll out which the DAO council will facilitate"
    }, {
        icon: YellowTwo,
        text: 'Wordle NFT reveal'
    }, {
        icon: BlackThree,
        text: 'Airdrop of our utility token $WORDS'
    }, {
        icon: YellowFour,
        text: 'A focus on charity events by means of donations'
    }, {
        icon: GreenFive,
        text: 'Upcoming P2E game'
    }, {
        icon: BlackSix,
        text: 'Strategic partnerships with other NFT brands and projects'
    }];

const faqs = [
    {
        icon: GreenOne,
        title: 'What are NFTs?',
        description: 'NFT is a record stored on the blockchain that certifies that a digital asset is unique and the ownership of that asset. NFTs can also be used to track and represent the ownership and authenticity of physical assets including original artworks and creative pieces such as paintings and sculptures. NFTs Can Be Traded Freely In NFT Marketplaces, But The Value Contained Within The NFT Will Always Be Unique To The Asset Itself'
    },
    {
        icon: YellowTwo,
        title: 'What perks are associated with my wordle NFT?',
        description: 'All wordle NFT holders have access to benefits in the powerlanguage lab: one of which is the $Words token airdrop which is the utility token for our ecosystem, raffle ticket access to future assets sales, lots of giveaways and other utilities would be made clear along the journey.'
    },
    {
        icon: BlackThree,
        title: 'What can i do with my wordle NFT?',
        description: 'You are free to do anything you want with them under a non-exclusive license.'
    },
    {
        icon: GreenFour,
        title: 'Would there be a presale or whitelist?',
        description: 'No!, Mint is public which means anybody can mint.'
    },
]

let Element = Scroll.Element;


function Landing(props) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const home = useRef();
    const about = useRef();
    const roadmap = useRef();
    const team = useRef();
    const faq = useRef();
    const mintNow = () => {
        handleOpen();
    }
    return (
        <>
            <Box sx={{overflow: 'auto', pt: '70px'}}>
                <Box>
                    <CssBaseline/>
                    <HeaderBar/>
                </Box>
                <Element name="home">
                    <Box sx={{mt: 5}} ref={home}>
                        <Grid container sx={{position: 'relative'}}>
                            <Grid item xs={12} md={6}
                                  sx={{
                                      px: 2,
                                      justifyContent: 'center',
                                      display: 'inline-grid',
                                      flexDirection: 'column'
                                  }}>
                                <Box sx={{justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                                    <Typography sx={{
                                        fontWeight: 800,
                                        fontSize: {xs: "72px", md: '96px'},
                                        color: '#ECB000',
                                        lineHeight: '104px',
                                        fontFamily: 'Neue Machina'
                                    }}>WORDLE</Typography>
                                    <Typography sx={{
                                        fontWeight: 800,
                                        fontSize: {xs: "72px", md: '96px'},
                                        color: '#ECB000',
                                        lineHeight: '104px',
                                        fontFamily: 'Neue Machina'
                                    }}>NFT IS</Typography>
                                    <Typography sx={{
                                        fontWeight: 800,
                                        fontSize: {xs: "72px", md: '96px'},
                                        color: '#ECB000',
                                        lineHeight: '104px',
                                        fontFamily: 'Neue Machina'
                                    }}>LIVE</Typography>
                                </Box>
                                <Box sx={{justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                                    <Typography sx={{fontFamily: 'Poppins', fontSize: '18px', lineHeight: '32px'}}>You
                                        are
                                        nearly part of the family, ONE STEP TO GO!<br/>You can mint your own wordle
                                        below:<br/>Mint is Live.</Typography>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'row', mt: 1}}>
                                    <Button sx={{
                                        fontFamily: 'Poppins',
                                        backgroundColor: '#ECB000',
                                        color: 'black',
                                        fontSize: '16',
                                    }} className="mint_btn" onClick={mintNow}>Mint NOW</Button>

                                    <a style={{
                                        fontFamily: 'Poppins',
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginLeft: '15px',
                                        textDecorationLine: 'underline',
                                        color: '#ECB000'
                                    }}>View on Opensea</a>
                                </Box>
                            </Grid>

                            {/* 5*5 tile component */}
                            <Grid item xs={12} md={6}
                                  sx={{
                                      justifyContent: {xs: 'center', md: 'left'},
                                      display: 'flex',
                                      flexDirection: 'column'
                                  }}>
                                <Grid item sx={{
                                    justifyContent: {xs: 'center', md: 'left'},
                                    display: 'inline-grid',
                                    flexDirection: 'column',
                                    mt: 2
                                }}>
                                    <Grid container sx={{display: 'flex', flexDirection: 'row'}} spacing={1}>
                                        <Grid item><img src={BlackTile}/></Grid>
                                        <Grid item><img src={YellowTile}/></Grid>
                                        <Grid item><img src={BlackTile}/></Grid>
                                        <Grid item><img src={YellowTile}/></Grid>
                                        <Grid item><img src={BlackTile}/></Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item><img src={GreenTile}/></Grid>
                                        <Grid item><img src={BlackTile}/></Grid>
                                        <Grid item><img src={YellowTile}/></Grid>
                                        <Grid item><img src={BlackTile}/></Grid>
                                        <Grid item><img src={YellowTile}/></Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item><img src={GreenTile}/></Grid>
                                        <Grid item><img src={YellowTile}/></Grid>
                                        <Grid item><img src={BlackTile}/></Grid>
                                        <Grid item><img src={YellowTile}/></Grid>
                                        <Grid item><img src={BlackTile}/></Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item><img src={GreenTile}/></Grid>
                                        <Grid item><img src={GreenTile}/></Grid>
                                        <Grid item><img src={YellowTile}/></Grid>
                                        <Grid item><img src={YellowTile}/></Grid>
                                        <Grid item><img src={GreenTile}/></Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item><img src={GreenTile}/></Grid>
                                        <Grid item><img src={GreenTile}/></Grid>
                                        <Grid item><img src={GreenTile}/></Grid>
                                        <Grid item><img src={GreenTile}/></Grid>
                                        <Grid item><img src={GreenTile}/></Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Box sx={{
                                fontFamily: 'Poppins',
                                fontSize: 12,
                                display: 'block',
                                background: 'radial-gradient(rgb(37 37 37 / 18%),rgb(71 71 71 / 45%))',
                                width: '140px',
                                position: 'absolute',
                                padding: '15px 15px 20px 15px',
                                textAlign: 'center',
                                bottom: '35px',
                                borderRadius: '7px',
                                left: 'calc(50% - 60px)',
                                boxShadow: '5px 5px 5px 2px rgb(231 226 226 / 19%) inset'
                            }}>
                                <h1 style={{fontFamily: 'Neue Machina', margin: 0, fontSize: '24px'}}>0.04 ETH</h1>
                                MINT PRICE
                            </Box>
                            <Box sx={{
                                fontFamily: 'Poppins',
                                fontSize: 12,
                                display: 'block',
                                background: 'radial-gradient(rgb(37 37 37 / 18%),rgb(71 71 71 / 45%))',
                                width: '120px',
                                position: 'absolute',
                                padding: '15px 15px 20px 15px',
                                textAlign: 'center',
                                left: {xs: '240px', md: 'calc(50% + 340px)'},
                                borderRadius: '7px',
                                top: {xs: 'calc(50% + 75px)', md: 'calc(50% - 60px)'},
                                boxShadow: '5px 5px 5px 2px rgb(231 226 226 / 19%) inset'
                            }}>
                                <h1 style={{fontFamily: 'Neue Machina', fontSize: '28px', margin: 0}}>0.00</h1>
                                TOTAL MINTED
                            </Box>
                        </Grid>
                    </Box>
                </Element>
                {/* Second Section */}
                <Element name="about">
                    <Box sx={{display: "flex", backgroundColor: '#1B1B1B', mt: 5}} ref={about}>
                        <Grid container>
                            <Grid item xs={12} md={6}
                                  sx={{justifyContent: 'center', display: 'inline-grid', flexDirection: 'column',}}>
                                <Box sx={{
                                    justifyContent: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    mt: {xs: 3, md: 0}
                                }}>
                                    <img src={GroupTile}></img>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6} sx={{
                                justifyContent: 'center',
                                display: 'inline-grid',
                                flexDirection: 'column',
                                mt: 5,
                                mb: 5
                            }}>
                                <Box sx={{
                                    justifyContent: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    mx: '20px'
                                }}>
                                    <img src={TextWhat} style={{width: '300px'}}></img>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Poppins',
                                            fontWeight: 400,
                                            fontSize: '18px',
                                            lineHeight: '40px'
                                        }}>
                                        Wordles are a collection of 6,999 unique and generative nfts based on
                                        the viral video game that took the world by storm, Wordle. Wordles are
                                        randomly generated from the actual game with classification based
                                        on completion of the game. Wordle NFTs live on the ethereum
                                        blockchain and grants you access to members only benefits. Utility
                                        would be unlocked progressively through the community.
                                        Each Wordle NFT can be staked to earn $WORDS which is the utility
                                        token for our upcoming P2E game where players compete against
                                        each other to win daily prizes and rewards.</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Element>
                {/* Third Section */}
                <Element name="roadmap">
                    <Box ref={roadmap}>
                        <Grid container>

                            <Grid item xs={12} sx={{
                                justifyContent: 'center',
                                display: 'inline-grid',
                                flexDirection: 'column',
                                mt: 10,
                                mb: 10
                            }}>
                                <Typography sx={{
                                    fontFamily: 'Neue Machina',
                                    fontWeight: 800,
                                    fontSize: '40px',
                                    lineHeight: '40px'
                                }}>Roadmap</Typography>
                            </Grid>
                            {roadMaps.map((item, index) => {
                                return <Grid item xs={12} key={index}>
                                    <Grid container sx={{px: 2}}>
                                        <Grid item md={4} sx={{
                                            justifyContent: 'center',
                                            display: 'inline-grid',
                                            flexDirection: 'column',
                                            mt: 3
                                        }}>
                                            <img src={item.icon}></img>
                                            {index != 5 && (<Box sx={{
                                                justifyContent: 'center',
                                                display: 'inline-grid',
                                                flexDirection: 'column',
                                                mt: 1
                                            }}>
                                                <img src={Vector}></img>
                                            </Box>)}
                                        </Grid>
                                        <Grid item md={8} sx={{
                                            flex: {xs: 1},
                                            justifyContent: 'left',
                                            display: 'inline-grid',
                                            flexDirection: 'column',
                                            mt: 3,
                                            px: 2
                                        }}>
                                            <Typography sx={{
                                                fontFamily: 'Poppins',
                                                fontWeight: 500,
                                                fontSize: {sx: '20px', md: '24px'},
                                                lineHeight: '32px'
                                            }}>{item.text}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            })}
                        </Grid>
                    </Box>
                </Element>

                {/* Fouth Section */}
                <Element name="team">
                    <Box ref={team}>
                        <Grid container>
                            <Grid item xs={12} sx={{
                                textAlign: 'center',
                                justifyContent: 'center',
                                display: 'inline-grid',
                                flexDirection: 'column',
                                mt: 10,
                                px: 2
                            }}>
                                <Typography sx={{
                                    fontFamily: 'Neue Machina',
                                    fontWeight: 800,
                                    fontSize: '40px',
                                    lineHeight: '40px'
                                }}>Our Team</Typography>
                                <Typography sx={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 400,
                                    fontSize: '18px',
                                    lineHeight: '64px',
                                    mt: 3
                                }}>Wordle NFT presented by the Powerlanguage Lab.</Typography>
                                <Typography
                                    sx={{fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', lineHeight: '64px'}}>A
                                    team set out to build an empire on the blockchain.</Typography>
                                <Typography
                                    sx={{fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', lineHeight: '64px'}}>We
                                    are a team of developers and professionals with deliverse interests and all of us
                                    are
                                    passionate about</Typography>
                                <Typography
                                    sx={{fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', lineHeight: '64px'}}>blockchain
                                    technology and its applications.</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Element>
                {/* fifth Section */}
                <Element name="faq">
                    <Box ref={faq}>
                        <Grid container>
                            <Grid item xs={12} sx={{
                                textAlign: 'center',
                                justifyContent: 'center',
                                display: 'inline-grid',
                                flexDirection: 'column',
                                mt: 10
                            }}>
                                <Typography sx={{
                                    fontFamily: 'Neue Machina',
                                    fontWeight: 800,
                                    fontSize: '40px',
                                    lineHeight: '40px'
                                }}>FAQ</Typography>
                            </Grid>
                            {faqs.map((item, index) => {
                                return <Grid item xs={12} key={index}>
                                    <Grid container sx={{px: 2}}>
                                        <Grid item md={2} sx={{
                                            display: {xs: 'none', md: 'inline-grid'},
                                            justifyContent: 'right',
                                            flexDirection: 'column',
                                            mt: 2
                                        }}>
                                            <img src={item.icon}></img>
                                        </Grid>
                                        <Grid item md={9} sx={{
                                            flex: 1,
                                            justifyContent: 'left',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            pl: 2,
                                            mt: 2
                                        }}>
                                            <Accordion sx={{backgroundColor: 'dark'}}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon/>}
                                                    aria-controls="panel1a-content"
                                                >
                                                    <Typography sx={{
                                                        fontFamily: 'Poppins',
                                                        fontWeight: 600,
                                                        fontSize: '24px',
                                                        lineHeight: '32px',
                                                        mt: 2
                                                    }}>{item.title}</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography sx={{
                                                        fontFamily: 'Poppins',
                                                        fontWeight: 400,
                                                        fontSize: '18px',
                                                        lineHeight: '32px'
                                                    }}>
                                                        {item.description}
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            })}
                        </Grid>
                    </Box>
                </Element>
                {/* Section Fifth end */}
                {/* Section  End */}
                <Box sx={{marginBottom: 10}}>
                    <Grid container sx={{justifyContent: 'center', mt: 10}} spacing={5}>
                        <Grid item sx={{
                            textAlign: 'center',
                            justifyContent: 'center',
                            display: 'inline-flex',
                            flexDirection: 'column',
                        }}>
                            <img src={Twiter}></img>
                        </Grid>
                        <Grid item sx={{
                            textAlign: 'center',
                            justifyContent: 'center',
                            display: 'inline-flex',
                            flexDirection: 'column',
                        }}>
                            <img src={Instagram}></img>
                        </Grid>
                        <Grid item sx={{
                            textAlign: 'center',
                            justifyContent: 'center',
                            display: 'inline-flex',
                            flexDirection: 'column',
                        }}>
                            <img src={Discord}></img>
                        </Grid>
                    </Grid>
                    <Grid container sx={{display: {xs: 'flex', md: 'none'}, justifyContent: 'center', mt: 3, px: 3}}>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            textAlign: 'center',
                            fontWeight: 400,
                            fontSize: '18px',
                            lineHeight: '16px'
                        }}>
                            ©2022 Powerlanguage Lab.</Typography>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            textAlign: 'center',
                            pt: 3,
                            fontWeight: 400,
                            fontSize: '18px',
                            lineHeight: '16px'
                        }}>
                            All rights reserved.</Typography>

                    </Grid>
                    <Grid container sx={{display: {xs: 'none', md: 'flex'}, justifyContent: 'center', mt: 3, px: 3}}>
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            textAlign: 'center',
                            fontWeight: 400,
                            fontSize: '18px',
                            lineHeight: '16px'
                        }}>
                            ©2022 Powerlanguage Lab. All rights reserved.</Typography>
                    </Grid>
                    <MintModal open={open} onOpened={() => {
                        handleOpen()
                    }} onClosed={() => {
                        handleClose()
                    }}/>
                </Box>

            </Box>
        </>
    );
}

export default Landing;
