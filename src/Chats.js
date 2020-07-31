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
                name="Jeff"
                message="Hey, how are you?"
                timestamp="1 week ago"
                profilePic="https://www.shortlist.com/media/imager/201905/16447-posts.article_md.jpg"
            />
            <Chat
                name="Allen"
                message="i'm in town, wanna hangout?"
                timestamp="3 minutes ago"
                profilePic="https://www.shortlist.com/media/imager/201905/16447-posts.article_md.jpg"
            />
            <Chat
                name="Qaz"
                message="Don't be late"
                timestamp="5 seconds ago"
                profilePic="https://www.shortlist.com/media/imager/201905/16447-posts.article_md.jpg"
            />

        </div>
    )
}

export default Chats;