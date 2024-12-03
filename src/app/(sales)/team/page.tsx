import Image, { StaticImageData } from "next/image"
import ankushAvatar from "@/../public/about/Ankush.jpg"
import alexAvatar from "@/../public/about/Alex.jpg"
import pavelAvatar from "@/../public/about/Pavel.jpg"
import gioiaAvatar from "@/../public/about/Gioia.jpg"
import tobiasAvatar from "@/../public/about/Tobias.jpg"
import { Heading1, Paragraph } from "@/components/ui/typography"
import { Section, Main } from "@/components/layout"
import teampic from "@/../public/about/Teamjpg.jpg"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card"
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger} from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"

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

const TeamCards = ({ members }: { members: TeamProps }) => (
    <Card className="mb-8">
        <CardHeader className="flex justify-center items-center">
            <Avatar className="size-[100px]">
                <Image src={members.imageUrl} alt={members.name} />
                <AvatarFallback>{members.name}</AvatarFallback>
            </Avatar>
            <CardDescription>
                {members.position}
            </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center p-6">
            <span className="grid gap-4">
                <span className="text-3xl font-semibold">{members.name}</span>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>Read more</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, facere.
                        Iure ea voluptates repellendus assumenda porro. Ipsam nam tempore consequuntur!
                        Quasi praesentium nihil quisquam provident explicabo necessitatibus accusantium? Aliquid, assumenda?
                        Itaque velit repellendus rerum incidunt perspiciatis obcaecati est eveniet earum.
                        Distinctio fugiat perferendis ut doloremque et eos ullam, tempore pariatur.
                    </DialogContent>
                </Dialog>
            </span>
        </CardContent>
        <CardFooter className="flex justify-center">
            <CardDescription>{members.email}</CardDescription>
        </CardFooter>
    </Card>
);

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
                <div className="hidden lg:block">
                <div className="flex justify-center">
                    <Image src={teampic} alt="logo" className="rounded-2xl w-3/5 drop-shadow-lg" />
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <div className="absolute bottom-[520px] left-[550px] w-[180px] h-[200px]"></div>
                        </HoverCardTrigger>
                        <HoverCardContent className="dark:bg-zinc-950 dark:text-white">
                            <div className="flex justify-center text-center grid grid-rows gap-2">
                                <h1 className="text-xl">{teamList[0].name}</h1>
                                <h2 className="text-sm">{teamList[0].position}</h2>
                                <Dialog>
                                    <DialogTrigger>
                                        <Button>Read more</Button>
                                    </DialogTrigger>
                                    <DialogContent className="dark:bg-zinc-950">
                                        <DialogHeader className="flex justify-self-center">
                                            <Avatar className="w-20 h-20">
                                                <AvatarImage src={ankushAvatar.src} alt="Anksuh Ahuja" />
                                                <AvatarFallback>AA</AvatarFallback>
                                            </Avatar>
                                        </DialogHeader>
                                        <div className="grid grid-rows gap-2">
                                            <h1 className="text-4xl">{teamList[0].name}</h1>
                                            <DialogDescription>{teamList[0].position}</DialogDescription>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eius!
                                            Neque deserunt qui recusandae, officiis optio iusto asperiores. Ipsam, perspiciatis?
                                            Omnis, fugit iste explicabo esse quia facere molestiae animi! Quam.
                                            Quasi qui delectus adipisci eveniet deserunt error pariatur ipsam corrupti.
                                            Enim iste blanditiis sint temporibus, doloremque numquam molestiae! Magnam, perspiciatis!
                                        </div>
                                        <DialogFooter><DialogDescription>{teamList[0].email}</DialogDescription></DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <div className="absolute bottom-[520px] left-[720px] w-[160px] h-[200px]"></div>
                        </HoverCardTrigger>
                        <HoverCardContent className="dark:bg-zinc-950 dark:text-white">
                            <div className="flex justify-center text-center grid grid-rows gap-2">
                                <h1 className="text-xl">{teamList[1].name}</h1>
                                <h2 className="text-sm">{teamList[1].position}</h2>
                                <Dialog>
                                    <DialogTrigger>
                                        <Button>Read more</Button>
                                    </DialogTrigger>
                                    <DialogContent className="dark:bg-zinc-950">
                                        <DialogHeader className="flex justify-self-center">
                                            <Avatar className="w-20 h-20">
                                                <AvatarImage src={alexAvatar.src} alt="Alexander Awart" />
                                                <AvatarFallback>AA</AvatarFallback>
                                            </Avatar>
                                        </DialogHeader>
                                        <div className="grid grid-rows gap-2">
                                            <h1 className="text-4xl">{teamList[1].name}</h1>
                                            <DialogDescription>{teamList[1].position}</DialogDescription>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eius!
                                            Neque deserunt qui recusandae, officiis optio iusto asperiores. Ipsam, perspiciatis?
                                            Omnis, fugit iste explicabo esse quia facere molestiae animi! Quam.
                                            Quasi qui delectus adipisci eveniet deserunt error pariatur ipsam corrupti.
                                            Enim iste blanditiis sint temporibus, doloremque numquam molestiae! Magnam, perspiciatis!
                                        </div>
                                        <DialogFooter><DialogDescription>{teamList[1].email}</DialogDescription></DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <div className="absolute bottom-[520px] left-[850px] w-[180px] h-[200px]"></div>
                        </HoverCardTrigger>
                        <HoverCardContent className="dark:bg-zinc-950 dark:text-white">
                            <div className="flex justify-center text-center grid grid-rows gap-2">
                                <h1 className="text-xl">{teamList[2].name}</h1>
                                <h2 className="text-sm">{teamList[2].position}</h2>
                                <Dialog>
                                    <DialogTrigger>
                                        <Button>Read more</Button>
                                    </DialogTrigger>
                                    <DialogContent className="dark:bg-zinc-950">
                                        <DialogHeader className="flex justify-self-center">
                                            <Avatar className="w-20 h-20">
                                                <AvatarImage src={pavelAvatar.src} alt="Pavel Bakshi" />
                                                <AvatarFallback>PB</AvatarFallback>
                                            </Avatar>
                                        </DialogHeader>
                                        <div className="grid grid-rows gap-2">
                                            <h1 className="text-4xl">{teamList[2].name}</h1>
                                            <DialogDescription>{teamList[2].position}</DialogDescription>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eius!
                                            Neque deserunt qui recusandae, officiis optio iusto asperiores. Ipsam, perspiciatis?
                                            Omnis, fugit iste explicabo esse quia facere molestiae animi! Quam.
                                            Quasi qui delectus adipisci eveniet deserunt error pariatur ipsam corrupti.
                                            Enim iste blanditiis sint temporibus, doloremque numquam molestiae! Magnam, perspiciatis!
                                        </div>
                                        <DialogFooter><DialogDescription>{teamList[2].email}</DialogDescription></DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <div className="absolute bottom-[520px] left-[1030px] w-[140px] h-[200px]"></div>
                        </HoverCardTrigger>
                        <HoverCardContent className="dark:bg-zinc-950 dark:text-white">
                            <div className="flex justify-center text-center grid grid-rows gap-2">
                                <h1 className="text-xl">{teamList[3].name}</h1>
                                <h2 className="text-sm">{teamList[3].position}</h2>
                                <Dialog>
                                    <DialogTrigger>
                                        <Button>Read more</Button>
                                    </DialogTrigger>
                                    <DialogContent className="dark:bg-zinc-950">
                                        <DialogHeader className="flex justify-self-center">
                                            <Avatar className="w-20 h-20">
                                                <AvatarImage src={gioiaAvatar.src} alt="Gioia Frolik" />
                                                <AvatarFallback>GF</AvatarFallback>
                                            </Avatar>
                                        </DialogHeader>
                                        <div className="grid grid-rows gap-2">
                                            <h1 className="text-4xl">{teamList[3].name}</h1>
                                            <DialogDescription>{teamList[3].position}</DialogDescription>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eius!
                                            Neque deserunt qui recusandae, officiis optio iusto asperiores. Ipsam, perspiciatis?
                                            Omnis, fugit iste explicabo esse quia facere molestiae animi! Quam.
                                            Quasi qui delectus adipisci eveniet deserunt error pariatur ipsam corrupti.
                                            Enim iste blanditiis sint temporibus, doloremque numquam molestiae! Magnam, perspiciatis!
                                        </div>
                                        <DialogFooter><DialogDescription>{teamList[3].email}</DialogDescription></DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <div className="absolute bottom-[520px] left-[1150px] w-[210px] h-[200px]"></div>
                        </HoverCardTrigger>
                        <HoverCardContent className="dark:bg-zinc-950 dark:text-white">
                            <div className="flex justify-center text-center grid grid-rows gap-2">
                                <h1 className="text-xl">{teamList[4].name}</h1>
                                <h2 className="text-sm">{teamList[4].position}</h2>
                                <Dialog>
                                    <DialogTrigger>
                                        <Button>Read more</Button>
                                    </DialogTrigger>
                                    <DialogContent className="dark:bg-zinc-950">
                                        <DialogHeader className="flex justify-self-center">
                                            <Avatar className="w-20 h-20">
                                                <AvatarImage src={tobiasAvatar.src} alt="Tobias Fischinger" />
                                                <AvatarFallback>TF</AvatarFallback>
                                            </Avatar>
                                        </DialogHeader>
                                        <div className="grid grid-rows gap-2">
                                            <h1 className="text-4xl">{teamList[4].name}</h1>
                                            <DialogDescription>{teamList[4].position}</DialogDescription>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, eius!
                                            Neque deserunt qui recusandae, officiis optio iusto asperiores. Ipsam, perspiciatis?
                                            Omnis, fugit iste explicabo esse quia facere molestiae animi! Quam.
                                            Quasi qui delectus adipisci eveniet deserunt error pariatur ipsam corrupti.
                                            Enim iste blanditiis sint temporibus, doloremque numquam molestiae! Magnam, perspiciatis!
                                        </div>
                                        <DialogFooter><DialogDescription>{teamList[4].email}</DialogDescription></DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                </div>
                </div>
                <div className="lg:hidden">
                {teamList.map((ind, index) => (
                        <TeamCards key={index} members={ind}></TeamCards>
                    ))}
                </div>
            </Section>
        </Main>
    )
}
