import ActualFeed from "./ActualFeed";
import StartAPost from "./StartAPost";
import { useState, useEffect } from "react";

const MainFeedSection = () => {
  let [feed, setFeed] = useState([]);
  const [smShow, setSmShow] = useState(false);

  const fetchFeed = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZjUwMGE4OTBjYzAwMTVjZjA3ZTIiLCJpYXQiOjE2MzM5NDA3MzcsImV4cCI6MTYzNTE1MDMzN30.b4fHuXDwJcxn6c0Vu-wZ1dWzMlTBO6elAUs0C_9xB4o",
          },
        }
      );
     
      if(response.ok){ 
         const exp = await response.json();
        let slicedFeed = exp.reverse().slice(0, 5);
         setFeed(slicedFeed);
         console.log(slicedFeed)
      }
     
        
    } catch (e) {
      console.log(e);
    }
  };

 

  useEffect(() => {
    fetchFeed();
    console.log(feed);
  }, []);

 

  return (
    <>
      <StartAPost smShow={smShow} setSmShow={setSmShow} fetchFeed={fetchFeed}/>
      <br />
      <br />
      <ActualFeed reversedFeed={feed} fetchFeed={fetchFeed}/>
    </>
  );
};

export default MainFeedSection;
