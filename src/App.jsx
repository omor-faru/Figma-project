import Header from './Components/sheared/Header'
import './index.css'
import './App.css'
import Banner from './Components/landingUi/Banner'
import Clients from './Components/landingUi/Clients'
import Community from './Components/landingUi/Community'
import Membership from './Components/landingUi/Membership'
import Interaction from './Components/landingUi/interaction'
import Achievment from './Components/landingUi/Achievment'
import CustomerSection from './Components/landingUi/CustomerSection'
import BlogSection from './Components/landingUi/BlogSectionn'
import LowerPart from './Components/landingUi/LowerPart'
import UnlockUi from './page/UnlockUi'
import Footer from './Components/landingUi/Footer'


function App() {
  
  return (
    <>
     <Header/>
    <Banner/>
    <Clients/>
    <Community/>
    <Membership/>
    <Interaction/>
    <Achievment/>
    <UnlockUi/>
    <CustomerSection/>
    <BlogSection/>
    <LowerPart/>
    <Footer/>
    </>
  )
}

export default App

