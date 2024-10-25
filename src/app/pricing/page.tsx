import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import React from "react"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react';
import { Heading1, Paragraph } from "@/components/ui/typography";
import Section from "@/components/layout/layout";

type Prices = { abo: string, description: string, price: string, features: string }

const prices: Prices[] = [
    { abo: 'Free', description: 'Completely free, everything included. Just grab the lastest release and you are ready to go!', price: '$0', features: '1 collaborative workspace up to 2 members' },
    { abo: 'Pro', description: 'Simple hosting solution for power users. No added features, but access to a fully setup environment!', price: '$10', features: '1 collaborative workspace up to 2 members' },
    { abo: 'Enterprise', description: "For teams wanting to use Kayf. We'll discuss and tailor our solutiom to your needs.", price: 'Contact Sales', features: '1 collaborative workspace up to' },
]

const feature = Array(7).fill(null);

export default function Pricing() {
    return (
        <main className="flex flex-col w-screen grow items-center">
            <Section className="space-y-12">
                <Heading1 className="text-center font-normal !leading-snug">
                    <u>Highly scalable</u> tools.
                    <br />
                    Revolutionize your data managment now.
                    <br />
                    Start <u>Free</u>!
                </Heading1>
                <div className="flex justify-center grid grid-rows-1 md:grid-cols-3 gap-12 md:gap-32">
                    {prices.map((p, i) => (
                        <Card key={`pricing-item-${i}`} className="bg-secondary text-left">
                            <CardHeader>
                                <CardTitle className="text-4xl">{p.abo}</CardTitle>
                                <CardDescription>{p.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Heading1 className="text-5xl pb-8">{p.price}</Heading1>
                                <Button className="w-full p-6 border text-xl">Get started</Button>
                                {feature.map((_, j) => (
                                    <div key={`feature-item-${i}-${j}`} className="flex grow flex-row items-center mt-4">
                                        <Check />
                                        <Paragraph className="!mt-0 ml-2">
                                            {p.features}
                                        </Paragraph>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>
        </main >
    )
}
