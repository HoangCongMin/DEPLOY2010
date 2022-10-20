import MainSlider from'../componen/MainSlider/MainSlider'
import CoreServices from'../componen/CoreServices/CoreServices'
import ProfessionalTeams from'../componen/ProfessionalTeams/ProfessionalTeams'
import ContactUs from'../componen/ContactUs/ContactUs'
import SiteFooter from'../componen/SiteFooter/SiteFooter'


function Home() {
  return (
    <>
   
        <MainSlider></MainSlider>
        
    
    <CoreServices></CoreServices>
    <ProfessionalTeams></ProfessionalTeams>
    <ContactUs></ContactUs>
    <SiteFooter></SiteFooter>
    </>
  );
}

export default Home;
