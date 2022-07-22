import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ErrorPage from "./pages/Error";

const App = () => {
    return (
        <>
            <BrowserRouter basename="/the-arc-vantage">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/about" element={<AboutPage />}></Route>
                    <Route path="/contact" element={<ContactPage />}></Route>
                    <Route path="*" element={<ErrorPage />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default App;
