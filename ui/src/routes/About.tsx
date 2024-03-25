import { createFileRoute } from '@tanstack/react-router'

import About from 'pages/About/index.tsx'

export const Route = createFileRoute('/About')({
  component: () => <About />,
})
