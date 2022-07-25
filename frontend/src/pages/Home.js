import { useEffect, useState } from "react"

const Home = () => {

    const [diary, setDiary] = useState([])

    useEffect(() => {
        const fetchDiary = async () => {
            const response = await fetch('http://localhost:5000/api/diary') 
            const json = await response.json()


            if(response.ok) {
                setDiary(json) // gives back an array of json data 
                console.log(json)
            }

        }
        
        fetchDiary()
    }, [])

    return(
        <div className="home">
            <div>
                {diary.map((diary) => (
                    <h1 className="text-2xl"  key={diary._id}>{diary.item}</h1>
                ))}
            </div>
        </div>
    )
}

export default Home 
