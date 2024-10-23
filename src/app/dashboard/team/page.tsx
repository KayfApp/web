import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image, { StaticImageData } from "next/image"
import anksuh from "@/../public/about/Ankush.jpg"
import pavel from "@/../public/about/Pavel.jpg"
import gioia from "@/../public/about/Gioia.jpg"
import alex from "@/../public/about/Alex.jpg"
import { Button } from "@/components/ui/button"

type TeamMember = { name: string; mail: string; role: string; image: StaticImageData; description: string }

const teammembers: TeamMember[] = [
    {
        name: 'Ankush', mail: 'aahuhja@student.tgm.ac.at', role: 'CEO', image: anksuh, description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
            + 'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
            + 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            + 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    },
    {
        name: 'Pavel', mail: 'pbakshi@student.tgm.ac.at', role: 'Frontend', image: pavel, description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
            + 'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
            + 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            + 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    },
    {
        name: 'Alex', mail: 'aawat@student.tgm.ac.at', role: 'Database', image: alex, description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
            + 'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
            + 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            + 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    },
    {
        name: 'Gioia', mail: 'gfrolik@student.tgm.ac.at', role: 'Workflows', image: gioia, description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
            + 'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
            + 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            + 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    },
    {
        name: 'Tobias', mail: 'tfischinger@student.tgm.ac.at', role: 'Maschine', image: anksuh, description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,'
            + 'sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
            + 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            + 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    },
];

const TeamCarousel = ({ members }: { members: TeamMember }) => (
    <Card className="border border-transparent text-left">
        <span className="grid grid-cols-2 flex justify-items-end">
            <span>
                <CardHeader>
                    <CardTitle className="text-4xl">{members.name}</CardTitle>
                    <CardDescription className="text-left text-xl">{members.role}</CardDescription>
                </CardHeader>
                <CardContent className="p-6 max-h-[400px]">
                    <span className="text-xl">{members.description}</span>
                    <CardDescription className="text-xl mt-8">{members.mail}</CardDescription>
                </CardContent>
            </span>
            <Image
                src={members.image}
                width={140}
                height={140}
                alt="Picture of the author"
                className="size-[450px] justify-items-end"
            />
        </span>
    </Card>
);

const TeamCards = ({ members }: { members: TeamMember }) => (
    <Card>
        <CardHeader className="flex justify-center items-center">
            <Avatar className="size-[100px]">
                <Image src={members.image} alt={members.name} />
                <AvatarFallback>{members.name}</AvatarFallback>
            </Avatar>
            <CardDescription>
                {members.role}
            </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
            <span className="grid gap-4">
                <span className="text-3xl font-semibold">{members.name}</span>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline">Read more</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        {members.description}
                    </DialogContent>
                </Dialog>
            </span>
        </CardContent>
        <CardFooter className="flex justify-center">
            <CardDescription>{members.mail}</CardDescription>
        </CardFooter>
    </Card>
);

export default function About() {
    return (
        <main className="w-full text-center min-h-screen bg-gradient-to-b bg-fixed from-gradient-start to-gradient-end space-y-16">
            <section className="space-y-8 px-12 lg:px-44 py-40">
                <h1 className="justify-center text-4xl md:text-6xl pt-30 pb-10 grid cols-1 md:gap-8">
                    <span className="font-bold">Our Mission:</span>
                    <span className="font-bold">Streamlining Digital <span className="text-blue-300">Workflow</span></span>
                </h1>
                <span className="leading-relaxed text-center md:text-2xl">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    At vero eos et accusam et justo duo dolores et ea rebum.
                </span>
                <span className="flex justify-center">
                    <Carousel opts={{ align: "start" }} className="w-full hidden md:block">
                        <CarouselContent>
                            {teammembers.map((ind, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <TeamCarousel key={index} members={ind}></TeamCarousel>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </span>
                <span className="grid grid-rows-1 gap-8 md:hidden">
                    {teammembers.map((ind, index) => (
                        <TeamCards key={index} members={ind}></TeamCards>
                    ))}

                </span>
            </section>
        </main>
    )
}