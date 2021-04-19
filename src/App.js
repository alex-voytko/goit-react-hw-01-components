/* В App.js мы должны заимпортировать все компоненты в папке components,
а также все файлы json - все данные которые нам приходят.
В функции App мы должные определить все пропсы, которые будем использовать в компонентах
и связать их ссылками на json объекты или массив объектов */
import React from "react"
import Profile from "./components/Profile"
import user from "./user.json"
import Statistics from "./components/Statistics"
import statData from "./statistical-data.json"
// import FriendList from "./components/FriendList"
// import TransactionHistory from "./components/TransactionHistory"

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

    <section class="statistics">
      <h2 class="title">{statData.title}</h2>
      <ul class="stat-list">
      {statData.map((statistic) => (
        <li class="item" key={statistic.id}>
          <Statistics
            // title="Upload stats"
            id={statistic.id}
            label={statistic.label}
            percentage={statistic.percentage}
          />
        </li>
      ))}
      </ul>
  </section>
    {/* <FriendList
      
    /> */}
    {/* <TransactionHistory/> */}
  </div>
)

export default App;
