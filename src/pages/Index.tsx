import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  const [targetRoute, setTargetRoute] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);
  const damageAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Запускаем фоновую музыку
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch(console.log);
    }
  }, []);

  const handleButtonClick = (route: string) => {
    // Воспроизводим звук урона
    if (damageAudioRef.current) {
      damageAudioRef.current.currentTime = 0;
      damageAudioRef.current.play().catch(console.log);
    }

    // Запускаем анимацию падения
    setTargetRoute(route);
    setIsAnimating(true);

    // Переходим на страницу после анимации
    setTimeout(() => {
      navigate(route);
      setIsAnimating(false);
    }, 2000);
  };

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
      {/* Тёмный оверлей */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Фоновая музыка */}
      <audio ref={audioRef} preload="auto">
        <source src="/sounds/fallen-down.mp3" type="audio/mpeg" />
      </audio>

      {/* Звук урона */}
      <audio ref={damageAudioRef} preload="auto">
        <source src="/sounds/damage.mp3" type="audio/mpeg" />
      </audio>

      {/* Анимация падающего Азриэля */}
      {isAnimating && (
        <div
          className={`absolute z-50 transition-all duration-2000 ease-in ${
            isAnimating
              ? "translate-y-full opacity-100"
              : "-translate-y-20 opacity-0"
          } left-1/2 transform -translate-x-1/2 top-0`}
          style={{
            transform: isAnimating
              ? "translateX(-50%) translateY(100vh)"
              : "translateX(-50%) translateY(-5rem)",
          }}
        >
          <img
            src="/images/asriel-falling.gif"
            alt="Falling Asriel"
            className="w-32 h-32 object-contain"
          />
        </div>
      )}

      {/* Основной контент */}
      <div className="text-center z-10 relative">
        <h1 className="text-4xl font-bold mb-8 text-red-500 font-mono tracking-wider animate-pulse">
          секретная информация канала DIMAS_ASRIEL
        </h1>

        <div className="space-y-6">
          <button
            onClick={() => handleButtonClick("/protocol-a1")}
            disabled={isAnimating}
            className="block w-80 py-4 px-8 bg-red-900 hover:bg-red-800 text-white font-bold text-xl border-2 border-red-700 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            PROTOCOL A1
          </button>

          <button
            onClick={() => handleButtonClick("/reason")}
            disabled={isAnimating}
            className="block w-80 py-4 px-8 bg-red-900 hover:bg-red-800 text-white font-bold text-xl border-2 border-red-700 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            причина исчезновение DIMAS-ASRIEL
          </button>

          <button
            onClick={() => handleButtonClick("/mystery")}
            disabled={isAnimating}
            className="block w-80 py-4 px-8 bg-red-900 hover:bg-red-800 text-white font-bold text-6xl border-2 border-red-700 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
