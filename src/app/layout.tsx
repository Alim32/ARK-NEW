import './globals.css';
import './utils.css';
import { Sidebar } from '@/components/Layout/Sidebar';
import { Mobilebar } from '@/components/Layout/Mobilebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Ark Fi - DeFi Simplified',
    description: 'Ark Finance',
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className='scroll-smooth'>
            <body className=''>
                <main className='overflow-hidden mx-auto lg:pt-[15vh] pt-[60px]'>                    
                    {children}
                </main>
                <Mobilebar />
                <Sidebar />
            </body>
        </html>
    );
}