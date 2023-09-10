import ChatContent from "./chatContent";
import "./chat.css";
import { useSelector, useDispatch } from "react-redux";
import { addChat } from "../../store/reducers/chatReducer";
import { useState } from "react";
export default function UserConversation() {
  const [text, setText] = useState("");
  const data = useSelector((state) => state.chatReducer);

  const dispatch = useDispatch();
  function addText(msg) {
    const result = {
      image:
        "https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/08/18/Incoming/Pictures/chandler-bing_7a8773af-45b8-11e5-a8da-005056b4648e.jpg",
      type: "",
      msg: msg,
    };
    dispatch(addChat(result));
    setText("");
  }

  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <div className="avatar">
              <div className="avatar-img">
                <img src={data[data.name][1].image} alt="#" />
              </div>
              <span className={`isOnline active`}></span>
            </div>
            <p>{data.name}</p>
          </div>
        </div>

        <div className="blocks">
          <div className="settings">
            <button className="btn-nobg">
              <i className="fa fa-cog"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="content__body">
        <div className="chat__items">
          <ChatContent />
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <button className="addFiles">
            <i className="fa fa-plus"></i>
          </button>
          <input
            type="text"
            placeholder="Type a message here"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <button
            className="btnSendMsg"
            id="sendMsgBtn"
            onClick={() => {
              addText(text);
            }}
          >
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
