import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './List.jsx';

function App() {

  const fruits = [{id:1,name: "apple", calories: 95},
                  {id:2,name: "orange",calories: 45},
                  {id:3,name: "banana",calories: 105},
                  {id:4,name: "cocunut",calories: 159},
                  {id:5,name: "pineapple",calories: 37}];

const vegetables = [{id:6,name: "potatoes", calories: 95},
                  {id:7,name: "celery",calories: 45},
                  {id:8,name: "carrots",calories: 105},
                  {id:9,name: "corn",calories: 159},
                  {id:10,name: "broccoli",calories: 37}];

  return (<>
    {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
    {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}
    </>
  );
}

export default App
