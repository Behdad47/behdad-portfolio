import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_p1jfoce',
                'template_gtp5c9i',
                refForm.current,
                'foEvkq4CRRz4yuN64'
            )
            .then(
                () => {
                    alert('Message sent successfully!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message. Please try again!')
                }
            )
    }


    return (
        <> 
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','M','e']}
                    idx={15}
                    />
                </h1>
                <p>
                I am looking for either an M.Sc or a Ph.D. position to further enhance my abilities. 
                I play the electric guitar and sing in Iran Philharmonic Choir as a bass singer. 
                I'm also learning the French language by myself and, most importantly, my soft skills and vast understanding of the English
                language have helped me grasp once-in-a-lifetime opportunities, resulting in experiences that I'll forever cherish.
                </p>
                <p>
                Don't hesitate to contact me using the form below. I'm always open to 
                positions both in music and programming. 
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required />
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Contact