"use client";
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main/Main';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-950 text-white">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
