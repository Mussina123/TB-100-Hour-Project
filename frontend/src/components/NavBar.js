import { Link } from "react-router-dom"

const NavBar = () => {
    return (
       <header>
         <div className="contianer text-4xl pl-10 bg-sky-200 h-20 font-extrabold pt-4">
            <Link to='/'>
                <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Food Diary Log</h1>
            </Link>
        </div>
       </header>
    )
}

export default NavBar