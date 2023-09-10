import { useSelector, useDispatch } from "react-redux";
import "./userList.css";
import { nameChange } from "../../store/reducers/chatReducer";

export function ShowUsers() {
  const data = useSelector((state) => state.usersReducer);

  const dispatch = useDispatch();
  return (
    <>
      {data.map((value, index) => {
        return (
          <>
            <div
              style={{ animationDelay: `0.${index + 1}s` }}
              onClick={() => dispatch(nameChange(value.name))}
              className={`chatlist__item ${value.active ? value.active : ""} `}
            >
              <div className="avatar">
                <div className="avatar-img">
                  <img src={value.image} alt="#" />
                </div>
                <span className={`isOnline ${value.isOnline}`}></span>
              </div>
              <div className="userMeta">
                <p>{value.name}</p>
                <span className="activeTime">32 mins ago</span>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
