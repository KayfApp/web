import { Main, Section } from "@/components/layout";
import { LinkHoverAnim } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Heading1, Small, } from "@/components/ui/typography";
import Image, { StaticImageData } from "next/image"
import Link from "next/link";


export default function Download() {
    return (
        <Main>
            <Section>
                <Heading1>
                    Download Kayf
                </Heading1>
                <Small className="mt-4">
                    Get Kayf on Mobil and Desktop
                </Small>
                <div>
                    <div className="mt-[5%] grid grid-cols-2 gap-8">
                        {/* <Image src={""} alt="Mobile" width={100} height={200} /> */}
                        <Skeleton className="h-[600px] w-[500px] rounded-xl" />
                        <Skeleton className="h-[600px] w-[500px] rounded-xl" />
                        <h1 className="text-4xl">For Mobile</h1>
                        <h1 className="text-4xl">For Desktop</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <div className="grid grid-rows-2 gap-2">
                            <p><LinkHoverAnim href={"#"}>Download for iOS</LinkHoverAnim></p>
                            <p><LinkHoverAnim href={"#"}>Download for android</LinkHoverAnim></p>
                        </div>
                        <div className="grid grid-rows-2 gap-2">
                            <p><LinkHoverAnim href={"#"}>Download for macOS</LinkHoverAnim></p>
                            <p><LinkHoverAnim href={"#"}>Download for Windows</LinkHoverAnim></p>
                        </div>
                    </div>
                </div>
                <Heading1 className="mt-[200px]">
                    Download Tracer Backend
                </Heading1>
                <Small className="mt-4">
                    Get the Source Code and the Docker Image
                </Small>
                <div>
                    <div className="mt-[5%] grid grid-cols-2 gap-8">
                        {/* <Image src={""} alt="Mobile" width={100} height={200} /> */}
                        <Skeleton className="h-[600px] w-[500px] rounded-xl" />
                        <Skeleton className="h-[600px] w-[500px] rounded-xl" />
                        <h1 className="text-4xl">Source Code</h1>
                        <h1 className="text-4xl">Docker Image</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <div className="grid grid-rows-2 gap-2">
                            <p><LinkHoverAnim href={"#"}>Download for macOS</LinkHoverAnim></p>
                            <p><LinkHoverAnim href={"#"}>Download for Windows</LinkHoverAnim></p>
                        </div>
                        <div className="grid grid-rows-2 gap-2">
                            <p><LinkHoverAnim href={"#"}>Download for macOS</LinkHoverAnim></p>
                            <p><LinkHoverAnim href={"#"}>Download for Windows</LinkHoverAnim></p>
                        </div>
                    </div>
                </div>
                <Heading1 className="mt-[200px]">
                    Kayf's Plugin Ecosystem
                </Heading1>
                <Small className="mt-4">
                    Explore Kayf's Plugin Ecosystem
                </Small>
                <div>
                    <div className="mt-[5%] grid grid-cols-1 gap-8">
                        {/* <Image src={""} alt="Mobile" width={100} height={200} /> */}
                        <Skeleton className="h-[600px] w-[500px] rounded-xl" />
                        <div className="flex justify-center ">
                        <Button className="w-3/6 h-[40px] text-lg">Explore now</Button>
                        </div>
                    </div>
                </div>

            </Section>
        </Main>
    )
}
