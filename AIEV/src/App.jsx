import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/home'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
