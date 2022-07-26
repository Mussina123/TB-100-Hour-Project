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
                    <div className="flex flex-col ml-6 mt-6 shadow-lg shadow-slate-500/20 w-40 rounded-xl" >
                        <h1 className="text-3xl font-semibold"  key={diary._id}> {diary.item}</h1>
                        <h3 className="italic"> Calories: {diary.calories}</h3>
                        <h3 className="text-slate-600"> Serving: {diary.serving}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home 
