import { Routes, Route } from 'react-router-dom'
import Lobby from './screens/Lobby'
import Game from './screens/Game'

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/game" element={<Game />} />
      </Routes>
  )
}




/*<Routes>
//   <Route path="/" element={<Lobby />} />
</Routes>*/
//example of react router (what'll be used for the webpages instead of just a bunch of conditionals)