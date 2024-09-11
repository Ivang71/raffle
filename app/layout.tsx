import '@/app/ui/global.css'
import { Metadata } from 'next'
import { Header, Footer } from '@/app/components'
import { Analytics } from './components'

export const metadata: Metadata = {
    title: 'Raffle',
    description: 'The fair raffle',
    metadataBase: new URL('https://ivang71.github.io'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <Analytics/>
        </head>
            <body>
                <div className='helveticaNeue'>
                    <Header />
                    <main>
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
