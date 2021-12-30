import React, { useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './hoc/auth';
import NotFoundPage from './NotFoundPage';
import LandingPage from './components/views/LandingPage/LandingPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import UploadPage from './components/views/UploadPage/UploadPage';
import TemplateGalleryPage from './components/views/TemplateGalleryPage/TemplateGalleryPage';
import FormPage from './components/views/FormPage/FormPage';
import WorkspacePage from './components/views/WorkspacePage/WorkspacePage';
import ChatPage from './components/views/ChatPage/Containers/ChatPage';

import Navbar from './components/views/Navbar/Navbar';

function App() {
  // const user = useSelector(state => state.user)
  // const miiniform = useSelector(state => state.miiniform)

  return (
    <div className='div_app'>
      <div className='div_app_Split'>
        <Router>
          <Navbar />
        </Router>
        <div
          className='div_appContainer'
          style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}
        >
          <Router>
            <Switch>
              <Route exact path='/' component={Auth(LandingPage, null)} />
              <Route
                exact
                path='/register'
                component={Auth(RegisterPage, false)}
              />
              <Route exact path='/login' component={Auth(LoginPage, false)} />
              {/* <Route exact path="/workspace" component={Auth(UploadPage, true)}/> */}
              <Route
                exact
                path='/workspace'
                component={Auth(WorkspacePage, true)}
              />
              <Route
                exact
                path='/templates'
                component={Auth(TemplateGalleryPage, true)}
              />
              <Route path='/ChatPage' component={ChatPage} />
              <Route exact path={`/form`} component={Auth(FormPage, true)} />
              <Route exact path='/*' component={NotFoundPage} />
              <Route exact path='/**/*' component={NotFoundPage} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
