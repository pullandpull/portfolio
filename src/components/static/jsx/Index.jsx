import {makeStyles} from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import WorkIcon from '@material-ui/icons/Work';
import svg from '../img/work_fav.svg'; 

const styles = makeStyles({
    intro:{
        fontFamily: 'PT Sans , sans-serif' ,
        color: 'white',
    },
    intro_h3: {
        fontSize: '1.8rem',

    },
    intro_h4:{
        fontSize: '1.7rem', 
    },
    intro_p: {
        fontSize: '1.5rem',
        textIndent: 10,
        
    },
    work: {},
    work_exp : { 
        fontSize: '1.6rem',
    },
    workIcon : { 
        color: '#dadbd5',
    },
    results: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    resImg:{
        margin: 5,
    },
    company: {
        fontSize: '1.3rem',
    },
    date: {
        color: '#b8bfbe',
        fontSize: '1.2rem',
    },
    jobDesc: {
        fontSize: '1.123rem',
    },
    ul: {
        textIndent: 10,
    },
    footer: {
        fontSize: '1.2rem',
    }
})

const index = () => {
    const myStyle = styles();
    return (
        <div className = {myStyle.intro}>
            <div className = {myStyle.intro}>
            <h3 className = {myStyle.intro_h3}>My Personal Website & Portfolio</h3>
            <h4 className ={myStyle.intro_h4}> About me: </h4>
            <p className = {myStyle.intro_p}> Hi, my name is Omar. i'm aspiring to be a Full-Time Web Developer<br/> 
            Technologies i'm familiar with are Python, JS and React.</p>
            </div> 
            <div className= 'work'>
            <h3 className = {myStyle.work_exp}><WorkIcon style = {{fontSize: '25px'}} className = {myStyle.workIcon} /> Work Experience: </h3> 
            <div className ={myStyle.results}> 
            <img src = {svg} alt = 'results' className = {myStyle.resImg}/>
            <span className = {myStyle.company}> The Results Companies <br/><span className = {myStyle.date}> 7/17/2018 - 11/17/2018 </span></span>
            </div>
            <div className = {myStyle.jobDesc} > 
                <ul className = {myStyle.ul}>
                    <li>Customer Sales Representative</li>
                    <li>Silver City, Frontera drive Cor. Dona Julia Vargas, Pasig City.</li>
                </ul>
            </div>
            <div className ={myStyle.results}> 
            <img src = {svg} alt = 'results' className = {myStyle.resImg}/>
            <span className = {myStyle.company}> The Results Companies <br/><span className = {myStyle.date}> 6/28/2019 - 1/16/2020 </span></span>
            </div>
            <div className = {myStyle.jobDesc}> 
                <ul className = {myStyle.ul}>
                    <li>Customer Service Representative</li>
                    <li>120 Eulogio Rodriguez Jr. Ave, Pasig, 1604 Metro Manila</li>
                </ul>
            </div>

            <div className = {myStyle.footer}>
                <span>if you have any questions, feel free to message me via <a href='https://www.facebook.com/omar.teraytay.9' style = {{textDecoration:'none', color:'white' , margin:'5px'}}><FacebookIcon /></a> 
                or <a href='https://github.com/pullandpull' style = {{textDecoration:'none', color:'white', margin:'5px'}}><GitHubIcon /></a></span>
                <p>COPYRIGHTS <span>&#169;</span> Omar Teraytay 2021</p> 
            </div>
            </div>
        </div>
    )
}

export default index
