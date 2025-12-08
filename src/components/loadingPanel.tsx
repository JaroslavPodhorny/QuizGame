import LoadingSpinner from "./LoadingSpinner";

export default function LoadingPanel() {
  return (
    <div className="w-full screen-minus-header flex items-center justify-center p-4">
      <div className="px-20 py-10 bg-neutral-900 rounded-2xl shadow-2xl text-white flex flex-col items-center gap-4">
        <LoadingSpinner size={48} />
        loading...
      </div>
    </div>
  );
}
