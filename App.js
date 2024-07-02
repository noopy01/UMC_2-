import Movie from "./components/Movie";
import { dummy } from "./movieDummy";


function App(){
  return (
    <div >
      <div className="app-container">
        {
          
          dummy.results.map((item) => {
            return(
              <Movie 
               title={item.title}
               poster_path = {item.poster_path}
               vote_average = {item.vote_average}
               overview = {item.overview}

              />
            );
          })
        }
      </div>

    </div>
    );    


  }
export default App;

















// import {useEffect, useState} from "react";

// function App(){
//     const[loading, setLoading] = useState(true);
//     useEffect(() => {
//         fetch(
//           'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
//         )
//          .then((response) => response.json())
//          .then((json)=> console.log(json));
//     }, []);
//     return<div>
//         {loading ? <h1>Loading...</h1>: null}
//     </div>;
// }

// export default App;












// import Button from "./Button";
// import styles from "./App.module.css";

// function App() {
//   return (
//     <div>
//         <h1 className={styles.title}>Welcome!</h1>
//         <Button text={"continue"}/>
//     </div>
//   );
// }

// export default App;






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
