import Profile from "./Components/Profile/Profile";
import Statistics from "./Components/Statistics/Statistics";
import FriendsList from "./Components/FriendsList/FriendsList";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import './App.css';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      
      <Statistics stats={statisticalData} />

      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
