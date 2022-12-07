import React, { useState } from 'react';
import './index.css'




const DropDownCourses = () =>{

    const [dropdown,setdropdown]=useState(false)

    const [techDropDown,setTechDrop]=useState(false)
    const [nonTechDrop,setNonTechDrop]=useState(false)
    const [manageCourseDrop,setManageCourse]=useState(false)



    const TechCoursesContainer=()=>{
        return(<div>
            <ul className='nav-tech-links-container'>
                    <li className='nav-tech-links-container-list-item'><a href='/C++Programming'>C++ Programming</a></li>
                    <li className='nav-tech-links-container-list-item'><a href='/CProgramming'>C Programming</a></li>
                    <li className='nav-tech-links-container-list-item'><a href='/PythonProgramming'>Python Programming</a></li>
                    <li className='nav-tech-links-container-list-item'><a href='/JavaProgramming'>Java Programming</a></li>
                    <li className='nav-tech-links-container-list-item'><a href='/AndroidApp'>Android App Development</a></li>
                    <li className='nav-tech-links-container-list-item'><a href='/FrontendDevelopment'>Frontend Development</a></li>
                    <li className='nav-tech-links-container-list-item'><a href='/BackedDevelopment'>Backed Development</a></li>
                    <li className='nav-tech-links-container-list-item'><a href='/MeanStack'>Mean Stack Development</a></li>
                    <li className='nav-tech-links-container-list-item'><a href='/MachineLearning'>Machine Learning</a></li>
                    <li className='nav-tech-links-container-list-item'><a href='/ArtificialIntelligence'>Artificial Intelligence</a></li>
                    <li className='nav-tech-links-container-list-item'><a href='/datascience'>Data Science</a></li>
                    <li className='nav-tech-links-container-list-item'><a href='/blockchain'>Blockchain</a></li>
                    <li className='nav-tech-links-container-list-item'><a href='/CloudComputing'>Cloud Computing</a></li>
                    <li className='nav-tech-links-container-list-item'><a href='/CyberSecurity'>Cyber Security</a></li>
                    <li className='nav-tech-links-container-list-item'><a href='/DataStructuresAndAlgorithms'>Data Structures And Algorithms</a></li>
                    <li className='nav-tech-links-container-list-item'><a href='/SQLlDatabase'>SQL Database</a></li>
                </ul>
        </div>)
    }


    








    const CursesNonTechContainer=()=>{
        return(<div>
            <ul className='nav-tech-links-container'>
                <li className='nav-tech-links-container-list-item'><a href='/graphicDesign'>Graphic Design</a></li>
                <li className='nav-tech-links-container-list-item'><a href='/VFX&Animation'>VFX & Animation</a></li>
                <li className='nav-tech-links-container-list-item'><a href='/excel'>Excel</a></li>
                <li className='nav-tech-links-container-list-item'><a href='/StockMarket'>Stock Market</a></li>
                <li className='nav-tech-links-container-list-item'><a href='/BusinessEtiquette'>Business Etiquette</a></li>
                <li className='nav-tech-links-container-list-item'><a href='/Catia&Ansys'>Catia & Ansys</a></li>
                <li className='nav-tech-links-container-list-item'><a href='/EmbeddedSystems'>Embedded Systems</a></li>
                <li className='nav-tech-links-container-list-item'><a href='/HybridElectricVehicles'>Hybrid Electrical Vehicles</a></li>
                <li className='nav-tech-links-container-list-item'><a href='/IOT'>IOT</a></li>
            </ul>
        </div>)
    }

    const CursesManageContainer=()=>{
        return(<div>
            <ul className='nav-tech-links-container'>
                <li className='nav-tech-links-container-list-item'><a href='/DigitlMarketing'>Digital Marketing</a></li>
                <li className='nav-tech-links-container-list-item'><a href='/HumanResource'>Human Resource</a></li>
                <li className='nav-tech-links-container-list-item'><a href='/Sales&Marketting'>Sales & Marketing</a></li>
                <li className='nav-tech-links-container-list-item'><a href='/finance'>Finance</a></li>

               </ul>
        </div>)
    }

    return(<div>
        <ul onClick={()=>setdropdown(!dropdown)}  className={dropdown ? 'dorp-down-menu-courses clicked' :  'dorp-down-menu-courses'}>
            <li className='list-item-drom-course' onMouseEnter={()=>
                setTechDrop(true)} onMouseLeave={()=>setTechDrop(false)} onClick={()=>
                setdropdown(false)}>
                Technical
                {techDropDown && <TechCoursesContainer/> }
                
            </li>
            <li className='list-item-drom-course' onMouseEnter={()=>
                setNonTechDrop(true)} onMouseLeave={()=>setNonTechDrop(false)}  onClick={()=>setdropdown(false)} >Non-Technical
                    {nonTechDrop && <CursesNonTechContainer/>}
            </li>

            <li className='list-item-drom-course' onMouseEnter={()=>
                setManageCourse(true)} onMouseLeave={()=>setManageCourse(false)}  onClick={()=>setdropdown(false)} >Management
                    {manageCourseDrop && <CursesManageContainer/>}
            </li>
        </ul>
    </div>)
}
export default DropDownCourses;