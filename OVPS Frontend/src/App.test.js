import { render, screen } from '@testing-library/react';
import App from './App';
// import Log from './Login/login';
 import Sig from './Signup/Signup';
import Sidebar from './dashboard/dashboard';
import LandingPage from './landingpage';
import TextDisplay from './Morinfo/Moreinfo';
import About from './dashboard/About';
import Stats from './dashboard/Stats';
import ContactForm from './dashboard/Contact';
import HomePage from './Landing/Home';
import Nav1 from './dashboard/dash1';
import PriceList from './dashboard/dash/PolicyPrice';


test('renders learn react link', () => {
  render(<Sig />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
