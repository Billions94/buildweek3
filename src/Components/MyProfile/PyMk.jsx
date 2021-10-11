import { useState, useEffect } from "react"; 
import { fetchInfo } from "../../lib";

const PyMk = () => {
  const [data, setData] = useState([]);
  const myUrl = `https://striveschool-api.herokuapp.com/api/profile/`;



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
        {!data ? (
          <h1>Loading....</h1>
        ) : (data.map(person => (
          <li className="d-flex pymk-li" key={person.id}>
            <a className="d-flex pymk-a">
            <img className="roundpic" src={person.image} alt=""  width="50px" height="50px"/>
          <div class="ml-2">
          <h3 className="text-dark text-left pymkh6p"><strong>{person.name}</strong> <strong>{person.surname}</strong></h3>
          <p className="text-muted text-left pymkh6p">{person.title}</p>
          </div>
            </a>
          <div className="mb-2 pymkdiv">
          <button class="btn btn-primary pymkbtn text-muted ml-5"><span className="pymkbtnspan">Message</span></button>
          </div>
          </li>
        ))
          
        )}
      </>
  );
};

export default PyMk;
