import { useState, useEffect } from "react"; 
import { fetchInfo } from "../../lib";

const PyMk = () => {
  const [data, setData] = useState([]);
  const myUrl = `https://striveschool-api.herokuapp.com/api/profile/`;

  const random = Math.floor(Math.random() * 20);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInfo(myUrl);
      setData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  console.log(`hey it's me`, data);

  return (
    <>
      <div className="col-4">
        {!data ? (
          <h1>Loading....</h1>
        ) : (data.map(person => (
          <li key={person.id} class="list-group-item">{person.name}</li>
        ))
          
        )}
      </div>
    </>
  );
};

export default PyMk;