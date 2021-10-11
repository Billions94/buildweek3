// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZjUwMGE4OTBjYzAwMTVjZjA3ZTIiLCJpYXQiOjE2MzM5NDA3MzcsImV4cCI6MTYzNTE1MDMzN30.b4fHuXDwJcxn6c0Vu-wZ1dWzMlTBO6elAUs0C_9xB4o"

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



// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZjUwMGE4OTBjYzAwMTVjZjA3ZTIiLCJpYXQiOjE2MzM5NDA3MzcsImV4cCI6MTYzNTE1MDMzN30.b4fHuXDwJcxn6c0Vu-wZ1dWzMlTBO6elAUs0C_9xB4o