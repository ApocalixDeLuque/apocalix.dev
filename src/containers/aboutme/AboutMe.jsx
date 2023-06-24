import React from 'react'
import './aboutme.sass'

import { c, css, dbarrow, docker, figma, git, github, google, html, java, js, notion, php, react, sass, todoist } from '../../assets/icons/index';
import CustomTooltip from '../../components/customtooltip/CustomTooltip'



const TextlList = ({ fontSize = "3", placement = "top", text, tooltipText}) => {
    return (
      <CustomTooltip size={fontSize} followCursor placement={placement}
      title={
        <React.Fragment>
            <p>{tooltipText}</p>
        </React.Fragment>
      }
    >
      <div className='textlist'>
        <img src={dbarrow} alt='arrow'></img>
        <p>{text}</p>
      </div>
    </CustomTooltip>
    )
}



const IconList = ({ icon, text, opacity = "0.5" }) => {
  return (
    <div className='iconlist'>
      <img style={{opacity: opacity}} src={icon} alt='icon'></img>
      <p>{text}</p>
    </div>
  )
}



const AboutMe = () => {
  return (
    <div className='aboutme'>
      <div className='aboutme__container'>
          <div className='aboutme__container-title'>
              <h2>about me 🧐</h2>
          </div>
          <div className='aboutme__container-list'>
            <div className='aboutme__container-list_qualitys'>
              <TextlList tooltipText="at universidad de guanajuato" text="computer science student"/>
              <TextlList tooltipText="lived 8 years in usa!" text="english-spanish bilingual"/>
              <TextlList tooltipText="i love minecraft:)" text="first developed due to videogame passion"/>
              <TextlList tooltipText="self taught frontend/design" text="aim to become a fullstack dev"/>
              <TextlList tooltipText="click to see my charts!" text="music lover"/>
            </div>
            <div className='aboutme__container-list_secret'>
              <TextlList fontSize='2' placement="bottom" tooltipText="unimportant stuff" text="🤫"></TextlList>
            </div>
          </div>
      </div>
      <div className='aboutme__know'>

        <div className='aboutme__know-section'>
          <h2>languages i speak:</h2>
          <div>
          </div>
          <div className='aboutme__know-section_iconlist'>
            <IconList icon={java} text="java"/>
            <IconList icon={c} text="c"/>
            <IconList icon={html} text="html"/>
            <IconList icon={js} text="javascript"/>
            <IconList icon={css} text="css"/>
            <IconList icon={php} text="php"/>
          </div>
        </div>

        <div className='aboutme__know-section'>
          <h2>software / librarys:</h2>
          <div>
          </div>
          <div className='aboutme__know-section_iconlist'>
            <IconList icon={git} text="git"/>
            <IconList icon={docker} text="docker"/>
            <IconList icon={react} text="react"/>
            <IconList icon={sass} text="sass"/>
          </div>
        </div>

        <div className='aboutme__know-section'>
          <h2>daily tools:</h2>
          <div>
          </div>
          <div className='aboutme__know-section_iconlist'>
            <IconList opacity="1" icon={notion} text="notion"/>
            <IconList opacity="1" icon={figma} text="figma"/>
            <IconList opacity="1" icon={google} text="google workspace"/>
            <IconList opacity="1" icon={github} text="github"/>
            <IconList opacity="1" icon={todoist} text="todoist"/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutMe