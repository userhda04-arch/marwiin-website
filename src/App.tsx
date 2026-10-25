import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import reviews from './assets/reviews.json';
import { Main } from './components/Main';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Terms } from './components/Terms';
import { Privacy } from './components/Privacy';
import { Refund } from './components/Refund';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <>
                        <Navbar />
                        <Main />
                        <Pricing />
                        <Features />
                        <Reviews reviews={reviews} />
                        <FAQ />
                        <CallToAction />
                        <Footer />
                    </>
                } />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/refund" element={<Refund />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;