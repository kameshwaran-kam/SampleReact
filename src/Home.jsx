// import React from 'react'
// import Hello from './hello'
import './home.css'
import List from './List/List'
// import Func from './component/Func'
// import Classcom from './component/Classcom'
// import Usestate from './hooks/Usestate'
// import Useeffect from './hooks/Useeffect'
// import Usecallback from './hooks/Usecallback'
// import Usememo from './hooks/Usememo'
// import Demo from './hooks/demo'
// import Website from './hooks/website'
// import Form from './form/Form'
// import Form1 from './form/Form1'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './header/Nav'
import Foot from './header/Foot'
import Menu from './pages/Menu'
import About from './pages/About'
// import List1 from './List/List1'
import Cart from './Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Crud from './crud/Crud'
const Home = () => {
    // const name = "home data"

    // const box = {
    //     color: "red",
    //     backgroundColor: "green"
    // }
  return (
    <div>
    {/* <h1 style={box}> Home</h1>
    <p>{name}</p>
    <Hello />
    <List/>
    <Func name="kamal" age={25}/> */}
    {/* <Classcom/> */}
    {/* <Usestate/>
    <Useeffect/>
    <Usecallback/>
    <Usememo/> */}
    {/* <Demo/> */}
     {/* <Website/> */}
    {/* <Form/>  */}
    {/* <Form1/> */}
    {/* <List1/> */}
    <BrowserRouter>
     <Nav/>
    <Routes>
        <Route path='/' element={<Menu/>}></Route>
        <Route path='/ab' element={<About/>}>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
        <Route path='crud' element={<Crud/>}/>
        </Route>
        <Route path='/list' element={<List/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/crud' element={<Crud/>}/>
    </Routes>
     <Foot/>
    </BrowserRouter>
    </div>
  )
}

export default Home

