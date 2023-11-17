import type { Metadata } from 'next';

import TableComponent from "./components/TableComponent"

export const metadata: Metadata = {
  title: 'API3 Latam The Graph Workshop',
  description: 'Simple demonstration on how to consume the subgraph from a web app.',
}

export default function Home() {
    return (
      <main>
        <TableComponent />
      </main>
    )
  }