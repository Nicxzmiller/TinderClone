import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
    return(
        <div className="chats">
            <Chat
                name="Mark"
                message="Yo whatsup!"
                timestamp="40 seconds ago"
                profilePic="https://www.shortlist.com/media/imager/201905/16447-posts.article_md.jpg"
            />
            <Chat
                name="Mark"
                message="Yo whatsup!"
                timestamp="40 seconds ago"
                profilePic="https://www.shortlist.com/media/imager/201905/16447-posts.article_md.jpg"
            />
            <Chat
                name="Mark"
                message="Yo whatsup!"
                timestamp="40 seconds ago"
                profilePic="https://www.shortlist.com/media/imager/201905/16447-posts.article_md.jpg"
            />
            <Chat
                name="Mark"
                message="Yo whatsup!"
                timestamp="40 seconds ago"
                profilePic="https://www.shortlist.com/media/imager/201905/16447-posts.article_md.jpg"
            />

        </div>
    )
}

export default Chats;