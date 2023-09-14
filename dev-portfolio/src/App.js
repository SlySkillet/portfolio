import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Nav'


function App() {
  return (
<div className="grid-container">
    <HashRouter>
       <NavBar />
      {/*<div className="main-container">
        <Routes>
          <Route path="/" element={ <About /> } />
          <Route path="projects/" element={ <Projects />} />
          <Route path="resume/" element={ <Resume />} />
          <Route path="contact/" element={ <Contact /> }/>
        </Routes>
      </div>
      <Footer /> */}
    </HashRouter>
</div>
  );
}

export default App;
