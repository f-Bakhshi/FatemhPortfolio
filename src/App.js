import './App.css';
import BrandIntegration from './components/BrandsIntegration';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import TopFold from './components/TopFold';
import TrendingNfts from './components/TrendingNfts';



function App() {
  return (
    <div className="max-width">
      <Header/>
      <TopFold/>
      <BrandIntegration/>
      <TrendingNfts/>
      <InfoSection/>
      <Footer/>
    </div>
  );
}

export default App;
