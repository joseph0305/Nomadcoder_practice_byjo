
import { 
  BrowserRouter as Router, 
  Routes, 
  Route } from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Dog from "./routes/Dog";
import Bible from "./routes/Bible";
function App(){
  
    return ( 
      <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Detail />}/>
      <Route path="/dogs" element={<Dog/>}/>
      <Route path="/Bible" element={<Bible/>}/>
      </Routes> 
      </Router>
  );
}

export default App;

//<Route path="/movie" element={<Detail />} />