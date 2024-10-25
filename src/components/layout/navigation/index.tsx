import Header from "./header";
import Footer from "./footer";


type LinkItem = {
    label: string;
    link: string;
    items?: LinkItem[]
}

export const links: LinkItem[] = [
    // {
    //     label: "Products",
    //     link: "/products",
    //     items: [
    //         {
    //             label: "Tracer",
    //             link: "/products/tracer",
    //         },
    //         {
    //             label: "Workflows",
    //             link: "/Products/workflows",
    //         },
    //         {
    //             label: "KEditor",
    //             link: "/products/keditor",
    //
    //         }
    //     ]
    // },
    // {
    //     label: "Download",
    //     link: "/download",
    // },
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
