import { useState, useEffect } from 'react'

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      try{
        const item = window.localStorage.getItem(key)
        if (item) {
          setStoredValue(JSON.parse(item))
        } else {
          setStoredValue(initialValue)
        }
      } catch (error){
        console.error('Error accesing (getItem) localStorage: ', error)
        setError('Error al cargar las tareas. ')
      }finally{
        setLoading(false)
      }
    },1200)}
    ,[key])

  const setValue = (value) => {
    try {
      setStoredValue(value)
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('Error setting (setItem) localStorage: ', error)
      setError('Error al guardar las tareas.')
    }
  }

  return {
      storedValue,
      setValue,
      loading,
      error,
  }
}

export { useLocalStorage }

// if (items) {
//     const item = JSON.parse(items)
//     setLoading(false)
//     return item
// }else{
//     return initialValue
// }