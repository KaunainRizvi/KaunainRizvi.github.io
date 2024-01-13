import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { BiDownload } from 'react-icons/bi';
import '../styles/home.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import TagCloud from 'TagCloud'

const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'Redux', 'React Router', 'React',
    'TypeScript', 'GIT', 'MongoDB',
    'Express', 'NodeJs', 'Mongoose',
    'ChakraUI', 'Netlify', 'Jest', 'Babel'
];

export const Home = () => {
    const { light } = useContext(ThemeContext);

    useEffect(() => {
        TagCloud('.content', myTags, {
            radius: 200,
            maxSpeed: 'fast',
            initSpeed: 'fast',
            direction: 135,
            keep: true
        })
    }, [])

    return <div id='home' style={{ '--bglight': light ? "#edf2f8" : "#0a192f" }}>
        
        <div id='homecontent' style={{ '--plight': light ? 'black' : 'white', '--namelight': light ? "#dc143c" : "#64ffda", '--rolelight': light ? "" : "#dc143c" }}>
            <p>Hi, I am</p>
            <p>Kaunain Rizvi.</p>
            <p>I'm a <span>&nbsp;Software Developer.</span></p>
            <p>As a final year MCA student and Full Stack Developer, I specialize in developing scalable web applications. Proficient in JavaScript & ReactJs, I seamlessly integrate backend functionalities with responsive frontend components, demonstrating a strong grasp of software development principles. A collaborative team player with excellent problem-solving skills, I'm eager to contribute academic insights and practical skills to innovative projects. My keen interest in data structures and algorithms enhances my overall proficiency in Full Stack Development.</p>
            <div className='homeCont'>
                <a href='https://drive.usercontent.google.com/download?id=1NXy8L6nKJXybes4WASSvpkjpwRUmz1DM&export=download&authuser=0&confirm=t&uuid=d8823cf9-5cdb-455b-b77b-047ea8bdfa51&at=APZUnTVYR2eWoR68z5RSBBHupcYe:1705078621426' style={{ textDecoration: "none" }} download='Kaunain_Rizvi_Resume'>
                    <button>Resume <i>
                        <BiDownload />
                    </i></button>
                </a>
                <div className='homeIcCont' style={{ '--icColor': light ? "#0a192f" : "#edf2f8" }}>
                    <div>
                        <a href='https://www.linkedin.com/in/kaunain-rizvi' target='_blank'>
                            <BsLinkedin className='homeIc' />
                        </a>
                    </div>
                    <div>
                        <a href='https://github.com/KaunainRizvi' target='_blank'>
                            <BsGithub className='homeIc' />
                        </a>
                    </div>
                    <div>
                        <a href='mailto:krizvibusiness@gmail.com' >
                            <SiGmail className='homeIc' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="content" style={{ order: 1, '--color': light ? "#dc143c" : "#64ffda" }}>

            </div>
        </div>
    </div>
}