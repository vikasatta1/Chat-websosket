import React, {useEffect, useState} from 'react';
import './App.css';

type UserType = {
    userId:string,
    photo: string,
    userName: string
    message: string
}

function App() {
    let [messageText, setMessagetext] = useState<any>('')
    let [ws, setWs] = useState<any>(null)
    let [users, setUsers] = useState<Array<UserType>>([])

    useEffect(() => {
        let localWS = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
        localWS.onmessage = (messageEvent) => {

            let messages = JSON.parse(messageEvent.data)
            console.log(messages)
            setUsers( messages)
        }
        setWs(localWS)
    }, [])

    let onMessageChange = (e: any) => {
        setMessagetext(e.currentTarget.value)
    }
    let sendMessage = () => {
        ws.send(messageText)

    }


    return (
        <div className="Chat">
            <div className={'messages'}>
                {users.map(u => <div className={'message'} >
                    <img src={u.photo}/><b>{u.userName}</b><span>{u.message}</span>
                </div>)}
            </div>
            <div className={'footer'}>
                <textarea onChange={onMessageChange}>{messageText}</textarea>
                <button onClick={sendMessage}>Send</button>
            </div>

        </div>
    );
}

export default App;
