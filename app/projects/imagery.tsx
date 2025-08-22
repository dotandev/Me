'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import portProject from "@/public/placeholder.svg";
import globalData from '@/app/data/projects.json'; 
import { motion } from "framer-motion";
import { XIcon } from "lucide-react";
// import {shuffle} from "./[project_id]/lay"

// Define types for the project and project items
interface Project {
    id?: string;
    name: string;
    description: string;
    tags: string[];
    category?: string;
    details: string;
    searchName?: string;
}

interface ProjectItemProps {
    project: Project;
}

export const ProjectsImage = () => {
    return (
        <div className="rounded-3xl border-4 border-[#DB6516] w-[60rem]">
            <Image src={portProject} alt="imagery" width={1000} height={1000} className="rounded-4xl object-fill" />
        </div>
    )
}


export const ProjectsImagery = () => {
    return (
        <div className="mx-28">
            <ProjectsImage />
            <h1 className="text-3xl mt-2 text-center">A Design Thinking Session,<span className="text-[#A25725]"> @nithub -- Sep 2023.</span></h1>
        </div>
    )
}

const allProjects: any[] = globalData.projectList.projects;

// export const ProjectSearch = () => {
//     const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//     const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
//     const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);

//     // Handle category click
//     const handleCategoryClick = (category: string) => {
//         const newCategory = selectedCategory === category ? null : category;
//         setSelectedCategory(newCategory);
//         filterProjects(newCategory, selectedLanguage);
//     };

//     // Handle language click
//     const handleLanguageClick = (language: string) => {
//         const newLanguage = selectedLanguage === language ? null : language;
//         setSelectedLanguage(newLanguage);
//         filterProjects(selectedCategory, newLanguage);
//     };

//     // Function to filter projects
//     const filterProjects = (category: string | null, language: string | null) => {
//         let filtered = allProjects;

//         if (category) {
//             filtered = filtered.filter(project => project.category === category);
//         }
//         if (language) {
//             filtered = filtered.filter(project =>
//                 project.languages.includes(language)
//             );
//         }

//         setFilteredProjects(filtered);
//     };

//     return (
//         <div className="mx-28">
//             {/* Categories */}
//             <h2 className="text-2xl font-bold mt-4 mb-2">Categories</h2>
//             <div className="flex flex-wrap gap-2">
//                 {categories.map(category => (
//                     <SearchTab
//                         key={category}
//                         content={category}
//                         isActive={selectedCategory === category}
//                         onClick={() => handleCategoryClick(category)}
//                     />
//                 ))}
//             </div>

//             {/* Languages */}
//             <h2 className="text-2xl font-bold mt-4 mb-2">Languages</h2>
//             <div className="flex flex-wrap gap-2">
//                 {languages.map(language => (
//                     <SearchTab
//                         key={language}
//                         content={language}
//                         isActive={selectedLanguage === language}
//                         onClick={() => handleLanguageClick(language)}
//                     />
//                 ))}
//             </div>

//             {/* Project List */}
//             <div className="mt-6">
//                 <CreativeProjectList projects={filteredProjects} />
//             </div>
//         </div>
//     );
// };

// Reusable Search Tab Component with Active Styling
interface SearchTabProps {
    content: string;
    onClick: () => void;
    isActive: boolean;
}

// export const SearchTab: React.FC<SearchTabProps> = ({ content, onClick, isActive }) => {
//     return (
//         <div
//             onClick={onClick}
//             className={`cursor-pointer px-6 py-2 rounded-xl border-2 text-lg font-semibold transition-all ${
//                 isActive
//                     ? "bg-black text-white border-black"
//                     : "border-gray-400 text-gray-700 hover:bg-gray-200"
//             }`}
//         >
//             {content}
//         </div>
//     );
// };

export const ProjectItem = ({ project }: { project: Project }) => {
    const handleRedirect = (url: string) => () => {
        window.open(url, "_self");
    }
    return (
        <motion.div
            className="relative p-6 bg-white rounded-lg shadow-md cursor-pointer overflow-hidden group"
            whileHover="hover"
            onClick={handleRedirect(`/projects/${project.searchName}`)}
            initial="rest"
            animate="rest"
        >
            <motion.div
                className="absolute inset-0 pointer-events-none"
                variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 }
                }}
            >
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <rect
                        width="100%"
                        height="100%"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="4"
                        strokeDasharray="8 8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <animate
                            attributeName="stroke-dashoffset"
                            from="0"
                            to="32"
                            dur="1s"
                            repeatCount="indefinite"
                        />
                    </rect>
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="50%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>
            <div className="relative z-10">
                <div className="flex gap-5 mb-3">
                    <h1 className="text-2xl font-semibold mb-2 text-gray-800">{project.name} - </h1>
                    <p className="mt-[0.2rem] text-[#A25725]">{project.description}</p>
                </div>
                <p className="text-gray-600 mb-4 -mt-1">{project.details}</p>
                {(project.tags || []).map((tag) => (
                    <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 hover:bg-[#A25725] hover:text-white">
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    )
}

// Creative Project List Component
const categories = ["Backend", "Frontend", "ML", "Library", "Botany"];
const languages = ["JavaScript", "TypeScript", "Python", "Go", "Java", "R"];

export const ProjectSearch = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);

    // Handle category click
    const handleCategoryClick = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((item) => item !== category)
                : [...prev, category]
        );
    };

    // Handle language click
    const handleLanguageClick = (language: string) => {
        setSelectedLanguages((prev) =>
            prev.includes(language)
                ? prev.filter((item) => item !== language)
                : [...prev, language]
        );
    };

    // Function to filter projects based on selected categories and languages
    const filterProjects = () => {
        let filtered = allProjects;

        if (selectedCategories.length > 0) {
            filtered = filtered.filter((project) =>
                selectedCategories.includes(project.category)
            );
        }

        if (selectedLanguages.length > 0) {
            filtered = filtered.filter((project) =>
                project.languages.some((lang: string) => selectedLanguages.includes(lang))
            );
        }

        setFilteredProjects(filtered);
    };

    useEffect(() => {
        filterProjects();
    }, [selectedCategories, selectedLanguages]);

    return (
        <div className="mx-28">
            <h2 className="text-2xl font-bold mt-4 mb-2">Categories</h2>
            <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                    <SearchTab
                        key={category}
                        content={category}
                        isActive={selectedCategories.includes(category)}
                        onClick={() => handleCategoryClick(category)}
                    />
                ))}
            </div>

            <h2 className="text-2xl font-bold mt-4 mb-2">Languages</h2>
            <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                    <SearchTab
                        key={language}
                        content={language}
                        isActive={selectedLanguages.includes(language)}
                        onClick={() => handleLanguageClick(language)}
                    />
                ))}
            </div>

            <div className="mt-6">
                <CreativeProjectList theprojects={filteredProjects} />
            </div>
        </div>
    );
};


