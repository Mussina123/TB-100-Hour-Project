import { Link } from "react-router-dom"

const NavBar = () => {
    return (
       <header>
         <div className="contianer">
            <Link to='/'>
                <h1>Food Diary Log</h1>
            </Link>
        </div>
       </header>
    )
}

export default NavBar