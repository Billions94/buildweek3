// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZjUwMGE4OTBjYzAwMTVjZjA3ZTIiLCJpYXQiOjE2MzM5NDA3MzcsImV4cCI6MTYzNTE1MDMzN30.b4fHuXDwJcxn6c0Vu-wZ1dWzMlTBO6elAUs0C_9xB4o"


// USER PROFILES
// FETCH
// console.log(`hey there`)
export const fetchInfo = async (url) => {
    try {
        const response = await fetch((url),{
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZjUwMGE4OTBjYzAwMTVjZjA3ZTIiLCJpYXQiOjE2MzM5NDA3MzcsImV4cCI6MTYzNTE1MDMzN30.b4fHuXDwJcxn6c0Vu-wZ1dWzMlTBO6elAUs0C_9xB4o"
            }
            } )
        if(response.ok) {
            const data = response.json()
            console.log(`Here is your data`, data)
            return data

        } else {
            console.log(`Ooops we got an error while fetching response`)
        }
        
    } catch (error) {
        console.error(error)
    }
}


// USER EXPERIENCES
// FETCH

export const fetchUserExp = async (url) => {
    try {
        const response = await fetch((url),{
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZjUwMGE4OTBjYzAwMTVjZjA3ZTIiLCJpYXQiOjE2MzM5NDA3MzcsImV4cCI6MTYzNTE1MDMzN30.b4fHuXDwJcxn6c0Vu-wZ1dWzMlTBO6elAUs0C_9xB4o"
            }
            } )
        if(response.ok) {
            const data = response.json()
            console.log(`Here is your data`, data)
            return data

        } else {
            console.log(`Ooops we got an error while fetching response`)
        }
        
    } catch (error) {
        console.error(error)
    }
}


//POST

export const postUserExp = async (url, e, exp) => {
  
    try {
        const response = await fetch((url),{
            method: "POST",
            body: JSON.stringify(exp),
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZjUwMGE4OTBjYzAwMTVjZjA3ZTIiLCJpYXQiOjE2MzM5NDA3MzcsImV4cCI6MTYzNTE1MDMzN30.b4fHuXDwJcxn6c0Vu-wZ1dWzMlTBO6elAUs0C_9xB4o"
            }
            } )
        if(response.ok) {
            fetchUserExp(url)
            alert("POST was a success")

        } else {
            console.log(`Ooops we got an error while fetching response`)
            alert(`Ooops we got an error while fetching response`)
        }
        
    } catch (error) {
        console.error(error)
    }
}


// FETCH SINGLE EXPERIENCE

export const fetchSinglUserExp = async (url) => {
    try {
        const response = await fetch((url),{
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZjUwMGE4OTBjYzAwMTVjZjA3ZTIiLCJpYXQiOjE2MzM5NDA3MzcsImV4cCI6MTYzNTE1MDMzN30.b4fHuXDwJcxn6c0Vu-wZ1dWzMlTBO6elAUs0C_9xB4o"
            }
            } )
        if(response.ok) {
            const data = response.json()
            console.log(`Here is your data`, data)
            return data

        } else {
            console.log(`Ooops we got an error while fetching response`)
        }
        
    } catch (error) {
        console.error(error)
    }
}

// PUT SINGLE EXPERIENCE

export const putSinglUserExp = async (url, e, exp) => {
    e.preventDefault(e)
    try {
        const response = await fetch((url),{
            method: "PUT",
            body: JSON.stringify(exp),
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZjUwMGE4OTBjYzAwMTVjZjA3ZTIiLCJpYXQiOjE2MzM5NDA3MzcsImV4cCI6MTYzNTE1MDMzN30.b4fHuXDwJcxn6c0Vu-wZ1dWzMlTBO6elAUs0C_9xB4o"
            }
            } )
        if(response.ok) {
            fetchUserExp(url)
        } else {
            console.log(`Ooops we got an error while fetching response`)
        }
        
    } catch (error) {
        console.error(error)
    }
}


// DELETE SINGLE EXPERIENCE

export const deleteSingleUserExp = async (url) => {
    try {
        const response = await fetch((url),{
            method: "DELETE",
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZjUwMGE4OTBjYzAwMTVjZjA3ZTIiLCJpYXQiOjE2MzM5NDA3MzcsImV4cCI6MTYzNTE1MDMzN30.b4fHuXDwJcxn6c0Vu-wZ1dWzMlTBO6elAUs0C_9xB4o"
            }
            })
        if(response.ok) {
            fetchUserExp(url)
            alert("Deleted successfully")

        } else {
            console.log(`Ooops we got an error while fetching response`)
            alert("Ooops we got an error while fetching response")
        }
        
    } catch (error) {
        console.error(error)
    }
}



// export const toggleSubmit = async (values, expId) =>{


// try {
//     const response = await fetch(
//       `https://striveschool-api.herokuapp.com/api/profile/${user.id}/experiences`,
//       {
//         method: "POST",
//         body: JSON.stringify(values),
//         headers: {
//           "Content-Type": "application/json",
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZjUwMGE4OTBjYzAwMTVjZjA3ZTIiLCJpYXQiOjE2MzM5NDA3MzcsImV4cCI6MTYzNTE1MDMzN30.b4fHuXDwJcxn6c0Vu-wZ1dWzMlTBO6elAUs0C_9xB4o",
//         },
//       }
//     );
//     console.log(response);
//     if (response.ok) {
//       fetchExp();
//       setLgShow(false);
//     }
//   } catch (e) {
//     console.log(e);
//   }
// }
// // EDIT EXPERIENCE


// export const fetchExp = async (setData, id) => {
//     try {
//       const response = await fetch(
//         `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
//         {
//           headers: {
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZjUwMGE4OTBjYzAwMTVjZjA3ZTIiLCJpYXQiOjE2MzM5NDA3MzcsImV4cCI6MTYzNTE1MDMzN30.b4fHuXDwJcxn6c0Vu-wZ1dWzMlTBO6elAUs0C_9xB4o",
//           },
//         }
//       );
//       const exp = await response.json();
//         console.log("löl" + exp)
//       setData(exp);
//     } catch (e) {
//       console.log(e);
//     }
//   };



















// export const editExperience = async (id, user) => {

// const url = `https://striveschool-api.herokuapp.com/api/profile/${user}/experiences/${id}`

// try{
//    let exp = await fetchSinglUserExp(url)
//     console.log(exp)



// } catch (error){
//     console.error(error)
// }

// }




// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZjUwMGE4OTBjYzAwMTVjZjA3ZTIiLCJpYXQiOjE2MzM5NDA3MzcsImV4cCI6MTYzNTE1MDMzN30.b4fHuXDwJcxn6c0Vu-wZ1dWzMlTBO6elAUs0C_9xB4o