import { Main, Section } from "@/components/layout";
import { LinkHoverAnim } from "@/components/ui/link";
import { Separator } from '@/components/ui/separator'
import { Skeleton } from "@/components/ui/skeleton";
import { Heading1, Heading2, Heading3, Large, Small, } from "@/components/ui/typography";

export default function Download() {
    return (
        <Main>
            <Section>
                <Heading1>
                    Download Kayf
                </Heading1>
                <Small className="mt-4">
                    Get Kayf on Mobile and Desktop
                </Small>

                <div className="mt-20 flex flex-col lg:flex-row space-y-20 lg:space-y-0 lg:space-x-20">
                    <div className="flex flex-col items-center lg:items-start w-[330px] md:w-[500px]">
                        <Skeleton className="h-[400px] w-full md:h-[600px] rounded-xl" />
                        <div className="flex flex-col space-y-3 mt-4">
                            <Heading3>For Desktop</Heading3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <LinkHoverAnim href={"#"}>Download for Windows</LinkHoverAnim>
                            <LinkHoverAnim href={"#"}>Download for Linux</LinkHoverAnim>
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start w-[330px] md:w-[500px]">
                        <Skeleton className="h-[400px] w-full md:h-[600px] rounded-xl" />
                        <div className="flex flex-col space-y-3 mt-4">
                            <Heading3>For Mobile</Heading3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
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
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <LinkHoverAnim href={"#"}>From GitHub</LinkHoverAnim>
                            <LinkHoverAnim href={"#"}>From Docker Hub</LinkHoverAnim>
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start w-[330px] md:w-[500px]">
                        <Skeleton className="h-[400px] w-full md:h-[600px] rounded-xl" />
                        <div className="flex flex-col space-y-3 mt-4">
                            <Heading3>Source Code</Heading3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <LinkHoverAnim href={"#"}>Get Latest Stable Release</LinkHoverAnim>
                            <LinkHoverAnim href={"#"}>Get Latest Development Version</LinkHoverAnim>
                        </div>
                    </div>
                </div>
            </Section>
        </Main>
    )
}
