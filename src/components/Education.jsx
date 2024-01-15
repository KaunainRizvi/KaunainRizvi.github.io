import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/education.css';
import { MdCastForEducation } from 'react-icons/md';
import { FaUserGraduate } from 'react-icons/fa';
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';

export const Education = () => {
    const { light } = useContext(ThemeContext);

    return (
        <div id='education' style={{ '--bglighted': light ? "#edf2f8" : "#0a192f", '--plight': light ? 'black' : 'white', '--namelight': light ? "#dc143c" : "#64ffda", '--rolelight': light ? "" : "#dc143c" }}>
            <p>Educ<span>a</span>ti<span>o</span>n Details</p>
            <div className='educard' data-aos='zoom-in'>
                <div id='edu1'>
                    <GoTriangleLeft className='ic21' />
                    <FaUserGraduate className='ic' />
                    <GoTriangleRight className='ic22' />
                </div>
                <div class='educardDet edd1'>
                    <p>Full Stack Web Development</p>
                    <p>Masai School, Bangalore</p>
                    <p>Developing both frontend and backend skills as a <span>MERN Stack</span> developer. </p>
                    <p>Unit-7 Back-End - Present</p>
                </div>
                <div className='date d1'></div>
            </div>
            <div className='educard' data-aos='zoom-in'>
                <div id='edu2'>
                    <GoTriangleLeft className='ic21' />
                    <FaUserGraduate className='ic' />
                    <GoTriangleRight className='ic22' />
                </div>
                <div class='educardDet edd2'>
                    <p>Master's of Computer Application (M.C.A)</p>
                    <p>G.H Raisoni University, Amravati, Maharashtra</p>
                    <p>Software Engineering</p>
                    <p>Present - 2024 Final Year</p>
                </div>
                <div className='date d2'></div>
            </div>
            <div className='educard' data-aos='zoom-in'>
                <div id='edu1'>
                    <GoTriangleLeft className='ic21' />
                    <FaUserGraduate className='ic' />
                    <GoTriangleRight className='ic22' />
                </div>
                <div class='educardDet edd1'>
                    <p>Bachelor's of Computer Application (B.C.A)</p>
                    <p>G.H Raisoni College of Engineering, Nagpur, Maharashtra</p>
                    <p>Software Engineering</p>
                    <p>Graduated in 2022</p>
                </div>
                <div className='date d1'></div>
            </div>
            <div className='educard' data-aos='zoom-in'>
                <div id='edu2'>
                    <GoTriangleLeft className='ic21' />
                    <FaUserGraduate className='ic' />
                    <GoTriangleRight className='ic22' />
                </div>
                <div class='educardDet edd2'>
                    <p>Class 12 (Higher Secondary)</p>
                    <p>St. Francis de Sales Junior College, Nagpur, Maharashtra</p>
                    <p>Science Stream - Physics, Chemistry, Maths and Biology</p>
                    <p>2018</p>
                </div>
                <div className='date d2'></div>
            </div>
            <div className='educard' data-aos='zoom-in'>
                <div id='edu1'>
                    <GoTriangleLeft className='ic21' />
                    <FaUserGraduate className='ic' />
                    <GoTriangleRight className='ic22' />
                </div>
                <div class='educardDet edd1'>

                    <p>10TH (High School)</p>
                    <p>Bishop Cotton High School, Nagpur, Maharashtra</p>
                    <p>General All Subjects</p>
                    
                    <p>2016</p>
                    
                </div>
                <div className='date d1'></div>
            </div>
        </div>
    );
};
