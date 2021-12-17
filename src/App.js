import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Player } from 'video-react';



function App() {
  const [Episodes,setEpisodes] = useState([])

  useEffect(() => {
    const fetchEpisodes = async () => {
      const response = await axios.get(`https://api.sampleapis.com/futurama/episodes`)
      setEpisodes(response.data)
      console.log(Episodes)
    };
    fetchEpisodes()
    
      },[])
      console.log(Episodes)

  return (
    <div className='row'>
      <div className='col-md-12'>
        {Episodes.map((item)=>{
        <div style={{display:'flex', justifyContent:'center'}}>
          <Player
            playsInline
            src="https://youtu.be/ScMzIvxBSi4"
          /> 
          <strong>{item.title}</strong>
          <div>{item.originalAirDate}</div>
          <div style={{justifyContent:"center", alignItems:'center'}}>{item.desc}</div>
          </div>   
        })}
        </div>
    </div>
  );
}

export default App;
