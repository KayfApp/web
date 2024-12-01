import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image, { StaticImageData } from "next/image"
import ankushAvatar from "@/../public/about/Ankush.jpg"
import alexAvatar from "@/../public/about/Alex.jpg"
import pavelAvatar from "@/../public/about/Pavel.jpg"
import gioiaAvatar from "@/../public/about/Gioia.jpg"
import tobiasAvatar from "@/../public/about/Tobias.jpg"
import { Heading1, Paragraph } from "@/components/ui/typography"
import { Section, Main } from "@/components/layout"
import Link from "next/link"
import teampic from "@/../public/about/Teamjpg.jpg"

interface TeamProps {
    name: string;
    position: string;
    email: string;
    imageUrl: StaticImageData;
}

const teamList: TeamProps[] = [
    {
        name: "Ankush Ahuja",
        position: "Project Leader & Tracer Developer",
        email: "aahuja@student.tgm.ac.at",
        imageUrl: ankushAvatar,
    },
    {
        name: "Alexander Awart",
        position: "DB & Security Managment",
        email: "aawart@student.tgm.ac.at",
        imageUrl: alexAvatar,
    },
    {
        name: "Pavel Bakshi",
        position: "Frontend Developer",
        email: "pbakshi@student.tgm.ac.at",
        imageUrl: pavelAvatar,
    },
    {
        name: "Gioia Frolik",
        position: "Workflows & Automation Dev",
        email: "gfrolik@student.tgm.ac.at",
        imageUrl: gioiaAvatar,
    },
    {
        name: "Tobias Fischinger",
        position: "Scalability & Infrastructure Managment",
        email: "tfischinger@student.tgm.ac.at",
        imageUrl: tobiasAvatar,
    },
];

export default function About() {
    return (
        <Main>
            <Section className="space-y-10">
                <Heading1 className="text-center">
                    <u>Building</u> tomorrow,<br /> <span className="font-normal">not reacting to it.</span>
                </Heading1>
                <Paragraph className="leading-relaxed text-center">
                    Our small but mighty team consists of students from the Technologisches Gewerbemuseum in Vienna, specializing in information technology. We have experts in data science, IT security, and media technologies, giving us a wide range of abilities. This variety allows us to tackle a broad range of challenges and develop innovative solutions. Together, we are committed to creating impactful technology that meets the needs of our users.
                </Paragraph>

                <Image src={teampic} alt="logo" className="rounded-2xl w-3/5 drop-shadow-lg"/>
            </Section>
        </Main>
    )
}
