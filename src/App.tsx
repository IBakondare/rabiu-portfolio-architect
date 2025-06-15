
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import AITutoringDemo from "./pages/demos/AITutoringDemo";
import BlockchainDemo from "./pages/demos/BlockchainDemo";
import ELearningDemo from "./pages/demos/ELearningDemo";
import AnalyticsDemo from "./pages/demos/AnalyticsDemo";
import FinTechDemo from "./pages/demos/FinTechDemo";
import IoTDemo from "./pages/demos/IoTDemo";
import SocialMediaDemo from "./pages/demos/SocialMediaDemo";
import ChatbotDemo from "./pages/demos/ChatbotDemo";
import WebScrapingDemo from "./pages/demos/WebScrapingDemo";
import CloudStorageDemo from "./pages/demos/CloudStorageDemo";
import TodoDemo from "./pages/demos/TodoDemo";
import LiveChatWidget from "./components/LiveChatWidget";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/demo/ai-tutoring" element={<AITutoringDemo />} />
          <Route path="/demo/blockchain" element={<BlockchainDemo />} />
          <Route path="/demo/todo-app" element={<TodoDemo />} />
          <Route path="/demo/elearning" element={<ELearningDemo />} />
          <Route path="/demo/analytics" element={<AnalyticsDemo />} />
          <Route path="/demo/fintech" element={<FinTechDemo />} />
          <Route path="/demo/iot" element={<IoTDemo />} />
          <Route path="/demo/social-media" element={<SocialMediaDemo />} />
          <Route path="/demo/chatbot" element={<ChatbotDemo />} />
          <Route path="/demo/web-scraping" element={<WebScrapingDemo />} />
          <Route path="/demo/cloud-storage" element={<CloudStorageDemo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}  
          <Route path="*" element={<NotFound />} />
        </Routes>
        <LiveChatWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
