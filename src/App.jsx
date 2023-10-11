
import './App.css'
import Navbar from './components/navbar/Navbar'
import Tab from './components/taboptions/Tab'
import { ShopContextProvider } from './context/ShopContextProvider';

function App() {

  return (
    <>

      <div className='navbar-component'>
        <Navbar />
      </div>

      <div className='tab-component'>
        <Tab />
      </div>

    </>

  )

}

export default App;
