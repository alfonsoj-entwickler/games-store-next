import { Metadata } from 'next'; 
 
export const metadata: Metadata = {
  title: 'About games store',
  description: 'About games store',
};
 

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode;
  }) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </main>
    );
  }