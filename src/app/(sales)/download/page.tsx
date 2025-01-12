import { Main, Section } from "@/components/layout";
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
                <div className="mt-[5%] grid grid-cols-2 gap-8">
                    {/* <Image src={""} alt="Mobile" width={100} height={200} /> */}
                    <Skeleton className="h-[600px] w-[500px] rounded-xl" />
                    <Skeleton className="h-[600px] w-[500px] rounded-xl" />
                    <h1 className="text-4xl">For Mobile</h1>
                    <h1 className="text-4xl">For Desktop</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <div className="grid grid-rows-2">
                    <p><Link href={"#"} className="hover:underline underline-offset-4">Download for iOS</Link></p>
                    <p><Link href={"#"} className="hover:underline underline-offset-4">Download for android</Link></p>
                    </div>
                    <div className="grid grid-rows-2">
                    <p><Link href={"#"} className="hover:underline underline-offset-4">Download for macOS</Link></p>
                    <p><Link href={"#"} className="hover:underline underline-offset-4">Download for Windows</Link></p>
                    </div>
                </div>
            </Section>
        </Main>
    )
}
