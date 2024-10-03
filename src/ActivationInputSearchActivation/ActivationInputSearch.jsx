import './ActivationInputSearch.css'

function ActivationInputSearch(props){
    return(
        <>
            <input
                placeholder='Search'
                value={props.searchValue}                
                className='inputSearch'
                onChange={(event) => {
                    props.setSearchValue(event.target.value)
            }}
            />
        </>
    )
}

export { ActivationInputSearch }