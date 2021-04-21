/* В App.js мы должны заимпортировать все компоненты в папке components,
а также все файлы json - все данные которые нам приходят.
В функции App мы должные определить все пропсы, которые будем использовать в компонентах
и связать их ссылками на json объекты или массив объектов */
import React from "react"; 
import AppBar from "./components/AppBar/AppBar";//component
import Container from "./components/Container/Container";//component
import Profile from "./components/Profile/Profile";//component
import user from "./user.json";//data
import StatList from "./components/Statistics/StatList";//component
import statData from "./statistical-data.json";//data
import FriendList from "./components/FriendList/FriendList";//component
import friends from "./friends.json";//data
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";//component
import transactionHistory from "./transaction-history.json";//data
import Footer from "./components/Footer/Footer"



const App = () => (
  <>
  <AppBar/>
  <Container>
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
    </Container>
    <Footer/>
  </>
)

export default App;
