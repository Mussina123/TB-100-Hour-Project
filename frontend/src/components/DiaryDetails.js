import { useDiaryContext } from "../hooks/useDiaryContext"

const DiaryDetails = ({diary}) => {

    const {dispatch} = useDiaryContext()

    const handleClick = async () => {
        const response = await fetch('http://localhost:5000/api/diary/' + diary._id, {
            method: 'DELETE', 
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_DIARY', payload: json})
        }
    }


    return (
        <div className="flex flex-col ml-6 mt-6 shadow-lg shadow-slate-500/20 w-40 rounded-xl" >
            <h1 className="text-3xl font-semibold"  key={diary._id}> {diary.item}</h1>
            <h3 className="italic"> Calories: {diary.calories}</h3>
            <h3 className="text-slate-600"> Serving: {diary.serving}</h3>
            <h3 className="text-slate-600"> Date: {diary.createdAt}</h3>
            <span onClick={handleClick}>Delete</span>
    </div>
    )
}

export default DiaryDetails
