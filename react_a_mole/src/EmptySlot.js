import { useEffect } from 'react'
import molehillImg from './images/molehill.png'

export default function EmptySlot(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div>
            <img style={{ 'width': '30vw' }}
                src={molehillImg}
            />
        </div>
    )
}