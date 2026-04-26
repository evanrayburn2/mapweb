import { useState } from 'react'


export default function App() {
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(){
    if (name.trim() !== '') //checking if its empty without whitespace(i think)
      setSubmitted(true)
  }
  return(
      <div className="flex flex-col items-center justify-center h-screen bg-zinc-400">

      </div>
  )
}






/*<Routes>
//   <Route path="/" element={<Lobby />} />
</Routes>*/
//example of react router (what'll be used for the webpages instead of just a bunch of conditionals)