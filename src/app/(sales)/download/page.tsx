import { Main, Section } from "@/components/layout";
import { LinkHoverAnim } from "@/components/ui/link";
import { Separator } from '@/components/ui/separator'
import { Skeleton } from "@/components/ui/skeleton";
import { Heading1, Heading2, Heading3, Large, Small, } from "@/components/ui/typography";
import Image from 'next/image'
import handy from "@/../public/download/handy.png"
import laptop from "@/../public/download/laptop.png"



export default function Download() {
    return (
        <Main>
            <Section>
                <Heading1>
                    Download Kayf
                </Heading1>
                <Small className="mt-4">
                    Download the Kayf web app for a better experience.
                </Small>

                <div className="mt-20 flex flex-col lg:flex-row space-y-20 lg:space-y-0 lg:space-x-20">
                    <div className="flex flex-col items-center lg:items-start w-[330px] md:w-[500px]">
                        <Image
                            src={laptop}
                            width={600}
                            alt="Picture of the author"
                        />
                        <div className="flex flex-col space-y-3 mt-4">
                            <Heading3>For Desktop</Heading3>
                            <p>Use Kayf directly on your desktop to efficiently manage your workflows and analyze traces locally.</p>
                            <LinkHoverAnim href={"#"}>Download for Windows</LinkHoverAnim>
                            <LinkHoverAnim href={"#"}>Download for Linux</LinkHoverAnim>
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start w-[330px] md:w-[500px]">
                        <Image
                            src={handy}
                            width={500}
                            alt="Picture of the author"
                        />
                        <div className="flex flex-col space-y-3 mt-4">
                            <Heading3>For Mobile</Heading3>
                            <p>Stay connected with Kayf on the go. Monitor tracers, start workflows, or check statuses – available anytime.</p>
                            <LinkHoverAnim href={"#"}>Download for iOS</LinkHoverAnim>
                            <LinkHoverAnim href={"#"}>Download for Android</LinkHoverAnim>
                        </div>
                    </div>
                </div>

                <Separator className="my-24" />

                <Heading2>
                    Download Tracer
                </Heading2>
                <Small className="mt-4">
                    Get the Source Code and the Docker Image
                </Small>

                <div className="mt-20 flex flex-col lg:flex-row space-y-20 lg:space-y-0 lg:space-x-20">
                    <div className="flex flex-col items-center lg:items-start w-[330px] md:w-[500px]">
                        <Skeleton className="h-[400px] w-full md:h-[600px] rounded-xl" />
                        <div className="flex flex-col space-y-3 mt-4">
                            <Heading3>Docker Image</Heading3>
                            <p>Start tracers instantly with the preconfigured Docker image – perfect for quick tests and CI/CD environments.</p>
                            <LinkHoverAnim href={"#"}>From GitHub</LinkHoverAnim>
                            <LinkHoverAnim href={"#"}>From Docker Hub</LinkHoverAnim>
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start w-[330px] md:w-[500px]">
                        <Skeleton className="h-[400px] w-full md:h-[600px] rounded-xl" />
                        <div className="flex flex-col space-y-3 mt-4">
                            <Heading3>Source Code</Heading3>
                            <p>Access the source code of Tracer – for full control, custom modifications, and community-driven development.</p>
                            <LinkHoverAnim href={"#"}>Get Latest Stable Release</LinkHoverAnim>
                            <LinkHoverAnim href={"#"}>Get Latest Development Version</LinkHoverAnim>
                        </div>
                    </div>
                </div>
            </Section>
        </Main>
    )
}
