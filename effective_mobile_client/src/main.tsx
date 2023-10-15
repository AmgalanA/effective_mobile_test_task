import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './components/App/App'
import Navigation from './components/Navigation/Navigation'
import History from './components/History/History'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <main className='flex flex-col items-center h-screen w-fit mx-auto justify-center '>
      <Navigation />
      <Routes>
        <Route
          path='' 
          element={<App />}
        />

        <Route
          path='history'
          element={<History />}
        >
          <Route path='page/:id' />
          </Route>
      </Routes>
    </main>
  </BrowserRouter>
  ,
)
