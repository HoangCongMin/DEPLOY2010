import Homenew from "../componen/Homenew/Homenew"
import Aboutnew from '../componen/Aboutnew/Aboutnew'
import Mainsvnew from "../componen/Mainsvnew/Mainsvnew"
import TheBlog from "../componen/TheBlog/TheBlog"
import Requestcallservices from "../componen/Requestcallservices/Requestcallservices"
import SiteFooter from "../componen/SiteFooter/SiteFooter"


function Hometow (){
    return(
        <div>
           <Homenew></Homenew>
           <Aboutnew></Aboutnew>
           <Mainsvnew></Mainsvnew>
           <TheBlog></TheBlog>
           <Requestcallservices></Requestcallservices>
           <SiteFooter></SiteFooter>
        </div>
    )
}

export default Hometow