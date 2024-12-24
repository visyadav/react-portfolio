
import { Document, Page } from 'react-pdf';
function About() {
    return (
        <>
            <div className="max-w-screen-lg mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">About Me</h1>
                <div className="bg-white shadow-lg p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">My Resume</h2>
                    <Document file="/path/to/your/resume.pdf">
                        <Page pageNumber={1} />
                    </Document>
                </div>
            </div>
        </>
    )
}

export default About
