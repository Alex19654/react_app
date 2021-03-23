
import './App.css';
import Content from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Feed from './components/Feed/Feed';
import Settings from './components/Settings/Settings';
import Profile from './components/Profile/Profile';



const App = (props) => {


  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-content">
          <Route path="/Feed" component={Feed} />
          <Route path="/Settings" component={Settings} />
          <Route path="/Profile" render = {() => <Profile PostData={props.appState.profilePage.PostData}/>} />
          <Route path="/Dialogs" render = {() => <Dialogs DialogData={props.appState.messagePage.DialogData} MessageData={props.appState.messagePage.MessageData}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;
