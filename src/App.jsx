import { useEffect, useState } from "react";

import Tours from "./Tours";

import Loading from "./Loading";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);



  const removeTour = (id)=>{
     const newTour = tours.filter((tour)=> tour.id !== id);
     setTours(newTour)
  }

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      console.log(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    <main>
      <Loading />
    </main>;
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
