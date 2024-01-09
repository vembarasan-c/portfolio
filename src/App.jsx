import Header from './components/Header';
import Skills from './components/Skills';

import ConnectWithMe from './components/Connect';
import Profile from './components/Profile';
import Project from './components/Project';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <ConnectWithMe />
        <Header />
        <Skills />
        <Project />
        {/* <Profile /> */}
        <Footer />
      </main>
    </>
  );
}

export default App;
