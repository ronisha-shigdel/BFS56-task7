import React from "react";
import Header from "./components/header";
import NavigationBar from "./components/navigation-bar";
import Content from "./components/content";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <NavigationBar />
        <div className="flex-grow">
          <Content />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
