import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
     <District name="Noakhali" special = "vibag"></District>
     <District name="Bbaria" special = "yuddho"></District>
     <District name="cumilla" special = "bncc"></District>
    </div>
  );
}

function LoadPost (){
  const [posts, setPosts] = useState([]);
  
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then (data => setPosts(data))
  }, [])
  return(
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post title = {post.title} body = {post.body}></Post>)
      }
    </div>
  )
}

function Post(props){
  return(
    <div style = {{backgroundColor: 'lightgray', margin: '20px', border: '2px solid salmon', padding: '10px'}}>
      <h3>Title: {props.title}</h3>
      <p>Body: {props.body}</p>
    </div>
  )
}





// ---------------------////-------------------




const districtStyle = {
  backgroundColor: 'lightblue',
  margin: '20px',
  padding: '12px',
  borderRadius: '15px'
}
function District(props){
  const [power, setpower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setpower(newPower);
  }
  return (
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Speciality: {props.special}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost the POWER</button>
    </div>
  )
}

export default App;
