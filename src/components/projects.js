import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'
import Fft from '../assets/fft.jpeg'
import lyricFinder from '../assets/lyricfinder.png'
import newWeather from '../assets/newWeather.png'
import cardValidate from '../assets/cardValidate.png'


class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 }
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className='d-flex flex-wrap'>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${Fft}) center / cover`}} >Food For Thought</CardTitle>
            <CardText >
              Full-stack application designed to help meal centers and restaurants coordinate meal donations more effectively. The app helps restaurants manage their donations for tax record keeping purposes and gives meal centers quick access to food while offering navigation assistance with the use of a mobile app.
            </CardText>
            <CardActions border >
              {/* <Button colored>GitHub</Button> */}
              <a href='https://github.com/Keen12321/Food-For-Thought' target="_blank"><Button colored>GitHub</Button></a>
              {/* <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button> */}
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${lyricFinder}) center / cover`}} >Lyric Finder</CardTitle>
            <CardText>
              An app that finds song lyrics using React and the Musixmatch API. Other technologies used were Bootstrap4, Axios, and FontAwesome
            </CardText>
            <CardActions border>
              <a href="https://github.com/MasonCable/LyricFinder" target="_blank"><Button colored>GitHub</Button></a>
              <a href="https://lyric-finder-mason-c.herokuapp.com/" target="_blank"><Button colored style={{margin:"auto"}}>Website</Button></a>

              
              {/* <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: ` url(${newWeather}) center / cover`}} >Weather application</CardTitle>
            <CardText>
              With this application, I used the open-weather-map api to build an application that allows the user to search the weather in their given area. 
            </CardText>
            <CardActions border>
              <a href="https://github.com/MasonCable/weather-application" target="_blank"><Button colored>GitHub</Button></a>
              <a href="https://powerful-reaches-20005.herokuapp.com" target="_blank"><Button colored style={{margin:"auto"}}>Website</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: ` url(${cardValidate}) center / cover`}} ></CardTitle>
            <CardText>
              This is a very simple application that validates credit cards in real time, while you type in the first4 digits of your card, the app checks those inputs against card-validator's api, if the card is real the info can be sent through, if not the card will reset. 
            </CardText>
            <CardActions border>
              <a href="https://github.com/MasonCable/cardvalidator" target="_blank"><Button colored>GitHub</Button></a>
              <a href="https://card-validate.herokuapp.com/" target="_blank"><Button colored style={{margin:"auto"}}>Website</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is VueJs</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is React Native</h1></div>
      )
    } 
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          {/* <Tab>Angular</Tab> */}
          <Tab>VueJS</Tab>
          <Tab>React Native</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Projects