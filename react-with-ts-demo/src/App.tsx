import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  // const [number, setNumber] = useState<number | string>(5);

  // const changeNumber = () => {
  //   setNumber(10)
  // }

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      url: "https://pseudoyu.oss-cn-hangzhou.aliyuncs.com/images/weekly_review_1009_photo.png",
    },
    {
      name: "Kevin Durant",
      age: 30,
      url: "https://pseudoyu.oss-cn-hangzhou.aliyuncs.com/images/weekly_review_1009_photo.png",
      note: "Best player in the world"
    },
    {
      name: "Stephen Curry",
      age: 31,
      url: "https://pseudoyu.oss-cn-hangzhou.aliyuncs.com/images/weekly_review_1009_photo.png",
      note: "MVP"
    }
  ]);

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
