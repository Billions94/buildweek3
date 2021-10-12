import { useState, useEffect, setState } from "react";
import { fetchInfo } from "../lib";




const UserProfile = (props) =>{
        const [data, setData] = useState([]);
        const myUrl = `https://striveschool-api.herokuapp.com/api/profile/`;
      
        const [uid, SetUid] = useState('');
        const { id } = props.match.params;
      
        useEffect(() => {
          if (typeof (id) !== 'undefined') {
            SetUid(id);
          }
        }, [id])
        console.log(uid)
      
      /* 
        useEffect(() => {
          const fetchData = async () => {
            const data = await fetchInfo(myUrl + id);
            setData(data);
            console.log(data);
          };
          fetchData();
        }, []);
 */
    return(
        <>
        </>
    )
}

export default UserProfile