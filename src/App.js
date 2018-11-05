import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { CSSTransition, TransitionGroup} from "react-transition-group";
import { Provider } from 'react-redux';
import store from './redux/store';

import "./fade.css";

// Importer les composants principaux
import Header from './components/layout/header/Header';
import Main from './components/homepage/main';
import Events from './components/events/events/events';
import Event from './components/events/event/event';

//account components
import LogAccount from './components/account/LogAccount';

const Layout = ({ children }) =>  (
      <Fragment>
        <Header />       
          {children}
      </Fragment>
  )
;

const Routes= props =>{
 
    const location = props.location.pathname;
    {console.log(location)}
    return(
     <Layout>
       <TransitionGroup key={location}>
        <PageFade key={location}>
        <main>
         <Switch>
           <Route path="/parisbyme/accueil" exact component={ Main } />
           <Route path="/parisbyme/compte/se-connecter" exact component= {LogAccount} />
           <Route path="/parisbyme/evenement/:name" exact component= {Events} />
           <Route path="/parisbyme/event/:categorie/:name/:id" exact component= {Event} />
         </Switch>
         </main>
       </PageFade>
      </TransitionGroup>
     </Layout>
  )

}
  
const PageFade = props => (
  <CSSTransition
    {...props}
    classNames="fadeTranslate"
    timeout={300}
    mountOnEnter={true}
    unmountOnExit={true}
  />
);

const App = () => (
 
  <Provider store= {store}>
    <Router>
      <Route path="/" component={Routes} />
    </Router>
  </Provider>
)

export default App;
