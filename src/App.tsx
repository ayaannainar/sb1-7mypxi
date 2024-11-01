import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AiChatBot from './components/AiChatBot';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Services />
      <Projects />
      <Footer />
      <AiChatBot />
      <WhatsAppButton />
    </div>
  );
}

export default App;