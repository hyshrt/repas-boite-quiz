import { useState } from "react";

export function Welcome() {
  // サンプルデータ
  const title = "店内に、ミャクミャクグッズがいくつあるでしょう？";
  const options = [
    { text: "10個", isCorrect: false },
    { text: "20個", isCorrect: true },
    { text: "30個", isCorrect: false },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleCardClick = (correct: boolean) => {
    setIsCorrect(correct);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setIsCorrect(null);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <h1 className="text-2xl font-bold mb-8 text-center">{title}</h1>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        {options.map((option, idx) => (
          <button
            key={option.text}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-lg font-medium border border-gray-200 dark:border-gray-700 active:scale-95 transition-transform"
            onClick={() => handleCardClick(option.isCorrect)}
          >
            {option.text}
          </button>
        ))}
      </div>

      {/* モーダル */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg flex flex-col items-center">
            <div className={`text-2xl font-bold mb-4 ${isCorrect ? "text-green-600" : "text-red-600"}`}>
              {isCorrect ? "正解" : "不正解"}
            </div>
            <button
              className="mt-2 px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700"
              onClick={closeModal}
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
