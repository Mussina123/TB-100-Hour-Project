import { useEffect, useState } from "react"

import DiaryDetails from "../components/DiaryDetails"
import DiaryForm from "../components/DiaryForm"

const Home = () => {

    const [diary, setDiary] = useState([])

    useEffect(() => {
        const fetchDiary = async () => {
            const response = await fetch('http://localhost:5000/api/diary') 
            const data = await response.json()


            if(response.ok) {
                setDiary(data) // gives back an array of json data 
                console.log(data)
            }

        }
        
        fetchDiary()
    }, [])

    return(
        <div className="home flex flex-row justify-center gap-10">
            <div className="flex ">
                {diary && diary.map((diary) => (
                    <DiaryDetails key={diary._id} diary={diary}/>
                ))}
            </div>
            <section className="">
            <DiaryForm />
            </section>
     
        </div>
    )
}

export default Home 
