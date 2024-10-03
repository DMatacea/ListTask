import './List.css'

function List({children}){
    return (
      <ul className='containerUl'>
        {children}
      </ul>
    )
}

export {List}