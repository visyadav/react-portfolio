const techStacks = [
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
    { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

function Ribbon() {
    return (
        <>
            <div className="h-1 bg-purple-800 rounded-full mx-4"></div>
            <div className="py-5">
                <h2 className="text-3xl font-bold text-center mb-6">Technical Stacks</h2>
                <div className="overflow-hidden relative w-full">
                    <div className="flex animate-scroll space-x-10">
                        {techStacks.map((stack, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-40 h-40 flex flex-col items-center justify-center   rounded-full p-4"
                            >
                                <img src={stack.logo} alt={stack.name} className="w-16 h-16 mb-2" />
                                <p className="text-sm font-medium text-gray-700">{stack.name}</p>
                            </div>
                        ))}
                        {/* Duplicate set for seamless looping */}
                        {techStacks.map((stack, index) => (
                            <div
                                key={`copy-${index}`}
                                className="flex-shrink-0 w-40 h-40 flex flex-col items-center justify-center  rounded-full p-4"
                            >
                                <img src={stack.logo} alt={stack.name} className="w-16 h-16 mb-2" />
                                <p className="text-sm font-medium text-gray-700">{stack.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ribbon;
