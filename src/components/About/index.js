import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faUnity } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    return(
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>I am in unconditional love with computers and music. I possess the basic
                foundations of Software Engineering and Artificial Intelligence and I can put on a
                decent musical performance in front of an audience.
                </p>
                <p>I believe that I can create
                wonders by incorporating the always-evolving AI technology into music and
                eventually craft a one-of-a-kind software that pleases those who want to make
                music without going through much hassle.
                </p>
                <p>I am looking for either an M.Sc or a Ph.D. position to further enhance my abilities. 
                I play the electric guitar and sing in Iran Philharmonic Choir as a bass singer. 
                I'm also learning the French language by myself and, most importantly, my soft skills and vast understanding of the English
                language have helped me grasp once-in-a-lifetime opportunities, resulting in experiences that I'll forever cherish.
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color="#DD0031"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJsSquare} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faUnity} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default About