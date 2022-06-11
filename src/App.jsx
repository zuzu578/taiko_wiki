import './App.css'
import { Navbar } from './components/nav'
import { WikiMain } from './components/wikimain'
import { WikiReg } from './components/wikireg'
import { WikiDetail } from './components/wikidetail'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return(
    <div>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<WikiMain />}/>
      <Route exact path="/wikireg" element={<WikiReg />}/>
      <Route exact path="/find" element={<WikiDetail />}/>
      
      </Routes>
    </div>
  )
}

export default App
