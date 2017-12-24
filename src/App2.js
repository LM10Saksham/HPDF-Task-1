import React from 'react';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Home from 'material-ui/svg-icons/action/home';                               //Yet to change to original home icons
import Notifications from 'material-ui/svg-icons/social/notifications-none';
import Messages from 'material-ui/svg-icons/communication/mail-outline';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Flash from 'material-ui/svg-icons/image/flash-on';
import { Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import { Card, CardMedia, CardText } from 'material-ui/Card';
import More from 'material-ui/svg-icons/navigation/expand-more';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Background from './back.png';
import Background2 from './back2.png';
import Dots from 'material-ui/svg-icons/navigation/more-vert'

var Birdie = require('./Birdie.png');
var Avatar = require('./Avatar.jpg');

var Reply = require('./reply1.png')
var Retweet = require('./Retweet.png');
var Like = require('./like.png');
var Message = require('./DM.png');

var Nandan = require('./Nandan.jpeg');
var Aadhaar = require('./Aadhaar.jpg');
var Rita = require('./Rita.jpg');
var Jadeja = require('./Jadeja.jpg');
var Modi = require('./Modi.jpg');
var Gmail = require('./gmail.png');

const style= {
    height:60, 
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
    width:40,
    height:40,
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: 427,
    top: 0,
    marginLeft: 190,
    marginTop:12,
    cursor:'pointer'
}

const avatar={
    borderRadius: '50%',
     width: 45, 
     height: 45,
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    marginLeft: 630,
    marginTop: -3
}

const FieldStyle=
{
    marginLeft : 350,
    "border-width": "1px", 
    "border-color" : "black",
    "border-style" : "solid",
    "border-radius" : "25px",
    background : '#f4f5f7',
    height : 30,
    width : 250
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
                        <input type = 'text' style = {FieldStyle} defaultValue = "  aadhaar" />
                            <input type = 'image' src = {require("./Search.png")} width = "18px" style={{marginLeft : -25}} />
                            <img src={Avatar} style={avatar} alt="Avatar" />
                            <button  style={button}>
                            <p  style = {{marginTop: '-5px', color: 'white', fontSize : 15 }}>Tweet</p></button>
                </ToolbarGroup>
            </Toolbar>
            </Paper>
            <Paper style = {{height : 60, background : '#00aced', marginTop:-33}}>
            <h2 style = {{fontSize : 40, color : 'white', marginLeft : 100, marginTop : 34}}>aadhaar</h2>
            </Paper>
            <Paper style = {{height : 50}}>
                        <span style={{
                            fontSize: 12,
                            textAlign: 'left',
                            paddingLeft: 140,
                            color: '#66757f',
                            display: 'inline-block',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                        	marginTop : 25}}><a>Top</a>
                        </span>
                        <span style={{
                            fontSize: 12,
                            textAlign: 'center',
                            paddingLeft: 40,
                            color: '#66757f',
                            display: 'inline-block',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                            }}><a>Latest</a>
                        </span>
                        <span style={{
                            fontSize: 12,
                            textAlign: 'center',
                            paddingLeft: 40,
                            color: '#66757f',
                            display: 'inline-block',
                            cursor:'pointer',
                            fontWeight: 'bold'
                            }}><a>People</a>
                        </span>
                        <span style={{
                            fontSize: 12,
                            textAlign: 'center',
                            paddingLeft: 40,
                            color: '#66757f',
                            display: 'inline-block',
                            cursor:'pointer',
                            fontWeight: 'bold'
                            }}><a>Photos</a>
                        </span>
                        <span style={{
                            fontSize: 12,
                            textAlign: 'center',
                            paddingLeft: 40,
                            color: '#66757f',
                            display: 'inline-block',
                            cursor:'pointer',
                            fontWeight: 'bold'
                            }}><a>Videos</a>
                        </span>
                        <span style={{
                            fontSize: 12,
                            textAlign: 'center',
                            paddingLeft: 40,
                            color: '#66757f',
                            display: 'inline-block',
                            cursor:'pointer',
                            fontWeight: 'bold'
                            }}><a>News</a>
                        </span>
                        <span style={{
                            fontSize: 12,
                            textAlign: 'center',
                            paddingLeft: 40,
                            color: '#66757f',
                            display: 'inline-block',
                            cursor:'pointer',
                            fontWeight: 'bold'
                            }}><a>Broadcasts</a>
                        </span>
             <button style = {{"border-style" : "solid", "border-color" : "#00aced", "border-width" : "1px", background : "white", width : 120, height : 30, marginLeft: 420, marginTop:3, "border-radius" : "20px", color : '#00aced'}}><strong>Follow Search</strong></button>
            <IconMenu
                iconButtonElement=
                {<IconButton style={{ float: 'right', marginLeft: 50, marginTop: -25, position: 'absolute' }} className="floatingButton"
                    backgroundColor='#66757f'>
                    <Dots color={'#66757f'} style={{ float: 'right' }} />
                </IconButton>} anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
                <MenuItem primaryText={<div><p style={{ fontSize: '14px', color: 'black' }}>Search Settings</p><p style = {{color : 'grey', fontSize : 11, marginTop : -30}}>Hiding Sensitive Content</p></div>} />
                <MenuItem primaryText={<span style={{ fontSize: '14px', color: 'black' }}>Embed Tweet</span>} />
                
            </IconMenu>
            </Paper>
            <Card style = {{marginLeft : 100, height : 60, width: 325, marginTop : 20}}>
            <CardText>
            <span style = {{marginTop:0}}><strong style = {{fontSize : 20}}>Search Filters</strong></span><span style = {{fontSize : 13, color : '#00aced', marginLeft : 10}}><a>Show</a></span>
            </CardText>
            </Card> 
            <Card style = {{marginLeft : 100, height : 250, width : 325, marginTop : 15}}>
            <CardText>
            <h2>Related Searches</h2>
            <p style = {{color:'#00aced'}}><a><strong>pv sindhu</strong></a></p>
            <p style = {{color:'#00aced'}}><a><strong>#soniagandhi</strong></a></p>
            <p style = {{color:'#00aced'}}><a><strong>#rajasthan</strong></a></p>
            <p style = {{color:'#00aced'}}><a><strong>#amarnath</strong></a></p>
            <p style = {{color:'#00aced'}}><a><strong>jbl and sunburn</strong></a></p>
            </CardText>
            </Card>
    <Card style = {{marginTop : '20px',
   width : '325px', 
   marginLeft: '100px', 
   height: '350px',
   background : 'white',
   }}>
   <CardText>
   <div><span style = {{marginTop : 1, fontSize : 19}}><strong>Who to follow</strong></span> .<span style = {{fontSize : 13, color : '#00aced'}}> Refresh</span> .<span style = {{fontSize : 13, color : '#00aced'}}> View All</span></div>
   <img src = {Nandan} style = {{borderRadius : '50%', width : 40, height : 40, marginTop : 10, float: 'left'}} />
   <div style = {{marginTop : 10}}><a style = {{marginLeft : 13}}><strong>Nandan Nilekani</strong></a><span style = {{color : 'grey', fontSize : 11}}>   @NandanNilekani</span></div>
   <button style = {{"border-style" : "solid", "border-color" : "#00aced", "border-width" : "1px", background : "white", width : 80, height : 30, marginLeft: 15, marginTop:3, "border-radius" : "20px", color : '#00aced'}}><strong>Follow</strong></button>
   <hr/>
   <img src = {Aadhaar} style = {{borderRadius : '50%', width : 40, height : 40, marginTop : 10, float: 'left'}} />
   <div style = {{marginTop : 10}}><a style = {{marginLeft : 13}}><strong>Aadhaar</strong></a><span style = {{color : 'grey', fontSize : 11}}>   @UIDAI</span></div>
   <button style = {{"border-style" : "solid", "border-color" : "#00aced", "border-width" : "1px", background : "white", width : 80, height : 30, marginLeft: 15, marginTop:3, "border-radius" : "20px", color : '#00aced'}}><strong>Follow</strong></button>
   <hr/>
   <img src = {Rita} style = {{borderRadius : '50%', width : 40, height : 40, marginTop : 10, float: 'left'}} />
   <div style = {{marginTop : 10}}><a style = {{marginLeft : 13}}><strong>Rita Banerjee</strong></a><span style = {{color : 'grey', fontSize : 11}}>   @Rita_Banerjee</span></div>
   <button style = {{"border-style" : "solid", "border-color" : "#00aced", "border-width" : "1px", background : "white", width : 80, height : 30, marginLeft: 15, marginTop:3, "border-radius" : "20px", color : '#00aced'}}><strong>Follow</strong></button>
   <hr/>
   
             <img src = {Gmail} style = {{width : 30, height : 25, float : 'left'}} />
        <span style={{ fontSize: '15px', float: 'left', marginTop: 10, color: 'black', marginLeft : 10 }}>&nbsp; <a><strong>Find people you know</strong></a></span>
        <span style={{ fontSize: '11px', float: 'left', marginTop: 5, color: 'grey', marginLeft : 50}}>Import your Contacts from Gmail</span>
   <hr style = {{marginTop : 60, color : '#f7f8f9'}}/>
   <a style = {{fontSize : 13, color : '#00aced'}}> Connect other address books </a>
   </CardText>
   </Card>
   <p style = {{fontSize : 15, color : 'grey', marginLeft : 110}}><a>© 2017 Twitter</a><a> About</a><a> Help</a><a> Center</a><a> Terms</a></p>
   <p style = {{fontSize : 15, color : 'grey', marginLeft : 110}}><a>Privacy Policy</a><a>      Cookies</a><a>      Ads Info</a></p>
   
       <Card style = {{marginTop : '-775px',
   width : '525px', 
   marginLeft: '445px', 
   height: '230px',
   background : 'white',
   }}>
   <CardText>
   <h1 style = {{marginTop : 50, marginLeft : 20}}>Stay Informed about : aadhaar</h1>
   <p style = {{color : 'grey', marginLeft : 20}}>Top tweets from this topic will appear on your Timeline</p>
       <button style = {{"border-style" : "solid", "border-color" : "#00aced", "border-width" : "1px", background : "white", width : 120, height : 30, marginLeft: 20, marginTop:3, "border-radius" : "20px", color : '#00aced'}}><strong>Follow Search</strong></button>
   </CardText>
   </Card>
   <CardText style= {{marginLeft : 450}}>
   <h2>People</h2>
   </CardText>
   <Card style = {{marginTop : '-20px',
   width : '257.5px', 
   marginLeft: '445px', 
   height: '90px',
   backgroundImage : "url(" + Background + ")",
   }}>
   </Card>
   <Card style = {{marginTop : '0px',
   width : '257.5px', 
   marginLeft: '445px', 
   height: '190px',
   background : 'white',
   }}>
   <CardText>
      <button style = {{"border-style" : "solid", "border-color" : "#00aced", "border-width" : "1px", background : "white", width : 80, height : 30, marginLeft: 125, marginTop: '-300px', "border-radius" : "20px", color : '#00aced'}}><strong>Follow</strong></button>
   	<h2>Nandan Nilekani</h2>
   	<div><p style = {{color : 'grey'}}> @NandanNilekani</p></div>
   	<p>Co-founder of <a style = {{color : '#00aced'}}>@Infosys</a>. Worked on <a style = {{color : '#00aced'}}>#Aadhaar</a>. Co-author of <a style = {{color : '#00aced'}}>@RebootingIndia</a>. Author of ...</p> 
   </CardText>
   </Card>
   <img src = {Nandan} style = {{borderRadius : '50%', width : 80, height : 80, marginTop : -270, float: 'left', marginLeft : 130}} />
   <Card style = {{marginTop : '-280px',
   width : '257.5px', 
   marginLeft: '712.5px', 
   height: '90px',
   background : 'white',
   backgroundImage : "url(" + Background2 + ")",
   }}>
   </Card>
   <Card style = {{marginTop : '0px',
   width : '257.5px', 
   marginLeft: '712.5px', 
   height: '190px',
 	 }}>
	<CardText>
	 <img src = {Aadhaar} style = {{borderRadius : '50%', width : 80, height : 80, marginTop : -270, float: 'left', marginLeft : -8}} />
	<button style = {{"border-style" : "solid", "border-color" : "#00aced", "border-width" : "1px", background : "white", width : 80, height : 30, marginLeft: 125, marginTop: '-300px', "border-radius" : "20px", color : '#00aced'}}><strong>Follow</strong></button>
	<h2>Aadhaar</h2>
   	<div><p style = {{color : 'grey'}}> @UIDAI</p></div>
	<p>Official Twitter account of the Unique Identification Authority of India. RTs are not endorsements.</p>
	</CardText> 	
   </Card>
   <Card style = {{
   	marginTop : '20px',
   width : '525px', 
   marginLeft: '445px', 
   height: '450px',
}}>
<IconMenu
                iconButtonElement=
                {<IconButton style={{ float: 'right', marginLeft: 470, marginTop: -40, position: 'absolute' }} className="floatingButton"
                    backgroundColor='#66757f'>
                    <More color={'#66757f'} style={{ float: 'right' }} />
                </IconButton>} anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            >
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Copy link to Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Embed Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Mute @SirJadeja</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Block @SirJadeja</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Report Tweet</span>} />
                <MenuItem primaryText={<span style={{ fontSize: '11px', color: '#657786' }}>Add to new Moment</span>} />

            </IconMenu>
            <img src = {Jadeja} style = {{marginLeft:20, marginTop:10, borderRadius: '50%', height : 50, width : 50}}/>
            <p style = {{color:'#D3D3D3', marginLeft : 85, marginTop : -50}}><a style = {{color : 'black'}} ><strong>Sir Ravendra Jadeja</strong></a> @SirJadeja . 13h</p>
            <div style = {{marginLeft : 85, marginRight : 30}}>
            <p>Meanwhile waiting for OLA after <a style = {{color : '#00aced'}}>#VirushkaReception</a></p>
           <CardMedia>
            <img src= {Modi} alt="Modi" style={{ borderRadius: 4, height: '300px' }} />
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
   </MuiThemeProvider>
        );
    }
}