import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { FileText, Search, Copy, Star } from 'lucide-react';
import Image from "next/image";
import editorImage from "@/../public/homepage/editor/Editor.png"
import tracerImage from "@/../public/homepage/editor/Tracer.png"
import workflowsImage from "@/../public/homepage/editor/Workflows.png"

export default function Home() {
  return (
    <main className="text-center min-h-screen bg-gradient-to-b bg-fixed from-gradient-start from-30% to-gradient-end to-70% space-y-16">
      <section className="space-y-8">
        <h1 className="justify-center md:text-8xl md:px-40 pt-40">
          <span className="font-bold">Track</span>,
          <span className="font-bold"> Access</span>,
          and
          <span className="font-bold"> Process </span>
          all your data on<span className="text-blue-300"> one platform</span>
        </h1>

        <p className="text-center justify-center text-xl md:text-3xl md:px-96">
          Open-Source Automation & Data Centralization Platform
          <br />
          Scalability is more than a buzzword to us
        </p>

        <Button className="text-3xl rounded-lg border-4 border-blue-500 bg-transparent hover:bg-transparent text-primary px-4 py-8 space-x-2">
          <span>Get Kayf Now</span>
          <ArrowRight size={40} />
        </Button>
      </section>

      <section className="flex grow flex-col items-center">
        <Tabs defaultValue="tracer" className="flex flex-col align-center">
          <TabsList className="flex flex-row space-x-28 bg-transparent">
            {
              [
                {
                  key: "editor",
                  text: "Editor",
                  icon: <FileText size={40} className="mr-1 md:mr-2" />
                },
                {
                  key: "tracer",
                  text: "Tracer",
                  icon: <Search size={40} className="mr-1 md:mr-2" />
                },
                {
                  key: "workflows",
                  text: "Workflows",
                  icon: <Copy size={40} className="mr-1 md:mr-2" />
                }
              ].map((e, i) => (
                <TabsTrigger key={`content-preview-tab-${i}`} value={e.key} className="duration-100 md:text-4xl rounded-none pb-4 border-b-4 border-transparent data-[state=active]:border-blue-800 data-[state=active]:text-blue-800 bg-transparent hover:bg-transparent data-[state=active]:bg-transparent">
                  {e.icon}
                  <span>{e.text}</span>
                </TabsTrigger>
              ))
            }
          </TabsList>
          <Separator className="bg-blue-800 rounded-full opacity-25 h-1 mt-2 mb-4 w-[65%] self-center" />
          <TabsContent value="editor" className="self-center w-[75%]">
            <Image src={editorImage} alt="Editor" className="rounded" />
          </TabsContent>
          <TabsContent value="tracer" className="center self-center w-[75%]">
            <Image src={tracerImage} alt="Editor" className="rounded" />
          </TabsContent>
          <TabsContent value="workflows" className="self-center w-[75%]">
            <Image src={workflowsImage} alt="Editor" className="rounded" />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  )
}
