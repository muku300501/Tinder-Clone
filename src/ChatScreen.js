import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChartScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Nidhi Bhanusali",
      image:
        "https://i.pinimg.com/236x/41/ed/3e/41ed3e6b1007de281e04078eafbb1693.jpg",
      // "https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/nidhi-bhanushalis-desi-looks-202003-1584086588.jpg",
      //   message: "I love You💘💘",
      message: "Hii",
    },
    {
      //   message: "Aisa kya chal shaadi kar lete hai meri jaan💑",
      message: "hiii",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH NIDHI BHANUSALI ON 02/11/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar className="chstScreen__image" src={message.image} />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser ">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          input={input}
          onChange={(event) => setInput(event.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..."
          text="text"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
