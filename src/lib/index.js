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
    e.preventDefault(e)
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

        } else {
            console.log(`Ooops we got an error while fetching response`)
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
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZjUwMGE4OTBjYzAwMTVjZjA3ZTIiLCJpYXQiOjE2MzM5NDA3MzcsImV4cCI6MTYzNTE1MDMzN30.b4fHuXDwJcxn6c0Vu-wZ1dWzMlTBO6elAUs0C_9xB4o