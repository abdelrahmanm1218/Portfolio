type Project = {
    id: string;
    project_name: string;
    thumbnail: string;
    short_description: string; //business problem
    description?:string; // business solution
    my_role?: string[];
    start_date: string;
    end_date: string;
    technologies: string[];
    link: string;
    classified: boolean;
    currently_working: boolean;
}

export function useProjects(){
    const projects: Project[] = [
        {
            id: "PR-04",
            project_name: "Hanbee3",
            thumbnail: "/images/projects/og-image.jpg",
            short_description: "Digital call center & telesales solutions for businesses and telesales agents",
            description: 'Digital call center & telesales solutions for businesses and telesales agents',
            start_date: "10/2025",
            end_date:"02/2026",
            technologies: ["Frappe", "ERPNext", "Python", "Angular"],
            link: "https://hanbee3.com/home",
            classified: false,
            currently_working: false,
        },

        {
            id: "PR-02",
            project_name: "Bus14",
            thumbnail: "/images/projects/bus14_cover.jpeg",
            short_description: "School and parents lacked real-time visibility into student transportation activites, making it difficut to track attendance, monitor trips, and ensure student safety during daily school transportation",
            description: "Transportation management system that enabled real-time trip tracking, automated attendance workflow, and communication between parent, drivers, and admins",
            start_date: "08/2025",
            end_date: "10/2025",
            technologies: ["Frappe", "ERPNext", "Python", "Angular"],
            link: "https://portal.bus14.co/",   
            classified: false,
            currently_working: false,
        },

        {
            id: "PR-03",
            project_name: "Praxis",
            thumbnail: "/images/projects/Praxis.png",
            short_description: "Trainees/Fresh Grads needed practical, real-world experience beyond theoretical learning, while compaines required a scalable way to train their teams and  track progress effectively",
            description: "developed a platofrom that manages trainees enrollment, payments, project participation, and AI-powered training content for both individuals and corporate teams",
            start_date: "12/2024",
            end_date: "02/2026",
            technologies: ["TypeScript","Angular",  "Ant-Design", "Git-Flow", "Frappe", "ERPNext", "Python"],
            link: "https://praxis.homains.eu/",
            classified: false,
            currently_working: false,

        },

        {
            id: "PR-07",
            project_name: "Catalyx",
            thumbnail: "/images/projects/Blue White Professional Minimal Brand Logo_20260213_220447_0000.png",
            short_description: "Portfolio website for Catalyx solutions",
            start_date: "12/2025",
            end_date:"Present",
            technologies: ["TypeScript", "Vue"],
            link: "https://catalyx-delta.vercel.app/",
            classified: false,
            currently_working: true,
        },
        
        {
            id: "PR-01",
            project_name: "Personal Portfolio",
            thumbnail: "/images/projects/am-logo.png",
            short_description: "Personal portfolio to have a professional digital presence",
            description: "Personal portfolio to have a professional digital presence",
            start_date: "08/2025",
            end_date: "Present",
            technologies: ["Vue.js",  "Vuetify", "Nuxt.js",  "TypeScript", "SEO"],
            link: "https://abdelrahman-mahmoud-portfolio.vercel.app/",   
            classified: false,
            currently_working: true,
        },
         {
            id: "PR-06",
            project_name: "Techniyyat",
            thumbnail: "https://placehold.co/600x400?text=Techniyyat",
             short_description: "Open source project, that provide community for people to support the right cause",
            description: "Open source project, that provide community for people to support & defend the right cause",
             start_date: "03/2025",
             end_date: "08/2025",
             technologies: ["TypeScript","Vue",  "Vuetify", "Git-Flow"],
             link: "https://www.techniyyat.com/",
             classified: true, 
            currently_working: false,
         },
        
        {
            id: "PR-05",
            project_name: "Tokens United",
            thumbnail: "https://placehold.co/600x400?text=Tokens United",
            short_description: "Tokens United company's portfolio",
            start_date: "5/2025",
            end_date:"05/2025",
            technologies: ["HTML", "SCSS", "Python", "Django"],
            link: "https://tokensunited.com/",
            classified: false,
            currently_working: false,
        },
        
        {
            id: "PR-08",
            project_name: "Area13",
            thumbnail: "https://placehold.co/600x400?text=Area13",
            short_description: "Ecommerce Construction Website for Multi-role users",
            start_date: "4/2025",
            end_date:"06/2025",
            technologies: ["HTML", "SCSS", "Python", "Django"],
            link: "",
            classified: false,
            currently_working: false,
        },
       
        
    ]

    return projects
}
