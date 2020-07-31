import React, {useState} from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
    const[input, setInput] = useState('');
     const [messages, setMessages] = useState([
        {
            name:'Denzel',
            image:'https://www.shortlist.com/media/imager/201905/16447-posts.article_md.jpg',
            message:'Whats up ?'
        },
         {
             name:'Denzel',
             image:'https://www.shortlist.com/media/imager/201905/16447-posts.article_md.jpg',
             message:'How are you ?'
         },
         {
             message:'Not bad, what have you been upto ?'
         }
    ])

    const handleSend = (e) => {
         e.preventDefault();

         setMessages([...messages, {message: input}]);
         setInput("");
    }

    return(
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH DENZEL ON 10/08/2040</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar className="ChatScreen__image" src={message.image} alt={message.name}/>
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                    ) :(
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )

            ))}
                <form className="chatScreen__input">
                    <input className="chatScreen__inputField" value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type a message"/>
                    <button type="submit" onClick={handleSend} className="chatScreen__inputButton">SEND</button>
                </form>
        </div>
    )
}

export default ChatScreen;