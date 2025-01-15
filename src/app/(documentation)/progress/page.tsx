import { Main, MarkdownSection, Section } from "@/components/layout";
import { Heading1, Heading2, Paragraph } from "@/components/ui/typography";

import {
    Timeline,
    TimelineContent,
    TimelineDot,
    TimelineHeading,
    TimelineItem,
    TimelineLine,
} from "@/components/ui/timeline"
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import R01112024 from "./01112024.mdx"
import R15112024 from "./15112024.mdx"
import R29112024 from "./29112024.mdx"
import R1712024 from "./17122024.mdx"
import R07012025 from "./07012025.mdx"

type Blog = {
    title: string,
    description: string,
    component: any
}

const blogs: Blog[] = [
    {
        title: 'Progress Report: 07.01.2025',
        description: 'Biweekly report discussing our progress',
        component: R07012025
    },
    {
        title: 'Progress Report: 17.12.2024',
        description: 'Biweekly report discussing our progress',
        component: R1712024
    },
    {
        title: 'Progress Report: 29.11.2024',
        description: 'Biweekly report discussing our progress',
        component: R29112024
    },
    {
        title: 'Progress Report: 15.11.2024',
        description: 'Biweekly report discussing our progress',
        component: R15112024
    },
    {
        title: 'Progress Report: 01.11.2024',
        description: 'Biweekly report discussing our progress',
        component: R01112024
    },
]

export default function Blog() {
    return (
        <Main>
            <Section className="flex flex-col justify-center space-y-12">
                <Heading1 className="text-center">
                    Progress
                </Heading1>
                <Timeline positions="center">
                    <TimelineItem status="done">
                        <TimelineHeading side="left">Concepts for frontend, backend & databases finished (8.10.2024)</TimelineHeading>
                        <TimelineDot status="done" />
                        <TimelineLine done />
                        <TimelineContent side="left">
                            Involves planning all key features and outlining a rough implementation strategy. It aims to provide a clear, concrete vision of how the project will be structured, helping to organize tasks and guide the development process. By finalizing these concepts, we lay the foundation for efficient and well-coordinated progress across the frontend, backend, and database components.
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem status="done">
                        <TimelineHeading side="right">
                            Feasibility study conducted (18.10.2024)
                        </TimelineHeading>
                        <TimelineDot status="done" />
                        <TimelineLine done />
                        <TimelineContent>
                            In this phase, each team member explores the available tools to gain a concrete understanding of how to implement the planned features. This involves researching relevant libraries, reviewing scientific literature, and running initial tests to evaluate their viability. By conducting this study, we ensure that we have the right resources and knowledge in place to move forward confidently with development.
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem status="done">
                        <TimelineHeading side="left">First-iteration prototype developed (8.11.2024)</TimelineHeading>
                        <TimelineDot status="done" />
                        <TimelineLine />
                        <TimelineContent side="left">
                            The first prototype offers a basic version of the final product, showcasing simple core features as a preview of what’s to come. Its purpose is to provide an early hands-on experience with the implementation, allowing the team to evaluate progress, test functionality, and refine strategies and priorities for the next development stages. This milestone helps shape the direction of the project moving forward.
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineHeading>Feature prototypes distributed in clusters (20.12.2024)</TimelineHeading>
                        <TimelineDot status="current" />
                        <TimelineLine />
                        <TimelineContent>
                            Building on the first prototype, we continue by focusing on advancing development by solidifying the tools, libraries, and structure of the application. Each team member finalizes their approach, resulting in a more developed version of the product. The milestone concludes with the prototype running on clustering software, ensuring scalability and laying the groundwork for handling larger workloads efficiently.
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineHeading side="left">Final product released (31.1.2025)</TimelineHeading>
                        <TimelineDot />
                        <TimelineContent side="left">
                            The grand finale: a fully implemented Kayf.app, complete with all core features and comprehensive documentation. This milestone marks the completion of development, ensuring the product is ready for use. With the technical work finalized, the focus shifts to the academic portion of the diploma thesis, where the project will be documented and analyzed in depth.
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Section>
            <Separator />
            <Section className="space-y-12">
                <Heading2>Reports</Heading2>
                {
                    blogs.map((e, i) => (
                        <Card key={`blog-card-${e.title}-${i}`} className={`progress-report-${i}-${e.title} px-4 space-y-4`}>
                            <CardHeader>
                                <CardTitle className="text-center">
                                    {e.title}
                                </CardTitle>
                            </CardHeader>
                            <Paragraph className="text-center !mt-0">
                                {e.description}
                            </Paragraph>
                            <CardContent>
                                <Drawer>
                                    <div className="flex flex-col items-center">
                                        <DrawerTrigger className={buttonVariants()}>Read more</DrawerTrigger>
                                    </div>
                                    <DrawerContent className="flex flex-col items-center h-full">
                                        <DrawerHeader>
                                            <DrawerTitle className="text-3xl text-cnter">
                                                {e.title}
                                            </DrawerTitle>
                                            <DrawerDescription className="text-center">
                                                {e.description}
                                            </DrawerDescription>
                                        </DrawerHeader>

                                        <div className="flex flex-col items-center px-4 overflow-y-auto pb-8">
                                            <MarkdownSection className="py-0" asChild>
                                                {<e.component />}
                                            </MarkdownSection>
                                        </div>
                                    </DrawerContent>
                                </Drawer>
                            </CardContent>
                        </Card>
                    ))
                }
            </Section>
        </Main>
    )
}
