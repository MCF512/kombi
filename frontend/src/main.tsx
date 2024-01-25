import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DeliveryPage, MainPage,AdminPage, Catalog, ProductPage, ContactsPage, Page404 } from './pages'
import './main.scss'
import { CatalogPage } from './pages/catalogPage/CatalogPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/delivery' element={<DeliveryPage/>} />
        <Route path='/catalog/:type' element={<Catalog/>} />
        <Route path='/catalog' element={<CatalogPage/>} />
        <Route path='/product/:id' element={<ProductPage/>} />
        <Route path='/contacts' element={<ContactsPage/>} />
        <Route path='/admin' element={<AdminPage/>} />
        <Route path='*' element={<Page404/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
