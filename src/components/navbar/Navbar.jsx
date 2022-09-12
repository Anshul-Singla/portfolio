import { defaults } from "gh-pages"

const Navbar = ()=>{
    return(
        <div className="n-wrapper">
            <div className="left-side">
                <div className="name">Anshul</div>
                <span>Toggle Button</span>
            </div>
            <div className="right-side">
                <ul className="list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Resume</li>
                </ul>
            </div>

        </div>
    )
}
export default Navbar;