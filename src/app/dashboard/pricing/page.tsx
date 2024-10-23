import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import React from "react"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react';

type Prices = { abo: string, description: string, price: string, features: string }

const prices: Prices[] = [
    { abo: 'Free', description: 'For individuals up to 2 members to organize everything', price: '$0', features: '1 collaborative workspace up to 2 members' },
    { abo: 'Pro', description: 'For small teams to manage projects and team knowledge', price: '$10', features: '1 collaborative workspace up to 2 members' },
    { abo: 'Exklusive', description: 'For large teams to manage big projects and team knowledge', price: 'Contact Sales', features: '1 collaborative workspace up to 2 members' },
]

const feature = Array(7).fill(null);

export default function Pricing() {
    return (
        <main className="w-full text-center min-h-screen bg-gradient-to-b bg-fixed from-gradient-start to-gradient-end space-y-16">
            <section className="space-y-8 px-12 lg:px-44 py-40">
                <h1 className="justify-center text-4xl md:text-6xl pt-30 pb-10 grid cols-1 md:gap-8">
                    <span className="font-bold">Your Work Solution.</span>
                    <span className="text-blue-300">Start Free.</span>
                </h1>
                <span className="flex justify-center grid grid-rows-1 md:grid-cols-3 gap-12 md:gap-32">
                    {prices.map((p, index) => (
                        <Card key={index} className="bg-cyan-950 bg-opacity-30 text-left">
                            <CardHeader>
                                <CardTitle className="text-4xl">{p.abo}</CardTitle>
                                <CardDescription>{p.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <span>
                                    <h1 className="text-5xl pb-8">{p.price}</h1>
                                </span>
                                <span className="flex justify-center">
                                    <Button className="w-full h-[60px] border text-3xl bg-blue-300 hover:bg-blue-200">Get started</Button>
                                </span>
                                <span className="grid grid-cols-6 pt-8 gap-4">
                                    {feature.map((_, index) => (
                                        <><span key={index}><Check className="text-blue-300" /></span><span className="col-span-5">{p.features}</span></>
                                    ))}
                                </span>
                            </CardContent>
                        </Card>
                    ))}
                </span>
            </section>
        </main>
    )
}