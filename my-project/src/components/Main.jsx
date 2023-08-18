import React, { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";
import Login from "../pages/Login";

const Main = () => {
  const [movies, setMovies] = useState([]);
   const[login,setlogin]=useState(false)

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);  
    });   
  }, []); 

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <>
      <div>
      <div className=" absolute top-[3%] z-10 flex w-full justify-between ">
          <div>
            <img
              className="h-10  ml-2 cursor-pointer"
              src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
              alt="logo"
            />  
          </div>

          <div className="  ">
            {/* <Router> */}
            <button className="text-white mr-2 " onClick={()=>setlogin(!login)}> Sign In</button>
            {/* </Link></Router> */}
              {login && <Login/>} 
             {/* {login ? <Login/>:<Main/> } */}
            <button className="text-white py-1 px-2 mr-3 rounded-sm bg-red-600 ">
              Sign Out
            </button>
            <div>
              
            </div>
          </div>
        </div>
        <div className="w-full h-[550px] text-white ">
          <div className="h-full w-full">
            <div className="absolute w-full h-[550px] bg-gradient-to-r from-black "></div>
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
              alt={movie?.title}
            />
            <div className="w-full absolute top-[20%] p-4 md:p-8">
              <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
              <div className="my-4">
                <button className="border bg-gray-300 text-black py-2 px-5">
                  Play
                </button>
                <button className="border  text-white py-2 ml-4 px-5">
                  Watch Later
                </button>
              </div>
              <p className="text-sm text-gray-400">
                Released:{movie?.release_date}
              </p>
              <p className="text-gray-200 w-full md:max-w-70% lg:max-w-[50%] xl:max-w-[35%]">
                {truncateString(movie?.overview,150)}
              </p>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
};
function Home() {
  return <h2>Home</h2>;
}

export default Main;
