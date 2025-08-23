import { JSX } from "react";

import workedat from './workedat.json'

export default function Experience(): JSX.Element {
    return (
        <div className="min-h-screen !dark:bg-gray-50 py-12 px-4 md:px-10">
            <div className="max-w-8xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Experience
                    </h1>
                </div>

                <div className="flex flex-col items-center justify-center">
                    {/* Experience Cards */}
                <div className="space-y-8">
                    {workedat.map((job, index) => (
                        <div 
                            key={index} 
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl dark:shadow-gray-700/50 dark:hover:shadow-gray-700/70 transition-shadow duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
                        >
                            <div className="p-6 md:p-8">
                                {/* Header Section */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            {job.role}
                                        </h2>
                                        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                                            {job.company}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            {job.location}
                                        </p>
                                    </div>
                                    <div className="mt-3 md:mt-0 md:text-right">
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                                            {job.startDate} - {job.endDate}
                                        </p>
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="mb-6">
                                    <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {job.description}
                                    </div>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-3">
                                        Technologies
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {job.technologies.map((tech, techind) => (
                                            <span 
                                                key={techind} 
                                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-900/70 transition-colors duration-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
}