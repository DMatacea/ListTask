import { useState }  from 'react'
import { FaDeleteLeft } from "react-icons/fa6";
import './ActivationInputSearch.css'

function ActivationInputSearch(props){
    const [inputFocus, setInputFocus] = useState(false)

    return(
        <>
            <section className = "InputAndIconDelete">
                <input
                    onFocus = {() => setInputFocus(true)}
                    onBlur = {() => setInputFocus(false)}
                    placeholder='Search'
                    value={props.searchValue}                
                    className={`inputSearch${inputFocus ? 'Color' : '' }`}
                    onChange={(event) => {
                        props.setSearchValue(event.target.value)
                }}
                />
                <FaDeleteLeft 
                    className = "IconDelete"
                    onClick={props.onClear}
                />
            </section>
        </>
    )
}

export { ActivationInputSearch }