import { Heart, Mail, Download } from 'lucide-react';

const CtaFooter = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-lg border border-sky-100 bg-sky-50 p-12 text-center shadow-sm">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-sky-100">
                            <Heart className="h-8 w-8 text-sky-600" />
                        </div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        Ready to Collaborate?
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                        I'm always excited to work on innovative data projects and help organizations unlock the power of their data. Let's build something amazing together!
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="mailto:mukul.desai12@gmail.com"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 py-3 bg-sky-600 text-white hover:bg-sky-700"
                        >
                            <Mail className="h-4 w-4" />
                            Start a Conversation
                        </a>
                        <a
                            href="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Mukul_Desai_Resume-1759092999721.pdf"
                            download
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 py-3 border border-sky-200 text-sky-700 hover:bg-white bg-transparent"
                        >
                            <Download className="h-4 w-4" />
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaFooter;