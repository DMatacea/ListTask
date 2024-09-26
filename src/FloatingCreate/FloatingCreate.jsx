import { RiAddCircleLine } from "react-icons/ri";
import './FloatingCreate.css'

function FloatingCreate({floatingActivation}) {
    return(
        <div id='activationCreate'>
            <RiAddCircleLine onClick={floatingActivation} id='iconActivationCreate'/>
        </div>
    )
}

export {FloatingCreate}