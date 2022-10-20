import HomeBlog from "../componen/HomeBlog/HomeBlog"
import Beauty from "../componen/Beauty/Beauty"
import SiteFooter from "../componen/SiteFooter/SiteFooter"

function Blog (){
    return(
        <div>
            <HomeBlog></HomeBlog>
            <Beauty></Beauty>
            <SiteFooter></SiteFooter>
        </div>
    )
}

export default Blog