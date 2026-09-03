import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prasad Office Automation & Technologies Pvt. Ltd.',
  description: 'Technology Solutions Partner Since 1998.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
