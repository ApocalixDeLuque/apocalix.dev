import React from 'react'
import './projects.sass'
import webpage from "../../assets/icons/web.png"
import github from "../../assets/icons/github.png"
import page1 from "../../assets/page1.jpg"
import page2 from "../../assets/page2.jpg"
import page3 from "../../assets/page3.jpg"
import page4 from "../../assets/page4.jpg"

const Project = ({title, preview, pageURL, githubURL}) => {
    return (
        <div className='projects__container-content_page'>
            <h2>{title}</h2>
            {/*
                TODO on hover, lower opacity of image and show text over image saying 'visit site'
            */}
            <img src={preview} alt='project'></img>
            <div className='projects__container-content_page-buttons'>
                <div className='projects__button'>
                    <img src={webpage} alt='webpage'></img> 
                    {/* TODO add link to pageURL */}
                    <p>see live</p>
                </div>
                <div className='projects__button'>
                    <img src={github} alt='github'></img>
                    {/* TODO add link to githubURL */}
                    <p>github</p> 
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
  return (
    <div className='projects__container'>
        <div className='projects__container-title'>
            <h2>projects 💻</h2>
        </div>
        <div className='projects__container-content'>
            <Project title="arteneural" preview={page1}/>
            <Project title="portfolio" preview={page2}/>
            <Project title="image gallery" preview={page3}/>
            <Project title="login system" preview={page4}/>
        </div>
    </div>
  )
}

export default Projects