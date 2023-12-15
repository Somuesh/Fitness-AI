import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import CardsSection from './pages/CardsSection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Banner />
      <CardsSection />
      <Footer />
    </div>
  );
}

export default App;
