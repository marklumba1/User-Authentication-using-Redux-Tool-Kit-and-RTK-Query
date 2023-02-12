
import SideBar from "../types/SidebarInterface";


const SideBar = (data : SideBar) => {
    return ( 
        <div>Hello From SideBar
            {data.username}
        </div>
        
     );
}
 
export default SideBar;