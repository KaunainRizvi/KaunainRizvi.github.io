import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { GoTriangleRight } from 'react-icons/go';
import myImg from '../assets/myImg.png';
import '../styles/about.css';

export const About = () => {
    const { light } = useContext(ThemeContext);

    return (
        <div id='about' style={{ '--bglightabout': light ? "white" : "#152235", '--plight': light ? 'black' : 'white', '--namelight': light ? "#dc143c" : "#64ffda", '--rolelight': light ? "" : "#dc143c" }}>
            <p>About </p>
            <div id='aboutcontent'>
                <div id='myselfdesc' data-aos='zoom-in'>
                    <div id='mysitem'>
                        <div><GoTriangleRight style={{ color: light ? "#dc143c" : "#64ffda", fontSize: "20px" }} /></div>
                        <p>Hello! I'm <span>Kaunain Rizvi</span> from <span>Nagpur, Maharashtra, India</span>. <br /> At 23, I'm passionate about creating innovative and interactive web applications 🚀.</p>
                    </div>
                    <div id='mysitem'>
    <div><GoTriangleRight style={{ color: light ? "#dc143c" : "#64ffda", fontSize: "20px" }} /></div>
    <p>Between 2018 and 2022, I delved into freelancing, offering services in video editing, graphic design, and developing WordPress websites and landing pages.</p>
</div>

                    <div id='mysitem'>
                        <div><GoTriangleRight style={{ color: light ? "#dc143c" : "#64ffda", fontSize: "20px" }} /></div>
                        <p>In 2022, I graduated with a Bachelor's degree in Computer Applications. Currently, I'm in the final year of my Master's in Computer Applications (MCA), set to complete in 2024.</p>
                    </div>
                    <div id='mysitem'>
                        <div><GoTriangleRight style={{ color: light ? "#dc143c" : "#64ffda", fontSize: "20px" }} /></div>
                        <p>As a student at <span>Masai School</span>, I am mastering Data Structures, Algorithms, and Full Stack Web Development.</p>
                    </div>
                    <div id='mysitem'>
                        <div><GoTriangleRight style={{ color: light ? "#dc143c" : "#64ffda", fontSize: "20px" }} /></div>
                        <p>My journey includes hands-on experience with real-world projects, applying my knowledge in both <span>Frontend</span> and <span>Backend</span> development.</p>
                    </div>
                    <div id='mysitem'>
                        <div><GoTriangleRight style={{ color: light ? "#dc143c" : "#64ffda", fontSize: "20px" }} /></div>
                        <p>Some of the projects I've worked on can be seen below.</p>
                    </div>
                </div>
                <div id='myimg'>
                    <img src={myImg} alt="Myself" />
                </div>
            </div>
            
        </div>
    );
};
