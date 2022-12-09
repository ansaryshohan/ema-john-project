import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Components/RouterComp/Routers';


function App() {
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
}

export default App;
