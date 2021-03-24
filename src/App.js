import './App.css';
import Map from './pages/map/map';
import Landmark from './features/landmark/Landmark';
import { useDispatch } from 'react-redux';
import add from './features/landmark/landmarkSlice';


function App() {
  const dispatch = useDispatch();
  const handleAddLandmark = () => {
    dispatch(add({ name: 'new item 3', editor: 'Lu', note: 'another test' }))
    console.log('added new item')
  }
  return (
    <div>
      <h1 className='App'>My Community Landmark</h1>
      <div className="container">
        <Map />
        <Landmark />
      </div>
    </div>
  );
}

export default App;
