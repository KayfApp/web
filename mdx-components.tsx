import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Heading1, Heading2, Heading3, Heading4, OrderedList, UnorderedList } from '@/components/ui/typography'
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => <Heading1>{children}</Heading1>,
        h2: ({ children }) => <Heading2>{children}</Heading2>,
        h3: ({ children }) => <Heading3>{children}</Heading3>,
        h4: ({ children }) => <Heading4>{children}</Heading4>,
        table: ({ children }) => <Table>{children}</Table>,
        tbody: ({ children }) => <TableBody>{children}</TableBody>,
        thead: ({ children }) => <TableHeader>{children}</TableHeader>,
        caption: ({ children }) => <TableCaption>{children}</TableCaption>,
        tr: ({ children }) => <TableRow>{children}</TableRow>,
        td: ({ children }) => <TableCell>{children}</TableCell>,
        tfoot: ({ children }) => <TableFooter>{children}</TableFooter>,
        th: ({ children }) => <TableHead>{children}</TableHead>,
        ul: ({ children }) => <UnorderedList>{children}</UnorderedList>,
        ol: ({ children }) => <OrderedList>{children}</OrderedList>,
        ...components,
    }
}
