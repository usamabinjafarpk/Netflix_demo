import logo from './logo.svg';
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { actions, originals , comedy, romance, horror} from './urls';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals'  />
    <RowPost url={actions} title='Action Movies' isSmall />
    <RowPost url={comedy} title='Comedy Movies' isSmall />
    <RowPost url={romance} title='Romance Movies' isSmall />
    <RowPost url={horror} title='Horror Movies' isSmall />

    
    </div>
  );
}

export default App;
