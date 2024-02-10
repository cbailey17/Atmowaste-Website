import './App.scss';

import { BrowserRouter } from 'react-router-dom';
import { Footer, Hero, Philosophy, Contact } from './containers';
import { Navbar, About, StarsCanvas  } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="gradient__bg">
        <Navbar />
        <StarsCanvas />
        <Hero />
        <About />
        <Philosophy />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
