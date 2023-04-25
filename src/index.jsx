import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Blog from './pages/Blog';
import Header from './components/Header';
import BlogDetails from './pages/BlogDetails';
import AdminPass from './auth/Login';
import AdminPanel from './admin/AdminPanel';
//

// Css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/sass/style.scss'
//

import configureStore from './store/configureStore';
import EditElement from './admin/EditElement';
import AddElement from './admin/AddElement';
import { Provider } from 'react-redux';
import { getBlogsFromDatabase } from './action/blogAction';

const store = configureStore();


const result = (
  <Provider store={store}>
      <BrowserRouter>
          <Header />

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/blog/:url' element={<BlogDetails />}></Route>
            <Route path='/adminAuth' element={<AdminPass />}></Route>            
            <Route path='/adminPanel' element={<AdminPanel />}></Route>            
            <Route path='/adminPanel/addElement' element={<AddElement />}></Route>            
            <Route path='/adminPanel/edit/:id'   element={<EditElement   />}></Route>            

          </Routes>
        </BrowserRouter>
  </Provider>
)



ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(getBlogsFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})






