import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './education'
import Experience from './experience.js'
import Skills from './skills'
import logo from '../assets/mason.jpg'


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={ logo }
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Mason Cable</h2>
            <h4 style={{color: 'grey'}}>Full Stack web developer</h4>
            {/* <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/> */}
            {/* <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p> */}
            <h5>Phone</h5>
            <p>(702) 635-2122</p>
            <h5>Email</h5>
            <p>masoncablelsc@gmail.com</p>
            <h5>Web</h5>
            <a  style={{color: '#000'}} href="https://shielded-crag-63275.herokuapp.com" target='_blank'><p>masoncable.dev</p></a>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            
            <Education
              startYear={ "June 2018" }
              endYear={ "September 2018" }
              schoolName={"Punch Code"}
              schoolDescription={`Punch Code was a very fast paced code school; we would started out by learing basic HTML5, CSS3, and JavScript. 
              after we had a better understsanding of dom-manipulation and API functionality, we moved on to frameworks such as React.js. During this we learned how to manage the backend with technologies such as express.js and SQL. } `}
               />
               {/* <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="My 2nd University"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  /> */}
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
              <Experience
              startYear={2019}
              endYear={'Present'}
              jobName="Freelance Web Developer"
              jobDescription="‣ Build Full Stack web appplications for clients 
                              ‣ Deploy and host websites for clients
                              ‣ Maintain a line of communication with client to assure the success of a project"
              />
            <Experience
              startYear={2018}
              endYear={2019}
              jobName="ETL Success Engineer"
              jobDescription="‣ Worked directly with clients to design and implement database workflows 
                              ‣ Wrote SQL Queries and REST API Calls 
                              ‣ Created and updated software documentation and tutorials"
              />
              <Experience
                startYear={2018}
                endYear={2019}
                jobName="Web Developer (Contract) "
                jobDescription="     ‣ Worked with a team of developers to build a new admin page for a website
                              ‣ Used Vue.js and Node.js to build a fullstack website
                              ‣ Deployed resuable code to a git repository "
                />
              <Experience
                startYear={2015}
                endYear={2018}
                jobName="Longevity Sports Center"
                jobDescription="     ‣ Helped manage adult soccer leagues
                              ‣ Coached co-ed children ages ranging from 18 months to 14 years soccer.
                              ‣ Led summer and spring camps. "
                />
                
              <hr style={{borderTop: '3px solid #e22947'}} />
     
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume