import { BrowserRouter } from 'react-router-dom';
import Navigation from './pages/Navigation';
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
