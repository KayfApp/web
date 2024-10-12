import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { FileText, Search, Copy } from 'lucide-react';
import Image from "next/image";
import editorImage from "@/../public/homepage/editor/Editor.png"
import tracerImage from "@/../public/homepage/editor/Tracer.png"
import workflowsImage from "@/../public/homepage/editor/Workflows.png"

export default function Home() {
  return (
    <main className="w-full text-center min-h-screen bg-gradient-to-b bg-fixed from-gradient-start to-gradient-end space-y-16">
      <section className="space-y-8 px-12 lg:px-44">
        <h1 className="justify-center text-5xl md:text-8xl pt-40">
          <span className="font-bold">Track</span>,
          <span className="font-bold"> Access</span>,
          and
          <span className="font-bold"> Process </span>
          all your data on<span className="text-blue-300"> one platform</span>
        </h1>
        <p className="text-center justify-center text-xl md:text-3xl">
          Open-Source Automation & Data Centralization Platform
          <br />
          Scalability is more than a buzzword to us
        </p>

        <Button className="text-xl rounded-lg border-4 border-blue-500 bg-transparent hover:bg-transparent text-primary px-3 py-6 space-x-2">
          <span>Get Kayf Now</span>
          <ArrowRight size={30} />
        </Button>
      </section>

      <section className="flex grow flex-col items-center">
        <Tabs defaultValue="tracer" className="flex flex-col align-center">
          <TabsList className="flex flex-col bg-transparent mb-[2rem]">
            <div className="flex flex-row space-x-6 md:space-x-12 lg:space-x-24">
              {
                [
                  {
                    key: "editor",
                    text: "Editor",
                    icon: <FileText className="w-6 h-6 lg:w-8 lg:h-8" />
                  },
                  {
                    key: "tracer",
                    text: "Tracer",
                    icon: <Search className="w-6 h-6 lg:w-8 lg:h-8" />
                  },
                  {
                    key: "workflows",
                    text: "Workflows",
                    icon: <Copy className="w-6 h-6 lg:w-8 lg:h-8" />
                  }
                ].map((e, i) => (
                  <TabsTrigger key={`content-preview-tab-${i}`} value={e.key} className="rounded-none pb-4 border-b-4 border-transparent data-[state=active]:border-blue-800 data-[state=active]:text-blue-800 bg-transparent hover:bg-transparent data-[state=active]:bg-transparent">
                    {e.icon}
                    <span className="hidden md:inline md:ml-2 text-2xl lg:text-3xl">{e.text}</span>
                  </TabsTrigger>
                ))
              }
            </div>
            <Separator className="bg-blue-800 rounded-full opacity-25 mt-[-4px] h-1 self-center w-[75%]" />
          </TabsList>
          <TabsContent value="editor" className="self-center w-[85%]">
            <Image src={editorImage} alt="Editor" className="rounded" />
          </TabsContent>
          <TabsContent value="tracer" className="center self-center w-[85%]">
            <Image src={tracerImage} alt="Editor" className="rounded" />
          </TabsContent>
          <TabsContent value="workflows" className="self-center w-[85%]">
            <Image src={workflowsImage} alt="Editor" className="rounded" />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  )
}
