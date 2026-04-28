import { useState } from 'react'


export default function App() {
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(){
    if (name.trim() !== '') //checking if its empty without whitespace(i think)
      setSubmitted(true)
  }
  return(
      <div className="flex flex-col items-center justify-center h-screen bg-mist-900">
        {submitted && (
            <h1 className = "text-3x1 mb-10 text-mauve-100">
              You are {name}

            </h1>
        )}
        {!submitted &&(
            <div className="flex flex-col items-center gap-4">
            <h1 className = "text-3x1 mb-10 text-mauve-100">
              Input name
            </h1>
              <input
                  className="p-3 text-mauve-100 w-64 outline-1"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)} //e is just on event updates everytime a letter is typed
              />
              <button className={"p-3 text-mauve-100 w-64 outline-1"} onClick={handleSubmit}>
                Enter
            </button>
            </div>
        )}


      </div>
  )
}






/*<Routes>
//   <Route path="/" element={<Lobby />} />
</Routes>*/
//example of react router (what'll be used for the webpages instead of just a bunch of conditionals)