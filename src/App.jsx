import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
