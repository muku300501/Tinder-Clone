import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Nidhi Bhanusali"
        message="Hey Handsome!! how are you 😃??"
        timestamp="35 minutes ago"
        profilePic="https://i.pinimg.com/236x/41/ed/3e/41ed3e6b1007de281e04078eafbb1693.jpg"
      />
      <Chat
        name="Avneet Kaur"
        message="Can we date💓??"
        timestamp="3 hours ago"
        profilePic="https://pbs.twimg.com/profile_images/1263791239448723456/Di8xDma4.jpg"
      />
      <Chat
        name="Palak Sidhwani "
        message="chal ne yaar have lets just have a dinner date the sweet one majja avse yaar chal💖??"
        timestamp="2 days ago"
        profilePic="https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/120894372_173363604416169_8432845894417427138_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=8_C5ALukXlQAX8gPUFm&oh=0946c0dca282eb33261e10808714df10&oe=5FCB4263"
      />
      <Chat
        name="Ashnoor kaur"
        message="Lets just meet have some interaction and get to know each other what say😎??"
        timestamp="1 week ago"
        profilePic="https://starsunfolded.com/wp-content/uploads/2017/10/Ashnoor-Kaur-Photo-1280x720.jpg"
      />
    </div>
  );
}

export default Chats;
