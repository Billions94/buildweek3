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
      const exp = await response.json();
      if(response.ok){
        
      }
      setFeed(exp);
        
    } catch (e) {
      console.log(e);
    }
  };

  let slicedFeed = feed.reverse().slice(0, 188);

  useEffect(() => {
    fetchFeed();
    
    console.log(feed);
  }, [feed]);

  const reversedFeed = slicedFeed

  return (
    <>
      <StartAPost smShow={smShow} setSmShow={setSmShow} fetchFeed={fetchFeed}/>
      <br />
      <br />
      <ActualFeed reversedFeed={reversedFeed} />
    </>
  );
};

export default MainFeedSection;
