import "./App.css";
import HomePage from "./Pages/HomePage";
import ScrollToTop from "react-scroll-to-top";
import Navigation from "./Components/HomePage/Navigation";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import GalleryPage from "./Pages/GalleryPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Footer from "./Components/HomePage/Footer";
import MessengerCustomerChat from "react-messenger-customer-chat";

function App() {
    return (
        <div className="App font-open">
            <ScrollToTop
                smooth
                color="#FE1A00"
                viewBox="0 0 150 250"
                style={{ borderRadius: "20%", right: 30, bottom: 100 }}
            />
            
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/about" element={<AboutPage />}></Route>
                <Route path="/contact" element={<ContactPage />}></Route>
                <Route path="/gallery" element={<GalleryPage />}></Route>
                
                <Route path="*" element={<NotFoundPage />}></Route>
            </Routes>
            <Footer />
            <MessengerCustomerChat pageId="102341252721931" appId="594155188895748" />
        </div>
    );
}

export default App;
