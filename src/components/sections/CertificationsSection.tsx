import React from "react";
import { useTranslation } from 'react-i18next';
import { Award, Calendar } from "lucide-react";

const CertificationsSection = () => {
    const { t } = useTranslation();

    // Cast to array safely
    const certifications = t('certifications.items', { returnObjects: true }) as Array<{
        name: string;
        issuer: string;

        file?: string;
    }>;

    return (
        <div className="h-full">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant bg-white h-full flex flex-col">
                {/* Header */}
                <div className="relative h-48 sm:h-64 p-6 sm:p-8 flex items-end" style={{
                    backgroundImage: "url('/background-section2.png')",
                    backgroundSize: "150%",
                    backgroundPosition: "top right"
                }}>
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/20"></div>

                    <div className="relative z-10 w-full">
                        <h2 className="text-2xl sm:text-3xl font-display text-white font-bold mb-2">
                            {t('certifications.title')}
                        </h2>
                        <div className="h-1 w-20 bg-pulse-500 rounded-full"></div>
                    </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 bg-white border-x border-b border-gray-100 rounded-b-2xl sm:rounded-b-3xl">
                    <div className="grid gap-4">
                        {Array.isArray(certifications) && certifications.map((cert, idx) => {
                            const CardContent = (
                                <>
                                    <div className="p-2.5 bg-pulse-50 rounded-lg text-pulse-600 shrink-0 group-hover:bg-pulse-100 transition-colors">
                                        <Award size={20} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2">
                                            <h3 className="font-semibold text-gray-900 leading-tight mb-1 group-hover:text-pulse-700 transition-colors line-clamp-2">
                                                {cert.name}
                                            </h3>
                                            {cert.file && (
                                                <svg className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-600 mb-2 truncate">{cert.issuer}</p>
                                        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium bg-white px-2 py-1 rounded-md border border-gray-100 w-fit group-hover:border-pulse-200 transition-colors">


                                        </div>
                                    </div>
                                </>
                            );

                            return cert.file ? (
                                <a
                                    key={idx}
                                    href={cert.file}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 bg-gray-50/50 hover:bg-white group cursor-pointer"
                                >
                                    {CardContent}
                                </a>
                            ) : (
                                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 bg-gray-50/50 hover:bg-white group">
                                    {CardContent}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificationsSection;
