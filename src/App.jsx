import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  UseRefExample1,
  UseRefExample2,
  UseRefExample3,
  UseMemoExample,
  UseCallbackExample,
  CustomHookExample1,
  CustomHookExample2,
} from './components';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useref-example-1" element={<UseRefExample1 />} />
          <Route path="/useref-example-2" element={<UseRefExample2 />} />
          <Route path="/useref-example-3" element={<UseRefExample3 />} />
          <Route path="/usememo-example" element={<UseMemoExample />} />
          <Route path="/usecallback-example" element={<UseCallbackExample />} />
          <Route
            path="/custom-hook-example-1"
            element={<CustomHookExample1 />}
          />
          <Route
            path="/custom-hook-example-2"
            element={<CustomHookExample2 />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
