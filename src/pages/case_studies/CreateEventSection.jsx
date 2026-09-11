import { Link } from "react-router-dom";

function CreateEventSection({ onScheduleDemo }) {
    return (
        <section
            className="relative isolate overflow-hidden bg-ink bg-cover bg-center py-20"
            style={{ backgroundImage: "url(/built1.png)" }}
        >
            <div className="absolute inset-0 bg-blue/80" />
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
                <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
                    <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                        Build Your Success Story Today!
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/create-event"
                            className="inline-flex items-center justify-center rounded-[12px] bg-white px-7 py-3.5 text-sm font-semibold text-blue transition-colors hover:bg-white/90"
                        >
                            Create Event Now
                        </Link>
                        <button
                            type="button"
                            onClick={onScheduleDemo}
                            className="inline-flex items-center justify-center rounded-[12px] border border-white px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                        >
                            Schedule a Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CreateEventSection;
