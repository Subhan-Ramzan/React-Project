
import './App.css'
import Header from './components/Header'
import Technical from './components/Technical'
import Maintenance from './components/Maintenance'
import Gallery from './components/Gallery'
import Applications from './components/Applications'
import Footer from './components/Footer'
import ProductDetails from './components/FetchApiData'
function App() {

  return (
    <div className='lg:px-20 px-2 py-6 md:py-10 scroll-smooth'>
      <Header />
      <Gallery />
      <Technical />
      <Maintenance />
      <Applications />
      <Footer />
      {/* <ProductDetails /> */}
    </div>
  )
}

export default App
