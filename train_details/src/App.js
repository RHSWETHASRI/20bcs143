import logo from './logo.svg';
import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [actualData, setData] = useState([]);

  const fetchData = () => {
    fetch(`http://localhost:3000/trains`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.trains);
        console.log(actualData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          View train details by :
          <label for="menu">VIEW TRAIN DETAILS BY:</label> 
       <select name="asec_price" id="asec_price"> 
        <option value="asec_price">Asec price</option> 
        <option value="desc_price">Desc price</option> 
    </select>
     </p>
     <p>
     <tbody>
        <tr>
          <th>trainName                 </th>
          <th>trainNumber               </th>
          <th>departureTime             </th>
          <th>seatsAvailable ac         </th>
          <th>seatsAvailable sleeper    </th>
        </tr>
        {actualData.array.forEach(element => {
           <tr>
           <td>{element.trainName}</td>
           <td>{element.trainNumber}</td>
           <td>{element.departureTime.Hours}</td>
           <td>{element.seatsAvailable.AC}</td>
           <td>{element.seatsAvailable.Sleeper}</td>
         </tr>
        })
         
      }
      </tbody>
     </p>
    </header>
    
    </div>
)}
export default App;
