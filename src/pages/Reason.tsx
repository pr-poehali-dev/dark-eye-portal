import { useNavigate } from "react-router-dom";

const Reason = () => {
  const navigate = useNavigate();

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
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      <div className="text-center z-10 relative max-w-4xl px-8">
        <h1 className="text-4xl font-bold mb-8 text-red-500 font-mono tracking-wider animate-pulse">
          ПРИЧИНА ИСЧЕЗНОВЕНИЯ DIMAS-ASRIEL
        </h1>

        <div className="bg-black bg-opacity-60 p-8 border-2 border-red-700 mb-8">
          <p className="text-white text-xl font-mono leading-relaxed">
            [СЕКРЕТНЫЕ ДАННЫЕ]
            <br />
            <br />
            Последний контакт: [УДАЛЕНО]
            <br />
            Местоположение: НЕИЗВЕСТНО
            <br />
            Статус: [КЛАССИФИЦИРОВАНО]
            <br />
            <br />
            Возможные причины исчезновения:
            <br />
            • Активация протокола экстренной эвакуации
            <br />
            • Переход в скрытый режим
            <br />
            • [ДАННЫЕ ПОВРЕЖДЕНЫ]
            <br />
            <br />
            Расследование продолжается...
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

export default Reason;
