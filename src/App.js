import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';


function App() {
  return (
    <div className="container">

<div className="navbar">
<MenuIcon className="checkbtn" />

<label class="logo">BizAmps</label>
        <ul>
          <li><a  href="#">Expertise</a></li>
          <li><a href="#">Princing</a></li>
          <li><a href="#">Case Stories</a></li>
       </ul>

</div>
<div className="coloumn1">

       <img src="https://images.unsplash.com/photo-1497463405634-2dae368d01b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
<div className="content"></div>
  <h1>With his big hair and tight black clothes, he's known for his karate chops
     accompanied by the sound of a bullwhip.</h1>

</div>
<div className="coloumn2">
  <h1>Tables of Contents:</h1>
</div>
<div className="coloumn3">
  <div className="box">
  <ul>
    <li><span>1</span>Benchmark & Results of Account-Based Marketing</li>
    <li><span>2</span>ABM Examples vs B2B Demand Generations</li>
    <li><span>3</span>Why sales in ABM</li>
    <li><span>4</span>Sales Responsibilities</li>
    <li><span>5</span>Backend in ABM</li>
    <li><span>6</span>Steps to followed</li>
    <li><span>6</span>Pilot in ABM</li>
    <li><span>7</span>Overseas Responsibilities</li>
    <li><span>8</span>Previous year Performance</li>
    <li><span>9</span>Overseas Performance</li>
  </ul>
</div>
</div>

<div className="coloumn4">
  <h1><span>1</span>Benchmark & Results of Account-Based Marketing</h1>
</div>
<div className="coloumn5">
  <h1><span>2</span>ABM Examples vs B2B Demand Generations</h1>
</div>
<div className="coloumn6">
  <h1><span>3</span>Why sales in ABM</h1>
</div>
<div className="coloumn7">
  <h1><span>4</span>Steps to followed</h1>
</div><div className="coloumn8">
  <h1><span>5</span>Backend in ABM</h1>
</div>
<div className="coloumn9">
  <h1><span>6</span>Pilot in ABM</h1>
</div>

<div className="coloumn10">
  <h1><span>7</span>Sales Responsibilities</h1>
</div>

<div className="coloumn11">
  <h1><span>8</span>Overseas Responsibilities</h1>
</div>

<div className="coloumn12">
  <h1><span>9</span>Overseas Performance</h1>
</div>

<div class="footer">
<div className="footer-Content">
  <InstagramIcon/>
  <FacebookIcon/>
  <YouTubeIcon/>
  <TwitterIcon/>
  <div className="footr-section about">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</div>

</div>

<div className="footer-bottom">
  &copy; BizAmps.com | Abhinav singh
</div>




</div>
</div>

  )
}

export default App;
