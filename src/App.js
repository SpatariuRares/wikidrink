import { Navbar, Sidebar, Footer } from "./components";

import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import {BrowserRouter as Router} from 'react-router-dom'


const Component = () => {
  let element = useRoutes(routes);
  return element;
};

function App() {
  return (
  <div className="App">
    <Router>
      <Navbar />
      <Sidebar />
      <Component/>
      <Footer/>
    </Router>
  </div>
  )
}

export default App;
