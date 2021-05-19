import '../css/nav.css';
import {useHistory} from 'react-router-dom'; 

const Nav = () => {
    const history = useHistory();

    return (
        <div>
            <div className = 'nav'>
                <div className = 'nav-brand' >
                     <h3 onClick = {() => {history.push('/')}} >Omar Teraytay</h3>
                 </div>

                <div className = 'nav-project' >
                    <h3 onClick = {() => history.push('/projects')}>Projects</h3>
                </div>
               
            </div>
        </div>
    )
}

export default Nav
