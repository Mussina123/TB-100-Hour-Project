import { useEffect } from "react"
import { useDiaryContext } from "../hooks/useDiaryContext"


import DiaryDetails from "../components/DiaryDetails"
import DiaryForm from "../components/DiaryForm"


const Home = () => {
    const {diary, dispatch} = useDiaryContext()

    useEffect(() => {
        const fetchDiary = async () => {
            const response = await fetch('http://localhost:5000/api/diary') 
            const json = await response.json()


            if(response.ok) {
                dispatch({type: 'SET_DIARY', payload: json})
            }

        }
        
        fetchDiary()
    }, [dispatch])

    return(
        <div className="home flex justify-center gap-10 ">
            <div className="grid grid-rows-2 grid-flow-col gap-4">
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
