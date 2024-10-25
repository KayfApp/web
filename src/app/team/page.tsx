import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image, { StaticImageData } from "next/image"
import ankushAvatar from "@/../public/about/Ankush.jpg"
import alexAvatar from "@/../public/about/Alex.jpg"
import pavelAvatar from "@/../public/about/Pavel.jpg"
import gioiaAvatar from "@/../public/about/Gioia.jpg"
import tobiasAvatar from "@/../public/about/Tobias.jpg"
import { Heading1, Paragraph } from "@/components/ui/typography"
import Section from "@/components/layout/layout"
import Link from "next/link"

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
        <main className="flex w-screen flex-col items-center">
            <Section className="space-y-10">
                <Heading1 className="text-center">
                    <u>Building</u> tomorrow,<br /> <span className="font-normal">not reacting to it.</span>
                </Heading1>
                <Paragraph className="leading-relaxed text-center">
                    Our small but mighty team consists of students from the Technologisches Gewerbemuseum in Vienna, specializing in information technology. We have experts in data science, IT security, and media technologies, giving us a wide range of abilities. This variety allows us to tackle a broad range of challenges and develop innovative solutions. Together, we are committed to creating impactful technology that meets the needs of our users.
                </Paragraph>

                <div className="flex flex-row grow w-full space-x-5">
                    {teamList.map(
                        ({ imageUrl, name, position, email }: TeamProps) => (
                            <Card
                                key={name}
                                className="flex flex-col bg-muted/50 relative mt-8 justify-center items-center"
                            >
                                <CardHeader className="mt-8 flex justify-center items-center pb-2">
                                    <Image
                                        src={imageUrl}
                                        alt={`${name} ${position}`}
                                        className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                                    />
                                    <CardTitle className="text-center">{name}</CardTitle>
                                    <CardDescription className="text-primary text-center">
                                        {position}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="text-center pb-4">
                                    <Link href={`mailto:${email}`} className="underline">{email}</Link>
                                </CardContent>
                            </Card>
                        )
                    )}
                </div>
            </Section>
        </main>
    )
}
