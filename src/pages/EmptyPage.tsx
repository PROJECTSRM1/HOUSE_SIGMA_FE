import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface EmptyPageProps {
  title: string;
}

const EmptyPage = ({ title }: EmptyPageProps) => {
  return (
    <>
      <Navbar onLoginClick={() => {}} />
      <main className="min-h-screen pt-[4.5rem] flex items-center justify-center bg-secondary">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold text-navy mb-4">{title}</h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            This page is under construction. Check back soon for updates!
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal text-primary-foreground rounded-lg font-semibold hover:bg-teal-dark transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EmptyPage;
