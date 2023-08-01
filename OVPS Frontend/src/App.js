import UserProfile from './dashboard/prof';
import 'react-router-dom';  
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Sig from './Signup/Signup';
import Sidebar from './dashboard/dashboard';
import LandingPage from './landingpage';
import TextDisplay from './Morinfo/Moreinfo';
import dash from './dashboard/dash1';
import About from './dashboard/About';
import Stats from './dashboard/Stats';
import PreSubscription from './dashboard/Contact';
import ContactForm from './dashboard/Contact';
import HomePage from './Landing/Home';
import HelpPage from './Landing/Help';
import Dash1 from './dashboard/dash1';
import WorkPage from './dashboard/dashboard';
import PaymentPage from './dashboard/dash/payment';
import PriceList from './dashboard/dash/PolicyPrice';
import Login from './Login/login';
import CompanyTable from './dashboard/dash/ExisPol';
import FeedbackPage from './Landing/Feed';

// import SignUpLogin from './Login&signup/SignUpLogin';
// import LoginPage from './Login/login';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path = '/signup' element={<Sig/>}/> 
      <Route path = '/dash' element={<Sidebar/>}/>
      <Route path = '/prof' element = {<UserProfile/>}/>
      <Route path='/Moreinfo' element = {<TextDisplay/>}/>
      <Route path='/About' element ={<About/>}/>
      <Route path='/Stats' element = {<Stats/>}/>
      <Route path='/Contact' element = {<ContactForm/>}/>
      <Route path='/Home' element = {<HomePage/>}/>
      <Route path='/Help' element = {<HelpPage/>}/>
      <Route path='/dash1' element = {<Dash1/>}/>
      <Route path='/dashboard' element ={<WorkPage/>}/>
      <Route path='/payment' element={<PaymentPage/>}/>
      <Route path='/PolicyPrice' element ={<PriceList/>}/>
      <Route path='/ExisPol' element={<CompanyTable/>}/>
      <Route path='/Feed' element={<FeedbackPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}


export default App