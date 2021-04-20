/* В App.js мы должны заимпортировать все компоненты в папке components,
а также все файлы json - все данные которые нам приходят.
В функции App мы должные определить все пропсы, которые будем использовать в компонентах
и связать их ссылками на json объекты или массив объектов */
// import React from "react"
// import Profile from "./components/Profile"
import user from "./user.json"
import StatList from "./components/StatList";
import statData from "./statistical-data.json"
import FriendList from "./components/FriendList"
import friends from "./friends.json"
import TransactionHistory from "./components/TransactionHistory"
import transactionHistory from "./transaction-history.json"

const App = () => (
  <div>
    <Profile 
      avatar={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <StatList
      statistics={statData}
    />
    <FriendList
      friends={friends}
    />
    <TransactionHistory
      items={transactionHistory}
    />
  </div>
)

export default App;
