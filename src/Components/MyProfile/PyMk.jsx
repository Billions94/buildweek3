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
      <div className="">
        {!data ? (
          <h1>Loading....</h1>
        ) : (data.map(person => (
          <div key={person.id}>
            <div className="d-flex">
            <img className="roundpic" src={person.image} alt=""  width="60px"/>
          <a class="list-group-item ml-2">{person.name} {person.surname}</a>
            </div>
          <a href="#">{person.email}</a>
          </div>
        ))
          
        )}
      </div>
    </>
  );
};

export default PyMk;
