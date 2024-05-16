import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
function App() {
  const [count, setCount] = useState(0)
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className='font-sans'>
        <Home />
      </div>
    </QueryClientProvider>
  )
}

export default App
