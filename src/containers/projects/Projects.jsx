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
                <div className='projects__button' onClick={() => window.open(pageURL, "_blank")}>
                    <img src={webpage} alt='webpage'></img> 
                    {/* TODO add link to pageURL */}
                    <p>see live</p>
                </div>
                <div className='projects__button' onClick={() => window.open(githubURL, "_blank")}>
                    <img src={github} alt='github'></img>
                    {/* TODO add link to githubURL */}
                    <p>github</p>
                </div>
            </div>
        </div>
    )
}

const Projects = React.forwardRef((props, ref) => {
  return (
    <div className='projects__container' id={props.id} ref={ref}>
        <div className='projects__container-title'>
            <h2>projects 💻</h2>
        </div>
        <div className='projects__container-content'>
            <Project pageURL={"https://arteneural.vercel.app/"} githubURL={"https://github.com/ApocalixDeLuque/arteneural"} title="arteneural" preview={page3}/>
            <Project pageURL={"https://apocalix-dev.vercel.app/"} githubURL={"https://github.com/ApocalixDeLuque/apocalix.dev"} title="portfolio" preview={page2}/>
            <Project pageURL={"https://arteneural.vercel.app/"} githubURL={"https://github.com/ApocalixDeLuque/react-testing"} title="image gallery" preview={page1}/>
            <Project pageURL={"https://login-system123.vercel.app/"} githubURL={"https://github.com/ApocalixDeLuque/react-testing"} title="login system" preview={page4}/>
        </div>
    </div>
  )
});

export default Projects