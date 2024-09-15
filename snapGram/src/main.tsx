import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.js'
import AuthProvder from './context/AuthContext.js'
import { QueryProvider } from './lib/react-query/QueryProvider.js'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryProvider>
      <AuthProvder>
        <App />
      </AuthProvder>
     </QueryProvider>
  </BrowserRouter>

)
