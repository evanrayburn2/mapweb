import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Lobby() {
    const [name, setName] = useState('')
    const navigate = useNavigate()

    function handleSubmit() {
        if (name.trim() !== '') {
            navigate('/Game', { state: { name } })
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-mist-900">
            <div className="flex flex-col items-center gap-4">
                <h1 className="text-3xl mb-10 text-mauve-100">
                    Input name
                </h1>
                <input
                    className="p-3 text-mauve-100 w-64 outline-1"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button className="p-3 text-mauve-100 w-64 outline-1" onClick={handleSubmit}>
                    Enter
                </button>
            </div>
        </div>
    )

}