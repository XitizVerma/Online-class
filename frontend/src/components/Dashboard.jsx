import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

function Dashboard() {
  return (
    <div>
      
      <center><h1 style={{color:'dodgerblue'}}>Upcoming Hackathons</h1></center>
      <div style={{border:'2px solid cyan',width:'55%',margin:'1rem auto',padding:'1.2rem',color:'white',backgroundColor:'black',borderRadius:'20px'}}>
        <Image src="/Images/pb1.png" wrapped /> 
        <h2>YeAH -  Yet an Another Hackathon</h2>
        <p>'YEAH', YEt Another Hackathon is a 6 day hackathon organized by Point Blank and ACM-W DSCE Chapter. 
          This is an opportunity to showcase your technical skills among students across the country! Ideate, create, 
          and pitch the ideas you always wanted to build and get them validated by peers and experts from the industry.
           Our goal is to create an environment for students to network, learn, develop, and create amazing stuff.
Compete and take home attractive prizes and goodie</p>
<h2><a href="https://fest.dsce.in">Visit the website</a></h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <Card style={{height:'250px',marginTop:'1%'}}>
          <Image src='/Images/aws.png' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Digital Innovation Hackathon</Card.Header>
            <a target="_blank" href="https://www.hackerearth.com/challenges/hackathon/aws-india-digital-innovation-hackathon/">AWS</a>
          </Card.Content>
        </Card>

        <Card style={{height:'250px'}}>
          <Image src='/Images/tcs.png' wrapped ui={false} />
          <Card.Content>
            <Card.Header>TCS Fullstack Developer Hiring Challenge</Card.Header>
            <a href="https://assessment.hackerearth.com/challenges/hiring/tcs-fullstack-developer-hiring-challenge-level-1/">TCS challenge</a>
          </Card.Content>
        </Card>

        <Card style={{height:'250px'}}>
          <Image src='/Images/juspay.png' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Juspay React Developer Hiring challenge</Card.Header>
            <a href="https://assessment.hackerearth.com/challenges/hiring/juspay-react-developer-hiring-challenge/">Juspay challenge</a>
          </Card.Content>
        </Card>

        <Card style={{height:'250px'}}>
          <Image src='/Images/java.png' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Java Backend Hiring</Card.Header>
            <a href="https://assessment.hackerearth.com/challenges/hiring/mphasis-java-backend-developer-hiring-challenge/">Mphasis</a>
          </Card.Content>
        </Card>
      </div>
      <br/>

      <center><h2 ><a style={{margin:'3rem',backgroundColor:'blue',color:'white',fontSize:'3rem'}} target="_blank" href="https://clist.by/">click here for more hackathons</a></h2></center>
      <br/>
      <div >
        <img src="/Images/eve.jpg" style={{width:'40%',borderRadius:'30px'}}/>
      </div>

      <br/>

      <div>
        <img src="/Images/quiz.jpg" style={{borderRadius:'25px',width:'60%'}}/>
        <br/>
       <h1> <a target="_blank" href="https://enr-online-exam.herokuapp.com/">Click here to start the quiz</a></h1>
      </div>
    </div>
  );
}

export default Dashboard;
