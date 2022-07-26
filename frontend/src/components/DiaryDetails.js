const DiaryDetails = ({diary}) => {
    return (
        <div className="flex flex-col ml-6 mt-6 shadow-lg shadow-slate-500/20 w-40 rounded-xl h-36" >
            <h1 className="text-3xl font-semibold"  key={diary._id}> {diary.item}</h1>
            <h3 className="italic"> Calories: {diary.calories}</h3>
            <h3 className="text-slate-600"> Serving: {diary.serving}</h3>
            <h3 className="text-slate-600"> Date: {diary.createdAt}</h3>
    </div>
    )
}

export default DiaryDetails
