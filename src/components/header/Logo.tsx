import logoRequiz from "../../assets/logo_Requiz.png";

export default function Logo() {
  return (
    <div className="flex items-center">
      <img
        src={logoRequiz}
        alt="ReQuiz Logo"
        className="w-12 h-12 md:w-16 md:h-16 mr-2"
      />
      <h1 className="font-family-black text-3xl py-6 mr-5 md:text-5xl md:mr-12">
        GeoQuiz
      </h1>
    </div>
  );
}
