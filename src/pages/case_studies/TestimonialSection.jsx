import Testimonials from '../../components/Testimonials'

const TESTIMONIALS = [
    {
        quote: 'TEPS truly elevated our event to the next level with their seamless access and RSVP management services. The feedback from our guests regarding the access management process has been remarkable. Kudos to TEP\'s Professional and Congenial Staff! We highly recommend their services for all events.',
        name: 'Cre8ive Workflow',
        logo: '/dl27.png',
    },
    {
        quote: 'TEPS made check-in feel invisible. Guests just walked in, and our team could finally focus on the event instead of the queue.',
        name: 'Sarah Johnson, Alte Cultural Festival',
        logo: '/dl1.png',
    },
    {
        quote: 'Managing multiple guest tiers used to be our biggest headache. With TEPS, every attendee was verified and routed without a single bottleneck.',
        name: 'Michael Chen, NSIA Prize for Innovation',
        logo: '/dl2.png',
    },
    {
        quote: 'Coordinating a Presidential-level event across two venues sounded impossible until TEPS gave us real-time visibility over every guest.',
        name: 'Elena Rodriguez, RenewHer Gala & Awards',
        logo: '/dl3.png',
    },
    {
        quote: 'From registration to reconciliation, TEPS brought structure to a multi-city tour that could easily have spiralled into chaos.',
        name: 'JDOT 2025 Operations Team',
        logo: '/dl4.png',
    },
]

const LOGOS = Array.from({ length: 18 }, (_, i) => ({
    src: `/dl${i + 1}.png`,
    name: `Client ${i + 1}`,
}))

function TestimonialSection() {
    return (<>  
        
        <Testimonials testimonials={TESTIMONIALS} logos={LOGOS} />
    </>)
}

export default TestimonialSection
