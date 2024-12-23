import { Main, MarkdownSection } from '@/components/layout'
import Content from './content.mdx'

export default function KEditor() {
    return (
        <Main>
            <MarkdownSection>
                <Content />
            </MarkdownSection>
        </Main>
    )
}
