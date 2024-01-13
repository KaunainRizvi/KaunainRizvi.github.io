import { useContext } from 'react';
import '../styles/projects.css';
import { ThemeContext } from '../context/ThemeContext'
import { GoProject } from 'react-icons/go'
import { FaEye } from 'react-icons/fa'
import { SiChakraui, SiNodedotjs, SiGithub, SiHtml5, SiCss3, SiJavascript, SiReact, SiReactrouter, SiHeroku, SiRedux, SiVercel, SiExpress, SiMongodb, SiGit, SiNetlify } from 'react-icons/si';
import blueMercury from '../assets/Screenshot (667).png';


export const Projects = () => {
    const { light } = useContext(ThemeContext);

    return <div id='projects' style={{ '--bglightproject': light ? "#edf2f8" : "#0a192f", '--plight': light ? 'black' : 'white', '--namelight': light ? "#dc143c" : "#64ffda", '--rolelight': light ? "white" : "#152235" }}>
        <p>Featured <span>Projects </span> <span><GoProject /></span></p>
        {/* Blue Mercury */}
        <div className='projectCard'>
            <div className='prCardImg'>
                <img src={blueMercury} />
            </div>
            <div className='prCardContent'>
                <p>BlueMercury.com - Clone</p>
                <p>It's a Group Project. This project is about building a frontend clone of
                    BlueMercury.com, which is an e-commerce website providing cosmetic items and other services
                    like in-store Spa, Massage etc. Users can signup, login and browse the attractive homepage of
                    the website. It is built using React, ChakraUI, CSS and React Router.
                    <p><span>Tech Stack: </span>React, ChakraUI, CSS and React-Router.</p>
                </p>
                <div className='prCardTs'>
                    <SiReact style={{ color: "#53c1de" }} className='tsIc' />
                    <SiChakraui style={{ color: "#60c9ca", background: "white", borderRadius: "50%" }} className='tsIc' />
                    <SiCss3 style={{ color: "#1c88c7" }} className='tsIc' />
                    <SiReactrouter style={{ color: "tomato" }} className='tsIc' />
                    <SiRedux style={{ color: "purple" }} className='tsIc' />
                    <SiNodedotjs style={{ color: "green" }} className='tsIc' />
                    <SiExpress style={{ color: "black" }} className='tsIc' />
                    <SiMongodb style={{ color: "green" }} className='tsIc' />
                </div>
                <div style={{ '--icBg': light ? "transparent" : "#0a192f" }}>
                    <a style={{ textDecoration: "none" }} href='https://bluemercury-krizvi.vercel.app/' target='_blank'><button><FaEye className='tsBIc' /> Go live</button></a>
                    <a style={{ textDecoration: "none" }} href='https://github.com/RahulDobariya/bluemercury_clone' target='_blank'><button> <SiGithub className='tsBIc' /> View code</button></a>
                </div>
            </div>
        </div>

        {/* Bewakoof */}
        <div className='projectCard'>
            <div className='prCardImg'>
                <img src="https://kaunainrizviii-portfolio-mca.vercel.app/static/media/Hirely.ce240cd479df0467b5ee.png" />
            </div>
            <div className='prCardContent'>
                <p>Bewakoof.com - Clone</p>
                <p>This website is a clone of Bewakoof.com which is an e-commerce website
                    dealing in a variuos types of items with a specialization in Gen-Z Fashion. Users can signup, login, explore products, add to cart, checkout and much more
                    in this project. It is built using pure HTML, CSS and Vanilla JavaScript only. Easy Authentication Functionality is implemented.
                    <p><span>Tech Stack: </span>HTML, CSS and JavaScript.</p>
                </p>
                <div className='prCardTs'>
                    <SiHtml5 style={{ color: "#ef662a" }} className='tsIc' />
                    <SiCss3 style={{ color: "#1c88c7" }} className='tsIc' />
                    <SiJavascript style={{ color: "#f7df1e", background: "black" }} className='tsIc' />
                </div>
                <div style={{ '--icBg': light ? "transparent" : "#0a192f" }}>
                    <a style={{ textDecoration: "none" }} href='https://bewakoof-clone-team-ptweb11.netlify.app/' target='_blank'><button><FaEye className='tsBIc' /> Go live</button></a>
                    <a style={{ textDecoration: "none" }} href='https://github.com/VimalrajVR12/Bewkoof' target='_blank'><button> <SiGithub className='tsBIc' /> View code</button></a>
                </div>
            </div>
        </div>

        {/* Let It Bee */}
        <div className='projectCard'>
            <div className='prCardImg'>
                <img src='https://kaunainrizviii-portfolio-mca.vercel.app/static/media/Formify.9a502cf4d5e0adc912e6.png' />
            </div>
            <div className='prCardContent'>
                <p>Let It Bee - Original Idea</p>
                <p>This website is An E-commerce platform to buy Natural Organic Honey Online. which is one of India's finest e-commerce website
                    for world's best quality Honey. Users can signup, login, explore products, add to cart, apply discount and much more
                    in this project. It is built using pure HTML, CSS and Vanilla JavaScript only. Authentication is implemented using localStorage.
                    <p><span>Tech Stack: </span>HTML, CSS and JavaScript.</p>
                </p>
                <div className='prCardTs'>
                    <SiHtml5 style={{ color: "#ef662a" }} className='tsIc' />
                    <SiCss3 style={{ color: "#1c88c7" }} className='tsIc' />
                    <SiJavascript style={{ color: "#f7df1e", background: "black" }} className='tsIc' />
                    <SiReact style={{ color: "#53c1de" }} className='tsIc' />
                    <SiChakraui style={{ color: "#60c9ca", background: "white", borderRadius: "50%" }} className='tsIc' />
                    <SiCss3 style={{ color: "#1c88c7" }} className='tsIc' />
                    <SiReactrouter style={{ color: "tomato" }} className='tsIc' />
                </div>
                <div style={{ '--icBg': light ? "transparent" : "#0a192f" }}>
                    <a style={{ textDecoration: "none" }} href='https://honeysotre.vercel.app/' target='_blank'><button><FaEye className='tsBIc' /> Go live</button></a>
                    <a style={{ textDecoration: "none" }} href='https://github.com/AkashSaha747/Honey_store' target='_blank'><button> <SiGithub className='tsBIc' /> View code</button></a>
                </div>
            </div>
        </div>
    </div>
}