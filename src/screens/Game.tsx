import { useLocation } from 'react-router-dom'

export default function Game() {
    const location = useLocation()
    const { name } = location.state

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-mist-900">
        <div className="flex items-center justify-center h-screen bg-mist-900 text-mauve-100">
            <h1 className="text-3xl">You are {name}</h1>
        </div>
        </div>
    )
}