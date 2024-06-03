import './App.css'
import { Card1 } from './Card'
import { Card2 } from './Card'
function App() {

  return (
    <>
    <div className='flex'>
      <h1>this is app components</h1>
      <Card1/>
      <Navbar></Navbar>
      <Card1/>
      <Card1/>
      <Card2/>
      <Card2/>
      <Card2/>          
    </div>
    </>
  )
}

export default App
