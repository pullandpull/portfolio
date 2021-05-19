import Nav from './components/static/jsx/Nav';
import Index from './components/static/jsx/Index'; 
import Project from './components/static/jsx/Project';

import Container from '@material-ui/core/Container' 
import {makeStyles} from '@material-ui/core/styles';

import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'; 

const myStyle = makeStyles({
  root: {
  },
})
function App() {
  const style = myStyle();
  return (
    <div className="App">
      
      <Router>
      <Nav />
      <Container className = {style.root}>
      <Switch>
      <Route exact path = '/' render = {() => <Index />} />
      <Route exact path = '/projects' render = {() => <Project />} />
      </Switch>
      </Container>
      </Router>
    </div>
  );
}

export default App;
