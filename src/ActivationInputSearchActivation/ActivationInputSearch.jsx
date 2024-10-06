import { useState }  from 'react'
import './ActivationInputSearch.css'

function ActivationInputSearch(props){
    const [inputFocus, setInputFocus] = useState(false)

    return(
        <>
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
        </>
    )
}

export { ActivationInputSearch }