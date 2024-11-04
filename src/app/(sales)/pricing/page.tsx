import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import React from "react"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react';
import { Heading1, Large, Mute, Paragraph, Small } from "@/components/ui/typography";
import { Main, Section } from "@/components/layout";
import { Separator } from "@/components/ui/separator";

type Prices = { abo: string, description: string, price: string, priceDescriptor: string, action: string, features: string[] }

const prices: Prices[] = [
    {
        abo: 'Free',
        description: 'Completely free, everything included. Just grab the lastest release and you are ready to go!',
        price: '$0',
        priceDescriptor: 'Forever!',
        action: 'Get started',
        features: [
            "Awesome hybrid editor",
            "Fast and scalable hybrid search",
            "Easy workflows integration",
            "Real-time collaboration",
            "Unlimited customizability",
        ]
    },
    {
        abo: 'Pro',
        description: 'Simple hosting solution for power users. No added features, but access to a fully setup environment!',
        price: '$10',
        priceDescriptor: 'per month. This is an upgradeable base package!',
        action: 'View plans',
        features: [
            "Everything of the free-tier",
            "No-code auto setup",
            "Access to high-performance hardware",
            "Instant Tracer-LLM response access",
            "Priority in feature requests"
        ]
    },
    {
        abo: 'Enterprise',
        description: "For teams wanting to use Kayf. We'll discuss and tailor our solutiom to your needs.",
        price: 'Contact Sales',
        priceDescriptor: 'Contact us for further details!',
        action: 'Shoot us an email!',
        features: [
            "Everything of the pro-tier",
            "Adjusted to your organization structure",
            "VIP Support"
        ]
    },
]

export default function Pricing() {
    return (
        <Main>
            <Section className="space-y-12">
                <Heading1 className="text-center font-normal !leading-snug">
                    <u>Highly scalable</u> tools.
                    <br />
                    Revolutionize your data managment now.
                    <br />
                    Start <u>Free</u>!
                </Heading1>
                <div className="grid grid-rows-1 md:grid-cols-3 gap-12 md:gap-32">
                    {prices.map((p, i) => (
                        <Card key={`pricing-item-${i}`} className="bg-secondary text-left">
                            <CardHeader>
                                <CardTitle className="text-4xl">{p.abo}</CardTitle>
                                <CardDescription>{p.description}</CardDescription>
                            </CardHeader>
                            <Separator />
                            <CardContent className="pt-6">
                                <div className="pb-4 space-y-2">
                                    <Large className="lg:text-3xl">{p.price}</Large>
                                    <Mute>{p.priceDescriptor}</Mute>
                                </div>
                                <Button className="w-full p-6 border text-xl">{p.action}</Button>
                                {p.features.map((f, j) => (
                                    <div key={`feature-item-${i}-${j}`} className="flex grow flex-row items-center mt-4">
                                        <Check />
                                        <Paragraph className="!mt-0 ml-2">
                                            {f}
                                        </Paragraph>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>
        </Main >
    )
}
