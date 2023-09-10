import "./App.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { UserList } from "./component/userList/userList";
import UserConversation from "./component/userConversation/userConversation";

function App() {
  return (
    <div className="main">
      <Provider store={store}>
        <UserList />
        <UserConversation />
      </Provider>
    </div>
  );
}

export default App;
