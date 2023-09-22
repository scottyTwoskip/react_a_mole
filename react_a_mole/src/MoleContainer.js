import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'


function MoleContainer(props) {
    const [displayMole, setDisplayMole] = useState(false)
    const handleClick = () => {
        setDisplayMole(false)
        props.setScore(props.score + 1)
    }
    return (
        <div>
            {displayMole ?
                <Mole setDisplayMole={setDisplayMole} handleClick={handleClick} /> :
                <EmptySlot setDisplayMole={setDisplayMole} />}
        </div>
    )
}

export default MoleContainer
