import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Mystery = () => {
  const navigate = useNavigate();
  const [glitchText, setGlitchText] = useState("?");

  useEffect(() => {
    const glitchChars = ["?", "¿", "‽", "⁇", "؟", "？"];
    const interval = setInterval(() => {
      setGlitchText(
        glitchChars[Math.floor(Math.random() * glitchChars.length)],
      );
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url(/images/scary-eyes.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#000",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      <div className="text-center z-10 relative">
        <div className="text-9xl text-red-500 font-mono mb-8 animate-pulse">
          {glitchText}
        </div>

        <div className="bg-black bg-opacity-80 p-8 border-2 border-red-700 mb-8 max-w-2xl">
          <p className="text-white text-2xl font-mono leading-relaxed animate-pulse">
            ЧТО ЭТО ТАКОЕ?
            <br />
            <br />
            НЕИЗВЕСТНАЯ АНОМАЛИЯ
            <br />
            ИСТОЧНИК: [ОШИБКА]
            <br />
            НАЗНАЧЕНИЕ: [НЕ ОПРЕДЕЛЕНО]
            <br />
            <br />
            ВНИМАНИЕ: ВЫСОКИЙ УРОВЕНЬ ОПАСНОСТИ
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="py-3 px-8 bg-red-900 hover:bg-red-800 text-white font-bold text-lg border-2 border-red-700 transition-all duration-200 hover:scale-105"
        >
          НАЗАД
        </button>
      </div>
    </div>
  );
};

export default Mystery;
