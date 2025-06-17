import { useState, useEffect, useRef } from "react";

const Index = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedContent, setSelectedContent] = useState<string | null>(null);
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

  const contentData = {
    protocolA1: `[КЛАССИФИЦИРОВАННАЯ ИНФОРМАЦИЯ]
СТАТУС: АКТИВЕН
УРОВЕНЬ ДОСТУПА: КРИТИЧЕСКИЙ

Протокол A1 активирован в случае обнаружения аномальной активности.
Все данные передаются в центральную базу данных.
Доступ к информации ограничен.`,

    reason: `[СЕКРЕТНЫЕ ДАННЫЕ]

Последний контакт: [УДАЛЕНО]
Местоположение: НЕИЗВЕСТНО
Статус: [КЛАССИФИЦИРОВАНО]

Возможные причины исчезновения:
• Активация протокола экстренной эвакуации
• Переход в скрытый режим
• [ДАННЫЕ ПОВРЕЖДЕНЫ]

Расследование продолжается...`,

    mystery: `ЧТО ЭТО ТАКОЕ?

НЕИЗВЕСТНАЯ АНОМАЛИЯ
ИСТОЧНИК: [ОШИБКА]
НАЗНАЧЕНИЕ: [НЕ ОПРЕДЕЛЕНО]

ВНИМАНИЕ: ВЫСОКИЙ УРОВЕНЬ ОПАСНОСТИ`,
  };

  const handleButtonClick = (contentKey: keyof typeof contentData) => {
    // Воспроизводим звук урона
    if (damageAudioRef.current) {
      damageAudioRef.current.currentTime = 0;
      damageAudioRef.current.play().catch(console.log);
    }

    // Запускаем анимацию падения
    setIsAnimating(true);

    // Показываем контент после анимации
    setTimeout(() => {
      setSelectedContent(contentData[contentKey]);
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
          className="absolute z-50 left-1/2 -translate-x-1/2 transition-transform duration-[2000ms] ease-in"
          style={{
            top: isAnimating ? "100vh" : "-5rem",
            transform: "translateX(-50%)",
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
      <div className="flex items-center justify-center gap-8 z-10 relative max-w-6xl w-full px-8">
        {/* Левая часть - кнопки */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8 text-red-500 font-mono tracking-wider animate-pulse">
            секретная информация канала DIMAS_ASRIEL
          </h1>

          <div className="space-y-6">
            <button
              onClick={() => handleButtonClick("protocolA1")}
              disabled={isAnimating}
              className="block w-80 py-4 px-8 bg-red-900 hover:bg-red-800 text-white font-bold text-xl border-2 border-red-700 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              PROTOCOL A1
            </button>

            <button
              onClick={() => handleButtonClick("reason")}
              disabled={isAnimating}
              className="block w-80 py-4 px-8 bg-red-900 hover:bg-red-800 text-white font-bold text-xl border-2 border-red-700 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              причина исчезновение DIMAS-ASRIEL
            </button>

            <button
              onClick={() => handleButtonClick("mystery")}
              disabled={isAnimating}
              className="block w-80 py-4 px-8 bg-red-900 hover:bg-red-800 text-white font-bold text-6xl border-2 border-red-700 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ?
            </button>
          </div>

          {selectedContent && (
            <button
              onClick={() => setSelectedContent(null)}
              className="mt-6 py-2 px-6 bg-gray-700 hover:bg-gray-600 text-white font-bold text-sm border-2 border-gray-500 transition-all duration-200"
            >
              СКРЫТЬ
            </button>
          )}
        </div>

        {/* Правая часть - отображение контента */}
        {selectedContent && (
          <div className="bg-black bg-opacity-80 p-8 border-2 border-red-700 max-w-md animate-fade-in">
            <pre className="text-white text-lg font-mono leading-relaxed whitespace-pre-wrap">
              {selectedContent}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
