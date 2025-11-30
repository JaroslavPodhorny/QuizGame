import SearchSection from "./SearchSection.tsx";

function Discover() {
  return (
    <div className="flex flex-col h-screen">
      <main className="text-white font-family-main max-w-[1400px] mx-auto px-5 sm:px-10 flex-1 flex flex-col overflow-hidden w-full">
        <SearchSection />
      </main>
    </div>
  );
}

export default Discover;
