import OurServices from '../componen/OurServices/OurServices'
import BeautyConsultation from '../componen/BeautyConsultation/BeautyConsultation'
import ServicesFAQ from'../componen/ServicesFAQs/ServicesFAQ'
import SiteFooter from'../componen/SiteFooter/SiteFooter'

function Services (){
    return(
        <div>
            <OurServices></OurServices>
            <BeautyConsultation></BeautyConsultation>
            <ServicesFAQ></ServicesFAQ>
            <SiteFooter></SiteFooter>
        </div>
    )
}

export default Services