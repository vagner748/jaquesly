import Hero from './components/Hero/Hero.jsx'
import SocialProof from './components/SocialProof/SocialProof.jsx'
import Pain from './components/Pain/Pain.jsx'
import Diagnosis from './components/Diagnosis/Diagnosis.jsx'
import HowItWorks from './components/HowItWorks/HowItWorks.jsx'
import Deliverables from './components/Deliverables/Deliverables.jsx'
import ForWho from './components/ForWho/ForWho.jsx'
import Anchor from './components/Anchor/Anchor.jsx'
import PriceBox from './components/PriceBox/PriceBox.jsx'
import Letter from './components/Letter/Letter.jsx'
import Authority from './components/Authority/Authority.jsx'
import Faq from './components/Faq/Faq.jsx'
import FinalCta from './components/FinalCta/FinalCta.jsx'
import Footer from './components/Footer/Footer.jsx'

// UX Enhancements
import ScrollProgress from './components/ScrollProgress/ScrollProgress.jsx'
import StickyCtaBar from './components/StickyCtaBar/StickyCtaBar.jsx'
import BackToTop from './components/BackToTop/BackToTop.jsx'
import ExitIntent from './components/ExitIntent/ExitIntent.jsx'

export default function App() {
    return (
        <>
            {/* UX globals */}
            <ScrollProgress />
            <StickyCtaBar />
            <BackToTop />
            <ExitIntent />

            {/* Sections */}
            <Hero />
            <SocialProof />
            <Pain />
            <Diagnosis />
            <HowItWorks />
            <Deliverables />
            <ForWho />
            <Letter />
            <Authority />
            <Anchor />
            <PriceBox />
            <Faq />
            <FinalCta />
            <Footer />
        </>
    )
}
