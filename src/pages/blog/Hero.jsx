import { useState } from 'react';

function Hero({ header = 'THE EXPERIENCE PLUG SYSTEMS BLOG', subHeader, year: controlledYear, onYearChange }) {
    const [internalYear, setInternalYear] = useState('All');
    const year = controlledYear ?? internalYear;
    const setYear = onYearChange ?? setInternalYear;
    const years = ['All', '2026', '2025', '2024', '2023'];

    const words = header.trim().split(/\s+/);
    const lastWord = words.pop();
    const restHeader = words.join(' ');

    return (
        <section className="mx-[10px] my-[10px] md:mx-[30px] md:my-[15px] rounded-lg overflow-hidden bg-white dark:bg-black">
            <div className="grid grid-cols-1 items-stretch md:h-[350px] md:[grid-template-columns:1fr_3fr]">
                <div className="flex flex-col justify-center px-6 py-8 md:px-12">
                    <h1 className="text-2xl md:text-3xl font-bold text-black dark:text-white leading-tight">
                        {restHeader}
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#3A72FF] leading-tight mb-6">
                        {lastWord}
                    </h2>

                    <select
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="w-full max-w-[200px] rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3A72FF] dark:bg-transparent dark:border-white dark:text-white"
                    >
                        {years.map((y) => (
                            <option key={y} value={y} className="bg-white text-black dark:bg-black dark:text-white">
                                {y}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="relative h-[220px] md:h-[350px]">
                    <img
                        src="/blog.png"
                        alt={lastWord}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
