import SearchSection from "./SearchSection.tsx";

function Discover() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <main className="text-white font-family-main max-w-[1400px] mx-auto px-5 sm:px-10 flex-1 flex flex-col overflow-hidden w-full pt-20 md:pt-25">
        <SearchSection />

        {/*
        <footer className="fixed bottom-0 left-0 right-0 pointer-events-none z-50 mb-12">
          <ActionBar />
        </footer>
        */}
      </main>
    </div>
  );
}

export default Discover;
