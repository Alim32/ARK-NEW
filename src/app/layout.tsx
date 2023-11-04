import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';
import './utils.css';
import { Sidebar } from '@/components/Layout/Sidebar';
import { Modal } from '@/components/Layout/Modal';

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
                <Sidebar />
            </body>
        </html>
    );
}
