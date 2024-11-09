import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { IoSend } from "react-icons/io5"
import './ChatGPT.css'

async function getCohereChatResponse(prompt) {
    // const apiKey = process.env.REACT_APP_COHERE_API_KEY;

    try {
        const response = await axios.post(
            'https://api.cohere.com/v2/chat',
            {
                model: "command-r-plus-08-2024",
                messages: [
                    { role: "user", content: prompt }
                ],
                stream: false
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_COHERE_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        return response.data.message.content || 'Sin respuesta de la API'
    } catch (error) {
        console.error('Error en getCohereChatResponse:', error)
        return `Error: ${error.message}`
    }
}

function ChatGPT(){
    const [inputChatValue, setInputChatValue] = useState('')
    const [messages, setMessages] = useState([])
    const scrollRef = useRef(null)
    const textareaRef = useRef(null)

    const handleTextareaChange = (e) => {
        const textarea = e.target
        setInputChatValue(textarea.value)

        textarea.style.height = 'auto'
        textarea.style.height = `${Math.min(textarea.scrollHeight,120)}px`
    }

    const resetTextareaHeight = () => {
        const textarea = textareaRef.current
        textarea.style.height = 'auto'
        textarea.rows = 2
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter' && !e.shifKey) {
            e.preventDefualt()
            sendRequest()
        }
    }

    const sendRequest = async () => {
        if (!inputChatValue) return

        const currentTextareaValue = inputChatValue

        setInputChatValue('')
        resetTextareaHeight()
        addMessage({role: 'user', content : currentTextareaValue})

        getCohereChatResponse(currentTextareaValue).then(response => {
            const apiResponse = response[0].text

            addMessage({role: 'assistant', content: apiResponse})
        })
    }

    const addMessage = (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage])
    }

    useEffect(() => {
        if(scrollRef.current){
            scrollRef.current.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: 'smooth',
              })
        }
    },[messages])

    return(
        <>
            <p className="tituloChatGPT">
                Asistente Virtual
            </p>
            <div className='divContainerChat'>
                <article 
                ref={scrollRef}
                className='containerConversationChat'>
                {messages.map((msg, index) => (
                    <p  key ={index}
                        className={`textResponse${msg.role === 'user'? 'User' : 'Assistant'}`}>
                            {msg.content}
                    </p>
                ))}
            </article>
            </div>
            
            <div className='containerInputChat'>
                <textarea 
                    ref={textareaRef}
                    className="textareaChat"
                    type="Text" 
                    value={inputChatValue}
                    onChange={handleTextareaChange}
                    onKeyDown={handleKeyPress}
                    placeholder='Do you have a question?'
                    rows={2}
                ></textarea>
                <IoSend 
                    className={'iconDeleteChat'}
                    onClick={sendRequest}
                />
            </div>
        </>
    )
}

export{ChatGPT}