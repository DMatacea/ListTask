import { useState } from 'react'

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
      try{
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
      } catch (error){
        console.error('Error accesing (getItem) localStorage: ', error)
        return initialValue
      }
    })
  
    const setValue = (value) => {
      try {
        setStoredValue(value)
        localStorage.setItem(key, JSON.stringify(value))
      } catch (error) {
        console.error('Error setting (setItem) localStorage: ', error)
      }
    }
  
    return [storedValue, setValue]
  }

export { useLocalStorage }