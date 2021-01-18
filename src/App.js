import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Grid} from 'semantic-ui-react'
import {Main, Footer, Navbar, SideBar} from './layout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {PostItem } from './pages'
function App() {
  return (
    <Grid padded>
      <Grid.Column computer={16} mobile={16} tablet={16}>
        <Navbar />
      </Grid.Column>
      <Grid.Column computer={3} tablet={3}>
        <SideBar />
      </Grid.Column>
      <Grid.Column computer={13} tablet={13}>
        <Router>
          <Switch>
            <Route path='/' component={Main} exact/>
            <Route path='/add-product' component={PostItem} exact/>
          </Switch>
        </Router>
      </Grid.Column>
    </Grid>
  );
}

export default App;