interface SearchTabProps {
    content: string;
    onClick: () => void;
    isActive: boolean;
}

export const SearchTab: React.FC<SearchTabProps> = ({ content, onClick, isActive }) => {
    return (
        <div className="relative flex gap-8">
            <div
                onClick={onClick}
                className={`cursor-pointer px-6 py-2 rounded-xl border-2 text-lg font-semibold transition-all 
                ${isActive
                    ? "bg-black text-white border-black"
                    : "border-gray-400 text-gray-700 hover:bg-gray-200"
                }`}
            >
                {content}
            </div>

            <div 
                className={`absolute top-0 right-0 mt-1 mr-1 ml-8 text-white bg-black rounded-full p-1 cursor-pointer transition-all 
                ${isActive ? "block" : "hidden"}`}
            >
                <XIcon size={30} />
            </div>
        </div>
    );
};


interface CreativeProjectListProps {
    theprojects: Project[];
}
export function CreativeProjectList({ theprojects = [] }: CreativeProjectListProps) {
    const [layout, setLayout] = useState<'grid' | 'flex'>('flex');
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

    if (!Array.isArray(theprojects) || theprojects.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <p className="text-gray-600">No projects available at the moment.</p>
            </div>
        );
    }

    let projects = theprojects;

    // let projects = shuffle(theprojects);

    // Calculate total pages based on items per page
    const totalPages = Math.ceil(projects.length / itemsPerPage);
    const startIdx = currentPage * itemsPerPage;
    const endIdx = Math.min((currentPage + 1) * itemsPerPage, projects.length);

    const layoutClass = layout === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-6';

    const handleTabClick = (page: number) => {
        setCurrentPage(page);
    };

    const renderTabs = () => {
        const tabs = [];
        const maxTabs = 4;

        if (totalPages <= maxTabs) {
            for (let i = 0; i < totalPages; i++) {
                tabs.push(
                    <button
                        key={i}
                        onClick={() => handleTabClick(i)}
                        className={`px-4 py-2 text-white rounded-md ${currentPage === i ? 'bg-[#A25725]' : 'bg-gray-500'}`}
                    >
                        {i + 1}
                    </button>
                );
            }
        } else {
            tabs.push(
                <button
                    key={0}
                    onClick={() => handleTabClick(0)}
                    className={`px-4 py-2 text-white rounded-md ${currentPage === 0 ? 'bg-[#A25725]' : 'bg-gray-500'}`}
                >
                    1
                </button>
            );

            if (currentPage > 2 && currentPage < totalPages - 3) {
                tabs.push(
                    <span key="ellipsis" className="px-4 py-2 text-gray-500">...</span>
                );
            }

            const start = Math.max(1, currentPage - 1);
            const end = Math.min(currentPage + 1, totalPages - 2);
            for (let i = start; i <= end; i++) {
                tabs.push(
                    <button
                        key={i}
                        onClick={() => handleTabClick(i)}
                        className={`px-4 py-2 text-white rounded-md ${currentPage === i ? 'bg-[#A25725]' : 'bg-gray-500'}`}
                    >
                        {i + 1}
                    </button>
                );
            }

            if (currentPage < totalPages - 3) {
                tabs.push(
                    <span key="ellipsis-end" className="px-4 py-2 text-gray-500">...</span>
                );
            }

            tabs.push(
                <button
                    key={totalPages - 1}
                    onClick={() => handleTabClick(totalPages - 1)}
                    className={`px-4 py-2 text-white rounded-md ${currentPage === totalPages - 1 ? 'bg-[#A25725]' : 'bg-gray-500'}`}
                >
                    {totalPages}
                </button>
            );
        }

        return tabs;
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 underline">Projects</h2>
                <button
                    onClick={() => setLayout(layout === 'grid' ? 'flex' : 'grid')}
                    className="px-4 py-2 bg-[#A25725] text-white rounded-md"
                >
                    Switch to {layout === 'grid' ? 'Flex' : 'Grid'}
                </button>
            </div>

            <div className={layoutClass}>
                {projects.slice(startIdx, endIdx).map((project) => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </div>

            <div className="mt-6 flex justify-center gap-4">
                {renderTabs()}
            </div>
        </div>
    );
}
