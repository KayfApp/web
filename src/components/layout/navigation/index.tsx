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
]

export { Header, Footer };
