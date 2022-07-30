import { useEffect } from "react"
import { useDiaryContext } from "../hooks/useDiaryContext"


import DiaryDetails from "../components/DiaryDetails"
import DiaryForm from "../components/DiaryForm"


const Home = () => {
    const {diary, dispatch} = useDiaryContext()

    useEffect(() => {
        const fetchDiary = async () => {
            const response = await fetch('http://localhost:5000/api/diary') 
            const data = await response.json()


            if(response.ok) {
                dispatch({type: 'SET_DIARY', payload: data})
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
