import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Home from 'material-ui/svg-icons/action/home';                              
import Notifications from 'material-ui/svg-icons/social/notifications-none';
import Messages from 'material-ui/svg-icons/communication/mail-outline';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Flash from 'material-ui/svg-icons/image/flash-on';
import { Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import { Card, CardMedia, CardText } from 'material-ui/Card';
import More from 'material-ui/svg-icons/navigation/expand-more';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

var Birdie = require('./Birdie.png');
var Avatar = require('./Avatar.jpg');
var Barca = require('./Barca.jpg');
var Reply = require('./reply1.png')
var Retweet = require('./Retweet.png');
var Like = require('./like.png');
var Message = require('./DM.png');
var SBI = require('./SBI.jpg');
var SBItweet = require('./SBItweet.jpg');
var Mercedes = require('./Mercedes.jpg');
var OneHeart = require('./OneHeart.jpg');
var Sonam = require('./Sonam.jpg');
var Gmail = require('./gmail.png');

const style= {
    height:50, 
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center'
       
}

const button={
    borderRadius: '30px',
    fontWeight: 800,
    padding: '8px',
    border: 'black solid 0px',
    backgroundColor: '#00aced',
    position: 'absolute',
    marginLeft: 710,
    marginTop: 2,
    height: 30,
    font : 'Times New Roman',
    width:75,
    fontSize:'35px',
    cursor:'pointer'
}


const imgStyle={
    width:30,
    height:30,
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: 427,
    top: 0,
    marginLeft: 180,
    marginTop:12,
    cursor:'pointer'
}

const avatar={
    borderRadius: '50%',
     width: 40, 
     height: 40,
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    marginLeft: 630,
    marginTop: -3
}

const avatar2={
    borderRadius: '50%',
     width: 35, 
     height: 35,
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    marginLeft: 400,
    marginTop: 75
}

const avatar1={
    borderRadius: '50%',
     width: 60, 
     height: 60,
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    marginLeft: 110,
    marginTop: 135,
    "border-width": "2px", 
    "border-color" : "white",
    "border-style" : "solid"
}

const FieldStyle=
{
    marginLeft : 350,
    "border-width": "1px", 
    "border-color" : "black",
    "border-style" : "solid",
    "border-radius" : "25px",
    background : '#f4f5f7',
    width: 250 ,
    height : 30
}


const FieldStyle1=
{
    marginLeft : 70,
    marginTop : 9,
    height : 40,
    width : 490,
    "border-width": "1px", 
    "border-color" : "white",
    "border-style" : "solid",
    "border-radius" : "10px",
    background : 'white'
}

const iconStyle={
    height: 20, 
    maxWidth: 16, 
    paddingBottom: 7 
}
export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider style = {{background : "red"}} >
                <Paper style={style} zDepth = {1}>
                    <Toolbar style={style}>
                        <ToolbarGroup firstChild = 'true' lastChild = 'true'>

                            <IconButton style={{ float: 'left',marginLeft:100,position:'absolute'}}>
                            <Home color={'#66757f'} style={{ float: 'right' }} value = 'Home'/>
                            </IconButton>
                        <span style={{
                            fontSize: 12,
                            textAlign: 'left',
                            paddingLeft: 140,
                            color: '#66757f',
                            display: 'inline-block',
                            cursor: 'pointer',
                            fontWeight: 'bold'}}><a>Home</a>
                        </span>
                        <IconButton style={{ float: 'left', marginLeft: 175, position: 'absolute' }}>
                            <Flash color={'#66757f'} style={{ float: 'right' }} />
                        </IconButton>
                        <span style={{
                            fontSize: 12,
                            textAlign: 'center',
                            paddingLeft: 40,
                            color: '#66757f',
                            display: 'inline-block',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                            }}><a>Moments</a>
                        </span>
                        <IconButton style={{ float: 'left', marginLeft: 270, position: 'absolute' }}>
                            <Notifications color={'#66757f'} style={{ float: 'right' }}/>
                        </IconButton>
                        <span style={{
                            fontSize: 12,
                            textAlign: 'center',
                            paddingLeft: 40,
                            color: '#66757f',
                            display: 'inline-block',
                            cursor:'pointer',
                            fontWeight: 'bold'
                            }}><a>Notifications</a>
                        </span>
                        <IconButton style={{ float: 'left', marginLeft: 375, position: 'absolute' }}>
                            <Messages color={'#66757f'} style={{ float: 'right' }} />
                        </IconButton>
                        <span style={{
                            fontSize: 12,
                            textAlign: 'center',
                            paddingLeft: 40,
                            color: '#66757f',
                            display: 'inline-block',
                            cursor:'pointer',
                            fontWeight: 'bold'
                            }}><a>Messages</a>
                        </span>
                </ToolbarGroup>
                <img src = {Birdie} style = {imgStyle}/>
                <ToolbarGroup>
                        <input type = 'text' style = {FieldStyle} placeholder = "   Search Twitter" />
                            <a href = '/search'><input type = 'image' src = {require("./Search.png")} width = "18px" style={{marginLeft : -25}} /></a>
                            
                            <img src={Avatar} style={avatar} alt="Avatar" />
                            <button  style={button} >
                            <p  style = {{marginTop: '-5px', color: 'white', fontSize : 15 }}>Tweet</p></button>
                </ToolbarGroup>
            </Toolbar>
            </Paper>
            <Card style = {{marginTop : '10px',
   width : '270px', 
   marginLeft: '100px', 
   height: '100px',
   background : '#00aced',
   }}/>
   <div>
   <Card style = {{marginTop : '0px',
   width : '270px', 
   marginLeft: '100px', 
   height: '130px',
   background : 'white',
   }}>
             <img src={Avatar} style={avatar1} alt="Avatar" />
            <CardText >
            <strong style = {{marginLeft : '60px' , marginTop : '10px', fontSize : 20}}>Saksham Singh</strong>
            <h6 style = {{color : '#D3D3D3', marginLeft: '60px', marginTop : '2px', fontSize : 12}}>@LM10Saksham</h6>
            <table style = {{marginTop : -10}}>
            <thead>
        <tr>
            <th>Tweets</th>
            <th>Following</th>
            <th>Followers</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align = 'center' style = {{color : '#00aced', fontSize : 16, width : 30}}><strong>20</strong></td>
            <td align = 'center' style = {{color : '#00aced', width : 30, fontSize : 16}}><strong>84</strong></td>
            <td align = 'center' style = {{color : '#00aced', width : 30, fontSize : 16}}><strong>15</strong></td>
            </tr>
        </tbody>
        </table>
    </CardText>
    </Card>
    <Card style = {{marginTop : '10px',
   width : '270px', 
   marginLeft: '100px', 
   height: '550px',
   background : 'white',
   }}>
   <CardText>
   <span><strong style = {{fontSize : 20}}>Trends for you  </strong>.<a style = {{color : '#00aced', fontSize : 12}}>      Change</a></span>
   <p style = {{color : '#00aced' ,marginTop : '20px'}}><strong>#MySolutionToPollution</strong></p>
   <p style = {{color : 'grey', marginTop : '-10px'}}>4,279 Tweets</p>
   <p style = {{color : '#00aced' ,marginTop : '20px'}}><strong>#FodderScam</strong></p>
   <p style = {{color : 'grey', marginTop : '-10px'}}>#5,050 Tweets</p>
   <p style = {{color : '#00aced' ,marginTop : '20px'}}><strong>#OLXWinterDiaries</strong></p>
   <p style = {{color : 'grey', marginTop : '-10px'}}>2,977 Tweets</p>
   <p style = {{color : '#00aced' ,marginTop : '20px'}}><strong>#SwagpurKaChaudhry</strong></p>
   <p style = {{color : 'grey', marginTop : '-10px'}}>1,894 Tweets</p>
   <p style = {{color : '#00aced' ,marginTop : '20px'}}><strong>#KisanDiwas</strong></p>
   <p style = {{color : 'grey', marginTop : '-10px'}}>@INCIndia is tweeting about this</p>
   <p style = {{color : '#00aced' ,marginTop : '20px'}}><strong>#MaxYourView</strong></p>
   <p style = {{color : 'grey', marginTop : '-10px'}}>1,913 Tweets</p>
   <p style = {{color : '#00aced' ,marginTop : '20px'}}><strong>Misa Bharti</strong></p>
   <p style = {{color : '#00aced' ,marginTop : '20px'}}><strong>#GOAPUN</strong></p>
   <p style = {{color : '#00aced' ,marginTop : '20px'}}><strong>#SaturdayMotivation</strong></p>
   <p style = {{color : 'grey', marginTop : '-10px'}}>2,799 Tweets</p>
   <p style = {{color : '#00aced' ,marginTop : '20px'}}><strong>#Sawaimadhopur</strong></p>

   </CardText>
   </Card>
   </div>
   <Card style = {{marginTop : '-790px',
   width : '590px', 
   marginLeft: '380px', 
   height: '60px',
   background : '#c1ddff',
   }}> 
   
   <img src={Avatar} style={avatar2} alt="Avatar" />
   <input type = 'text' placeholder = "  Whats Happenning ?"
                            style = {FieldStyle1} />
                          
                            
   </Card>
   <Card style = {{marginTop : '2px',
   width : '590px', 
   marginLeft: '380px', 
   height: '270px',
   background : 'white',
   }}>
    <IconMenu
                iconButtonElement=
                {<IconButton style={{ float: 'right', marginLeft: 550, marginTop: -50, position: 'absolute' }} className="floatingButton"
                    backgroundColor='#66757f'>
                    <More color={'#66757f'} style={{ float: 'right' }} />
                </IconButton>} anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: 'black' }}>Copy link to Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: 'black' }}>Embed Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: 'black' }}>Mute @_BarcaEdition_</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: 'black' }}>Block @_BarcaEdition_</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#black' }}>Report Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: 'black' }}>I dont like this tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: 'black' }}>Add to new Moment</span>} />

            </IconMenu>
   <img src = {Barca} style = {{marginLeft:20, marginTop:10, borderRadius: '50%', height : 50, width : 50}}/>
   
   <p style = {{color:'#D3D3D3', marginLeft : 85, marginTop : -50}}>.@_BarcaEdition_ . 12h</p>
   
   <div style = {{marginLeft : 85}}>
   <p> My Barca-Madrid combined XI</p>
   <p> Ter Stegen </p>
   <p> Carvajal, Pique, Ramos, Alba</p>
   <p> Modric, Kroos, Busquets, Iniesta </p>
    <p> Messi, Ronaldo </p>
  <IconButton iconStyle={iconStyle} tooltip="Reply" tooltipPosition="top-center">
                    <img src= {Reply} />
                </IconButton>
                <IconButton iconStyle={iconStyle} tooltip="Retweet" tooltipPosition="top-center" >
                    <img src= {Retweet} />
                </IconButton>
                <IconButton iconStyle={iconStyle} tooltip="Like" tooltipPosition="top-center" >
                    <img src= {Like} />
                </IconButton>
                <IconButton iconStyle={iconStyle} tooltip="Direct message" tooltipPosition="top-center" >
                    <img src= {Message} />
                </IconButton>
    </div>

   </Card>
   <Card style = {{marginTop : '2px',
   width : '590px', 
   marginLeft: '380px', 
   height: '500px',
   background : 'white',
   }}>         
   <IconMenu
                iconButtonElement=
                {<IconButton style={{ float: 'right', marginLeft: 550, marginTop: -50, position: 'absolute' }} className="floatingButton"
                    backgroundColor='#66757f'>
                    <More color={'#66757f'} style={{ float: 'right' }} />
                </IconButton>} anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Copy link to Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Embed Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Mute @TheOfficialSBI</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Block @TheOfficialSBI</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Report Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Add to new Moment</span>} />

            </IconMenu>
            <img src = {SBI} style = {{marginLeft:20, marginTop:10, borderRadius: '50%', height : 50, width : 50}}/>
            <p style = {{color:'#D3D3D3', marginLeft : 85, marginTop : -50}}><a style = {{color : 'black'}} ><strong>The State Bank Of India</strong></a> @TheOfficialSBI . 20h</p>
            <div style = {{marginLeft : 85, marginRight : 30}}>
            <p>Dreaming of Studying in a Foreign University? Let's put those dreams into action!</p>
            <p> Challenge the World with SBI Global Ed-Vantage: <a href = "goo.gl/XD2x8T">goo.gl/XD2x8T</a></p>
            
            <CardMedia>
            <img src= {SBItweet} alt="SBItweet" style={{ borderRadius: 4, height: '300px' }} />
            </CardMedia>
            
            <IconButton iconStyle={iconStyle} tooltip="Reply" tooltipPosition="top-center">
                    <img src= {Reply} /> <span>19</span>
                </IconButton>
                <IconButton iconStyle={iconStyle} tooltip="Retweet" tooltipPosition="top-center" >
                    <img src= {Retweet} />
                </IconButton>
                <IconButton iconStyle={iconStyle} tooltip="Like" tooltipPosition="top-center" >
                    <img src= {Like} />
                </IconButton>
                <IconButton iconStyle={iconStyle} tooltip="Direct message" tooltipPosition="top-center" >
                    <img src= {Message} />
                </IconButton>
            </div>
            </Card>
            
   <Card style = {{marginTop : '-833px',
   width : '280px', 
   marginLeft: '980px', 
   height: '360px',
   background : 'white',
   }}>
   <CardText>
   <div><span style = {{marginTop : 1, fontSize : 19}}><strong>Who to follow</strong></span> .<span style = {{fontSize : 13, color : '#00aced'}}> Refresh</span> .<span style = {{fontSize : 13, color : '#00aced'}}> View All</span></div>
   <img src = {Mercedes} style = {{borderRadius : '50%', width : 40, height : 40, marginTop : 10, float: 'left'}} />
   <div style = {{marginTop : 10, marginLeft : 50}}><a><strong>Mercedes-Benz</strong></a><span style = {{color : 'grey', fontSize : 11}}>   @MercedesBenz</span></div>
   <button style = {{"border-style" : "solid", "border-color" : "#00aced", "border-width" : "1px", background : "white", width : 110, height : 30, marginLeft: 15, marginTop:3, "border-radius" : "20px", color : '#00aced'}}><strong>Follow</strong></button>
   <hr style = {{color : '#f7f8f9'}}/>
   <img src = {OneHeart} style = {{borderRadius : '50%', width : 40, height : 40, marginTop : 10, float: 'left'}} />
   <div style = {{marginTop : 10,  marginLeft : 50}}><a><strong>One-Heart</strong></a><span style = {{color : 'grey', fontSize : 11}}>   @Oneheartartists</span></div>
   <button style = {{"border-style" : "solid", "border-color" : "#00aced", "border-width" : "1px", background : "white", width : 110, height : 30, marginLeft: 15, marginTop:3, "border-radius" : "20px", color : '#00aced'}}><strong>Follow</strong></button>
   <hr style = {{color : '#f7f8f9'}}/>
   <img src = {Sonam} style = {{borderRadius : '50%', width : 40, height : 40, marginTop : 10, float: 'left'}} />
   <div style = {{marginTop : 10,  marginLeft : 50}}><a><strong>Sonam Kapoor</strong></a><span style = {{color : 'grey', fontSize : 11}}>   @sonamakapoor</span></div>
   <button style = {{"border-style" : "solid", "border-color" : "#00aced", "border-width" : "1px", background : "white", width : 110, height : 30, marginLeft: 15, marginTop:3, "border-radius" : "20px", color : '#00aced'}}><strong>Follow</strong></button>
   <hr style = {{color : '#f7f8f9'}}/>
   
                <img src = {Gmail} style = {{width : 30, height : 25, float : 'left', marginTop : 15}} />
         
        <span style={{ fontSize: '15px', float: 'left', marginTop: 10, color: 'black', marginLeft : 10 }}>&nbsp; <a><strong>Find people you know</strong></a></span>
          <span style={{ fontSize: '11px', float: 'left', marginTop: 5, color: 'grey', marginLeft : 20 }}>Import your Contacts from Gmail</span>
   <hr style = {{marginTop : 60, color : '#f7f8f9'}}/>
   <a style = {{fontSize : 13, color : '#00aced'}}> Connect other address books </a>
   </CardText>
   </Card>
   <Card style = {{marginTop : '10px',
   width : '280px', 
   marginLeft: '980px', 
   height: '150px',
   background : 'white',
   }}>
   <CardText>
   <p><a>@ 2017 Twitter</a> <a> About</a><a> Help Center</a></p>
   <p><a>Terms</a><a> Privacy Policy</a><a> Cookies</a></p>
   <p><a> Ads Info</a><a> Brand</a><a> Blog</a><a> Status</a><a> Apps</a></p>
   <p><a> Jobs</a><a> Marketing</a><a> Business</a><a> Developers</a></p>
   </CardText>
   </Card>
            </MuiThemeProvider>
        );
    }
}