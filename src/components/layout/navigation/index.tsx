import Header from "./header";
import Footer from "./footer";


type LinkItem = {
    label: string;
    link: string;
    description?: string;
    items?: LinkItem[]
}

export const links: LinkItem[] = [
    {
        label: "Products",
        link: "/products",
        items: [
            {
                label: "KEditor",
                link: "/products/keditor",
                description: "Note-taking editor with seamless whiteboard integration."
            },
            {
                label: "Tracer",
                link: "/products/tracer",
                description: "Search through multiple platforms at once. Secure and scalable."
            },
            {
                label: "Workflows",
                link: "/products/workflows",
                description: "Automate repetitive tasks and process KEditor data with ease."
            },
        ]
    },
    {
        label: "Download",
        link: "/download",
    },
    {
        label: "Pricing",
        link: "/pricing",
    },
    {
        label: "Team",
        link: "/team",
    },
    {
        label: "Progress",
        link: "/progress",
    },
]

export { Header, Footer };
