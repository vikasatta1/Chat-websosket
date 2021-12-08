import React, {useEffect, useRef, useState} from 'react';
import './App.css';

type UserType = {
    userId: string,
    photo: string,
    userName: string
    message: string
}

function App() {
    let messagesBlock = useRef<any>()
    let [messageText, setMessagetext] = useState<any>('')
    let [ws, setWs] = useState<any>(null)
    let [users, setUsers] = useState<Array<UserType>>([])
    if (ws) {
        ws.onmessage = (messageEvent: any) => {
            let messages = JSON.parse(messageEvent.data)
            console.log(messageEvent)
            setUsers([...users, ...messages])
            messagesBlock.current.scrollTo(0,  messagesBlock.current.scrollHeight)
        }
    }
    useEffect(() => {
        let localWS = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
        setWs(localWS)
    }, [])

    let onMessageChange = (e: any) => {
        setMessagetext(e.currentTarget.value)
    }
    let sendMessage = () => {
        ws.send(messageText)
        setMessagetext('')

    }
    return (
        <div className="App">
            <div className="Chat">
                <div className='messages' ref={messagesBlock}>
                    {users.map((u, index) => <div className={'message'} key={index}>
                        <img src={u.photo}/><b>{u.userName}</b><span>{u.message}</span>
                    </div>)}
                </div>
                <div className={'footer'}>
                    <textarea onChange={onMessageChange}  value={messageText}/>
                    <button onClick={sendMessage}>Send</button>
                </div>

            </div>
        </div>);
}

export default App;
