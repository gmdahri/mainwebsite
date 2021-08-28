import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";
import Landing from './Components/Pages/Landing';

import about from './Components/Pages/about';
import UploadVideo from './Components/Pages/UploadVideo';
import DesignerClass from './Components/Pages/DesignerClass';
import ReadExcelFiles from './Components/Pages/ReadExcelFiles';
import ReadCSV from './Components/Pages/ReadCSV';
import DrawRectangle from './Components/Pages/DrawRectangle';
function App() {
  return (
    <div >
      {/* <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/about' component={about} />
        <Route exact path='/UploadVideo' component={UploadVideo} />
        <Route exact path='/Designer' component={DesignerClass} />
        <Redirect from="*" to="/" />      
        </Switch>
      </Router> */}
      <ReadCSV />
      {/* <DrawRectangle /> */}
    </div>
  );
}

export default App;
