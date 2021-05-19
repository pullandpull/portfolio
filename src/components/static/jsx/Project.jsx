import {makeStyles} from '@material-ui/core/styles';
import rango from '../img/rangohome.png'; 
import anilib from '../img/animanga.png'; 
import aniReact from '../img/aniReact.png';

import '../css/project.css'; 

const style = makeStyles({
    projectList: {
        display: 'flex', 
        flexWrap: 'wrap',
        fontFamily: 'PT Sans , sans-serif' ,
        color: 'white',
    }, 
    project: {
        width: '100%',
        position: 'relative',
    },
    desc: {
        position: 'absolute', 
        top: '30%', 
        display: 'inline-block',
        textWrap: 'break-word',
        fontSize: '1.2rem',
        width: '45%'

    }
})

const Project = () => {
    const myStyle = style();
    return (
        <div>
            <div className= {myStyle.projectList}>

                <div className = {myStyle.project}>
                    <h2> Rango </h2>
                    <img src={rango} alt="Blog website" style = {{ width:'480px', height: '310px' }}/>
                    <ul className = {myStyle.desc} >
                        
                    <span> Rango is a Blog Website where users can post Topics <br/> with provided link to their sources</span>
                    <li>
                        Technologies used:
                            <ul>
                                <li>Python - Django </li>
                                <li>JS - Jquery</li>
                                <li>SQLite - Handling user data</li>
                                <li>Microsoft Azure - Bing API</li>
                            </ul>
                    </li>
                    </ul>
                </div>

                <div className = {myStyle.project}>
                    <h2> AniHistory </h2>
                    <img src={anilib} alt="Blog website" style = {{ width:'480px', height: '310px' }}/> 
                    <ul className = {myStyle.desc}>
                    <span>
                        AniHistory is an all around website intended for Animes and Mangas.
                        </span>

                    <li>
                            Technologies used:
                            <ul>
                                <li>Python - Django </li>
                                <li>JS - Jquery</li>
                                <li>MySQL - Handling user data</li>
                                <li>RapidApi</li>
                            </ul>
                    </li>

                    </ul>
                </div>

                <div className = {myStyle.project} >     
                    <h2> AniHistory - React</h2>
                    <img src={aniReact} alt="Blog website" style = {{ width:'480px', height: '310px' }}/> 
                    <ul className = {myStyle.desc}>
                <span>
                           This project is just a simplier and updated version of the above project 
                        </span>
                        <li>
                            Technologies used: 
                            <ul>
                                <li>React JS</li>
                                <li>Material-ui</li>
                                <li>RapidApi</li>
                                
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Project
