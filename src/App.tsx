import './App.css';
import ShowHealthData from './component/ShowHealthData/ShowHealthData';
import { HealthDataContextWrapper } from './store/health-data-context';

function App() {

  
  setTimeout(() => {
      
  }, 1000);

  return (
    <HealthDataContextWrapper>
    <ShowHealthData />
    </HealthDataContextWrapper>

  );
}

export default App;
