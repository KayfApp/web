import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"
import { ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { FileText, Search, Copy, Star } from 'lucide-react';
import Image from "next/image";
import myImage from "./images/Workbase.png";
import tracer from "./images/Tracer.png";
import workflows from "./images/Editor.png";

export default function Home() {
  return (
    <div className="min-h-screen h-[100%] bg-gradient-to-b from-gradient-start from-30% to-gradient-end to-70% ">
    <div className="fixed w-full grid grid-cols-3 bg-[#0a0a0a] border-2 border-transparent border-b-zinc-800">
    <div className="flex items-center justify-start px-4 py-6">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="text-4xl font-semibold">Kayf</span>
      </Link>
    </div>
    <div className="flex items-center justify-center px-4 py-2">
      <div className="col-start-2 col-span-3 hidden md:flex gap-4">
        <Link href="#" className="text-2xl font-medium hover:underline underline-offset-4" prefetch={false}>
          Product
        </Link>
        <Link href="#" className="text-2xl font-medium hover:underline underline-offset-4" prefetch={false}>
          Download
        </Link>
        <Link href="#" className="text-2xl font-medium hover:underline underline-offset-4" prefetch={false}>
          Pricing
        </Link>
        <Link href="#" className="text-2xl font-medium hover:underline underline-offset-4" prefetch={false}>
          Team
        </Link>
        <Link href="#" className="text-2xl font-medium hover:underline underline-offset-4" prefetch={false}>
          Blog
        </Link>
       </div> 
       </div>
      <div className="flex justify-end px-6 py-6">
      <div className="hidden lg:flex">
      <Link href="https://github.com/KayfApp">
      <Button className="text-black text-xl bg-white hover:bg-stone-300">
        <Star className="mr-1" />Star
      </Button>
      </Link>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="felx justify-items-end lg:hidden bg-transparent">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-[#0a0a0a] w-[200px] border-[#083344]">
          <div className="grid w-[200px] p-4">
            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
              Product
            </Link>
            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
              Download
            </Link>
            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
              Pricing
            </Link>
            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
              Team
            </Link>
            <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
              Blog
            </Link>
            <Link href="https://github.com/KayfApp">
            <Button className="mt-4 w-2/3 text-black text-lg bg-white hover:bg-stone-300"><Star className="mr-1" />Star</Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      </div>
    </div>
    <h1 className="text-center justify-center text-3xl md:text-8xl md:px-60 pt-[150px] pb-14"> <span className="font-bold">Track</span>,  
    <span className="font-bold">Access</span>, and  <span className="font-bold">Process</span>
    , all your data <span className="text-blue-200"> on one platform</span></h1>
    <h1 className="text-center justify-center text-xl md:text-4xl md:px-96">Open-Source Automation & Data Centralization Platform
    Scalability is more than a buzzword to us</h1>
    <div className="flex justify-center py-14">
    <Button className="md:w-2/12 h-14 text-3xl bg-transparent border-none bg-gradient-to-r from-purple-500 to-blue-500 p-[2px] rounded-lg">
    <div className="flex items-center justify-center h-full w-full text-white rounded-md bg-cyan-950">
      Get Kayf App <ArrowRight className="ml-4" />
    </div>
    </Button>
    </div>
    <div className="flex justify-center py-14">
    <Tabs defaultValue="tracer">
      <TabsList className="felx justify-center bg-transparent md:gap-24">
        <TabsTrigger value="editor" className="md:text-6xl"><FileText className="md:w-[60px] h-[60px]" />Editor</TabsTrigger>
        <TabsTrigger value="tracer" className="md:text-6xl"><Search className="md:w-[60px] h-[60px]" />Tracer</TabsTrigger>
        <TabsTrigger value="workflows" className="md:text-6xl"><Copy className="md:w-[60px] h-[60px]" />Workflows</TabsTrigger>
      </TabsList>
      <Separator className="bg-sky-500 opacity-25 md:h-[8px] md:mt-4" />
      <TabsContent value="editor" className="flex justify-center"><Image src={myImage} alt="Editor vorschau" className="w-[300px] md:w-[980px]"/></TabsContent>
      <TabsContent value="tracer" className="flex justify-center"><Image src={tracer} alt="Tracer vorschau" className="w-[300px] md:w-[980px]"/></TabsContent>
      <TabsContent value="workflows" className="flex justify-center"><Image src={workflows} alt="Tracer vorschau" className="w-[300px] md:w-[980px]"/></TabsContent>
    </Tabs>
    </div>
    </div>
  )
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      version="1.1"
      viewBox="0 0 144.138 130.832"
    >
      <g transform="translate(-36.263 -74.46)">
        <path
          fill="#FFF"
          stroke="none"
          d="M44.653 74.567c-1.605.384-2.525 2.232-3.263 3.528-1.746 3.066-2.978 6.607-3.792 10.054-2.634 11.154-1.401 22.634 3.968 32.808 2.27 4.3 5.536 8.002 8.026 12.171 1.004 1.681 2.717 3.83 2.91 5.821.314 3.228-1.708 7.289-2.028 10.583-.888 9.137 1.124 18.049 2.117 26.988.559 5.032.871 10.285 3.263 14.817 1.972 3.736 5.442 7.042 9.966 6.79 2.635-.146 5.276-2.246 7.937-1.322 1.652.573 2.834 2.183 4.234 3.175 3.517 2.49 7.799 4.69 12.17 5.115 3.776.367 8.035.22 11.642-.882 1.852-.566 5.083-2.945 6.88-2.646 2.178.363 4.127 2.267 6.35 2.822 4.574 1.144 10.27 1.263 14.816 0 3.101-.861 5.905-2.276 8.467-4.233 1.524-1.165 2.825-2.928 4.762-3.44 1.696-.447 3.174.419 4.763.794 3.437.812 7.343.177 10.054-2.116 3.597-3.044 4.863-8.642 5.292-13.053.981-10.095 4.172-20.431 3.175-30.692-.31-3.192-.974-6.365-1.588-9.525-.275-1.415-.954-2.812-.44-4.233 2.182-6.045 7.424-10.753 10.406-16.404 5.409-10.248 7.208-22.065 4.233-33.338-1.024-3.88-2.48-10.492-5.82-13.053-3.154-2.418-5.395 2.71-6.88 4.586-5.46 6.899-12.155 12.073-20.02 15.787-6.018 2.842-14.473 4.972-21.166 4.322-3.551-.345-7.013-1.77-10.584-2.117-2.935-.285-6.045 0-8.996 0-4.818 0-9.063 1.66-13.758 2.117-6.023.585-13.45-1.174-19.05-3.352-8.301-3.228-15.186-8.544-21.167-15.17-1.576-1.745-3.962-7.4-6.879-6.702m4.763 12.524c8.072 8.072 19.46 16.005 31.22 16.933v.53c-3.457 2.365-6.779 4.593-10.054 7.231-.957.771-2.344 2.381-3.704 2.117-1.841-.358-4.015-2.799-5.291-4.057-4.445-4.383-8.454-9.448-10.584-15.346-.698-1.933-2.548-5.783-1.587-7.408m118.533 0c-2.394 8.27-5.905 16.91-12.7 22.666-1.402 1.187-4.311 4.573-6.35 4.233-1.622-.27-2.998-2.462-4.233-3.44-2.82-2.231-5.79-4.393-8.996-5.997l6.35-1.764 11.112-4.674 9.525-6.79 5.292-4.234M43.595 88.149c3.281 11.335 9.256 23.636 20.108 29.633l-2.998 4.763-4.94 8.996h-1.058c-1.605-4.068-4.99-7.358-7.232-11.113a42.386 42.386 0 01-5.997-21.696c0-2.93.21-8.374 2.117-10.583m129.646 0l1.587 10.583-2.293 14.817-10.936 17.992h-.53l-5.644-9.525-2.116-3.704 1.94-2.205 5.82-5.204 8.82-13.229 3.352-9.525m-30.163 27.517v.529c-2.643-.487-5.254-1.327-7.937-1.588-6.417-.623-14.352 2.638-19.05 6.88-3.11 2.808-5.064 6.89-7.938 9.525-1.579-2.308-2.872-4.786-4.762-6.88-5.009-5.548-12.218-8.809-19.58-9.525-3.47-.337-6.723.974-10.054 1.588 2.522-4.01 8.552-6.538 12.7-8.555 13.621-6.621 30.779-6.28 44.45.176 4.397 2.076 8.217 5.04 12.171 7.85m-61.383 4.321c1.324-.184 2.408.297 3.704.441 12.95 1.44 21.35 13.154 20.108 25.93-1.053 10.833-10.691 19.09-21.166 20.108-17.892 1.74-30.545-18.108-22.666-33.867 4.018-8.037 11.628-11.446 20.02-12.612m51.858 0c1.325-.184 2.409.297 3.704.441 12.042 1.338 21.294 12.676 20.109 24.871-1.075 11.057-10.11 20.092-21.167 21.167-20.022 1.946-32.384-21.963-20.461-37.571 4.46-5.838 10.908-7.948 17.815-8.908m-53.975 12.26c-12.212 2.883-10.316 20.648 1.588 22.136 1.5.188 3.289.186 4.762-.264 13.768-4.207 7.504-25.144-6.35-21.873m51.859 0c-8.13 1.92-11.423 12.71-5.733 18.874 2.24 2.428 5.221 3.175 8.378 3.175 1.19 0 2.55.176 3.705-.176 7.343-2.244 10-12.572 5.115-18.345-2.738-3.236-7.379-4.493-11.465-3.528m-50.271 5.204c6.817-1.326 10.517 9.011 3.704 11.377-8.1 2.813-11.947-9.774-3.704-11.377m51.858 0c6.932-1.156 9.932 9.312 3.175 11.377-8.04 2.457-11.297-10.023-3.175-11.377m-76.73 16.316c3.576 9.704 13.521 16.99 23.813 17.991 2.826.275 5.722-.095 8.467-.705 1.367-.304 3.399-1.588 4.763-1.323 1.464.285 2.707 2.09 3.704 3.087l7.408 7.408c.976.976 2.23 2.706 3.704 2.91 1.684.234 3.201-1.877 4.234-2.91l7.408-7.408c.902-.903 1.962-2.422 3.175-2.91 1.396-.563 3.41.827 4.762 1.146 2.83.668 6.078.99 8.996.705 6.595-.64 13.532-4.123 17.992-8.995 2.49-2.72 3.912-5.975 5.82-8.996h.53c0 8.693-1.345 17.952-2.999 26.458-.748 3.848-.796 8.173-3.88 11.113-2.048 1.951-4.607.87-6.88.176-2.31-.706-4.65-.576-6.879.353-2.659 1.108-4.499 3.562-6.879 5.115-3.94 2.572-9.132 3.272-13.758 2.822-2.758-.268-5.539-1.468-7.938-2.734-1.114-.588-2.384-1.925-3.704-1.852-1.997.111-4.444 2.584-6.35 3.352-4.21 1.695-9.427 1.732-13.758.529-5.015-1.393-7.99-6.08-12.7-7.585-4.02-1.284-9.24 2.718-12.7.176-2.44-1.79-3.394-6.023-3.704-8.82-.728-6.547-2.008-13.02-2.646-19.578-.257-2.644-1.592-7.336 0-9.525m52.387 2.116c2.598 4.113 5.14 8.16 9.525 10.584l-6.879 7.408-3.175 2.47-2.646-1.94-6.879-7.938c3.664-2.603 7.43-6.33 8.996-10.584z"
        ></path>
      </g>
    </svg>
  )
}