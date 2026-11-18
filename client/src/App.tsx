import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Contact from "./pages/Contact";
import EnterpriseInquiry from "@/pages/EnterpriseInquiry";
import About from "@/pages/About";
import Home from "@/pages/Home";
import Industries from "@/pages/Industries";
import Portfolio from "@/pages/Portfolio";
import Projects from "@/pages/Projects";
import Resources from "@/pages/Resources";
import ServiceDetail from "./pages/ServiceDetail";
import ServiceDirectory from "./pages/ServiceDirectory";
import StartProject from "./pages/StartProject";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/industries"} component={Industries} />
      <Route path={"/portfolio"} component={Portfolio} />
      <Route path={"/projects"} component={Projects} />
      <Route path={"/resources"} component={Resources} />
      <Route path={"/careers"} component={Resources} />
      <Route path={"/blog"} component={Resources} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/start-project"} component={StartProject} />
      <Route path={"/project"} component={StartProject} />
      <Route path={"/enterprise-inquiry"} component={EnterpriseInquiry} />
      <Route path={"/services"} component={ServiceDirectory} />
      <Route path={"/solutions"} component={ServiceDirectory} />
      <Route path={"/services/:slug"} component={ServiceDetail} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
