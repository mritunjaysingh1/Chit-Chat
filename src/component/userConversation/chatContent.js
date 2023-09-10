import "./chat.css";
import { useSelector } from "react-redux";
export default function ChatContent() {
  const data = useSelector((state) => state.chatReducer);

  const data2 = data[data.name];

  return (
    <>
      {data2.map((value, index) => {
        return (
          <>
            <div
              style={{ animationDelay: `0.8s` }}
              className={`chatItem ${value.type ? value.type : ""}`}
            >
              <div className="chatContent">
                <div className="chatMsg">{value.msg}</div>
                <div className="chatMeta">
                  <span>16 mins ago</span>
                  <span>Seen 1.03PM</span>
                </div>
              </div>
              <div className="avatar">
                <div className="avatar-img">
                  <img src={value.image} alt="#" />
                </div>
                <span className={`isOnline ${value.isOnline}`}></span>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
