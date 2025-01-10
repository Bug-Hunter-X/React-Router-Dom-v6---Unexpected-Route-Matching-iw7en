```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... more routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  const location = useLocation();
  console.log('About component location:', location);
  return <div>About {location.pathname}</div>;
}

export default App;
```