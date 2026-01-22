import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col justify-center pt-24 pb-12 container relative">
        {/* Background Decorative Elements */}
        <div className="fixed top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[var(--color-accent)] opacity-10 blur-[120px] rounded-full pointer-events-none" />
        <div className="fixed bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-[var(--color-accent)] opacity-10 blur-[100px] rounded-full pointer-events-none" />
        <Outlet />
      </main>
      <footer className="py-8 text-center text-[var(--color-text-secondary)] text-sm border-t border-[var(--color-border)] mt-auto">
        <p>© {new Date().getFullYear()} Murilo Wolfart. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
