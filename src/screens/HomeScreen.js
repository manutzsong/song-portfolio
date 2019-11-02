
import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';

import Item from '../components/Item';
import NavBar from '../components/Navbar';
import LoadingIndicator from '../components/LoadingIndicator';
import '../App.css';

import MeImage from '../assets/me.jpg';

import BGImage from '../assets/bg4.jpg';
import Avatar from '@material-ui/core/Avatar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Tag from '../components/Tag';

import Divider from '@material-ui/core/Divider';
import ProjectJSON from '../components/ProjectJSON';
import Modal from '../components/Modal';

import Fade from 'react-reveal/Fade';
import HeadShake from 'react-reveal/HeadShake';

import Gallery from "react-photo-gallery";
import { photos } from "../components/PhotoGal";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:false,
      selectedProject:null,
      selectedPic:null,

      pictureClicked:null,
      pictureModalStatus:false,
    }
  }

  componentDidMount() {
    this.selectProject("foodlib");
  }

  selectProject = async(project) => {
      try {
        console.log(project);
        await this.setState({selectedProject:project, selectedPic:[] });
        ProjectJSON[this.state.selectedProject].pics.forEach( (each,idx) => {
            let imgEach = require(`../assets/projects/${this.state.selectedProject}/${each}.png`);
            let selectedPicThis = this.state.selectedPic;
            selectedPicThis[idx] = imgEach;
            this.setState({selectedPic : selectedPicThis });
        });
        console.log(this.state.selectedPic);
      }
      catch(err) {

      }
    
  }


  renderProject = () => {
    let mappedProject = Object.keys(ProjectJSON).map( (key,index) => {
        return <h6 key={index} onClick={() => {this.selectProject(key) } } className="text-right">{ProjectJSON[key].caption}</h6>
    });
    return mappedProject;
  }

  makeId = (length) => {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 pictureClick = (url) => {
     console.log(url);
    this.setState({pictureClicked:url, pictureModalStatus:true},() => {console.log(this.state)});
 }


  handleClose = () => {
    this.setState({pictureModalStatus:false});
  };

  renderImagesProject = () => {
    
      if(this.state.selectedPic) {
            let gridItem = this.state.selectedPic.map(each => {
                return <GridListTile key={each} className="p-2">
                <img src={each} onClick={() => {this.pictureClick(each)}} />
            </GridListTile>
            });
            
            return <GridList cellHeight={160} className="grid-list" cols={3}>{gridItem}</GridList>;
        }
  }
  renderDrawer = () => {
      if(this.state.selectedPic) {
        return <Modal pic={this.state.pictureClicked} handleClose={this.handleClose} status={this.state.pictureModal} />
      }
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingIndicator />
    }

    return (
        <div className="bg-dark">
            <div className="bg d-flex flex-md-row flex-column justify-content-md-around justify-content-center align-items-center">
                
                <div className="">
                    
                </div>
                <div className="d-flex flex-column align-items-end">
                    <Fade right big cascade>
                        <p className="text-white m-0">Portfolio and Travel gallery</p>
                        <h1 className="text-white m-0 font-weight-bold" style={{fontSize:"5rem"}}>Song</h1>
                    </Fade>
                </div>
            </div>
            
            <div className="d-flex align-items-center flex-column m-5">
                <Fade bottom big>
                    <h1 className="text-white font-weight-bold text-monospace" style={{fontSize:"500%"}}>PURIN</h1>
                    <h1 className="text-white font-weight-bold text-monospace" style={{fontSize:"500%"}}>KOETTIP</h1>
                </Fade>
            </div>

            <div className="d-flex flex-md-row flex-column justify-content-md-around justify-content-center align-items-center">

                <div className="d-flex flex-column align-items-center pb-md-0 pb-5">
                    <Fade left>
                        <Avatar alt="Remy Sharp" src={MeImage} className="m-2 avatar"/>    
                    </Fade>
                </div>
                <div className="text-capitalize">
                    <Fade right>
                        <h4 className="text-muted"> +66 83 488 6522 <span className="badge badge-pill badge-info" style={{fontSize:"60%"}}>10.00 - 20.00</span></h4>
                        <h4 className="text-white"> MANUTZSONG@GMAIL.COM</h4>
                        <h4 className="text-muted"> Lomklao, Rad Klabang, Bangkok.</h4>
                    </Fade>
                </div>
                
            </div>
            
            <Divider letiant="middle" className="my-5"/>

            <div className="d-flex justify-content-around flex-column flex-md-row">
                <div className="d-flex flex-column align-items-center">
                    <Fade left>
                        <h2 className="text-muted">High School</h2>
                        <h4 className="text-white">Lasalle Chotiravi Nakhon Sawan</h4>
                    </Fade>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <Fade right>
                        <h2 className="text-muted">Undergraduate</h2>
                        <h4 className="text-white">Assumption University</h4>
                        <h5 className="text-muted">Bachelor degree in Business administration</h5>
                    </Fade>
                </div>
            </div>


            <Divider letiant="middle" className="my-5"/>

            <div className="d-flex justify-content-center">
                <Fade bottom>
                    <h4 className="text-muted" style={{fontSize:"3rem"}}>Skills</h4>
                </Fade>
            </div>

            <div className="pt-5 px-4 row justify-content-center">
                <HeadShake>
                    <Tag skill="React" bg="bg-info" />
                    <Tag skill="React Native" bg="bg-info" />
                    <Tag skill="AngularJs" bg="bg-info" />
                    <Tag skill="IONIC" bg="bg-info" />
                    <Tag skill="VueJs" bg="bg-info" />
                    <Tag skill="NodeJs" bg="bg-info" />
                    <Tag skill="ExpressJs" bg="bg-info" />
                    <Tag skill="PHP" bg="bg-info" />
                    <Tag skill="C#" bg="bg-info" />
                    <Tag skill="Python" bg="bg-info" />
                    <Tag skill="Nuxt" bg="bg-info" />
                    <Tag skill="Firebase" bg="bg-info" />
                    <Tag skill="Dialog Flow" bg="bg-info" />
                    <Tag skill="Linux" bg="bg-info" />
                    <Tag skill="MySQL" bg="bg-info" />
                    <Tag skill="MsSQL" bg="bg-info" />
                    <Tag skill="Cloud VPS" bg="bg-info" />
                </HeadShake>
            </div>

            <Divider letiant="middle" className="my-5"/>

            <div className="d-flex justify-content-center">
                <Fade bottom>
                <h4 className="text-muted" style={{fontSize:"3rem"}}>Past Projects</h4>
                </Fade>
            </div>

            <div className="d-flex justify-content-center flex-column flex-md-row">
                <div className="d-flex flex-column align-items-center">
                    <div className="text-white">
                        <Fade left>
                            {this.renderProject()}
                        </Fade>
                    </div>
                </div>
                <div className="d-flex col-md-6 col-12 flex-wrap overflow-hidden justify-content-around">
                    {this.renderImagesProject()}
                    <Modal pic={this.state.pictureClicked} handleClose={this.handleClose} status={this.state.pictureModalStatus} />
                </div>
            </div>

            <Divider letiant="middle" className="my-5"/>
            



<Gallery photos={photos} direction={"column"} />

            
        </div>
    );
  }
}

export default App;