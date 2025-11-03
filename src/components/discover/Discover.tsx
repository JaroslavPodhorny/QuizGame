import SearchSection from "./SearchSection.tsx";

function Discover() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <main className="text-white font-family-main max-w-[1400px] mx-auto px-5 sm:px-10 flex-1 flex flex-col overflow-hidden w-full pt-20 md:pt-25">
        <SearchSection />
      </main>
    </div>
  );
}

export default Discover;
