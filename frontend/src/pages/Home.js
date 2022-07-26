import { useEffect, useState } from "react"

import DiaryDetails from "../components/DiaryDetails"
import DiaryForm from "../components/DiaryForm"

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
                {diary && diary.map((diary) => (
                    <DiaryDetails key={diary._id} diary={diary}/>
                ))}
            </div>
            <DiaryForm />
        </div>
    )
}

export default Home 
