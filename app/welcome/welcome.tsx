import { useState } from "react";

export function Welcome() {
  // サンプルデータ
  const title = "店内にミャクミャクグッズはいくつあるでしょう？";
  
  // 選択肢
  const choices = ["11個", "14個", "17個"];
  const correctAnswer = "17個";

  const [modalOpen, setModalOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleChoice = (choice: string) => {
    setIsCorrect(choice === correctAnswer);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setIsCorrect(null);
  };


  return (
    <main className="welcome-bg flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4 relative overflow-hidden">
      <div className="card-opacity rounded-xl shadow-md p-6 text-2xl font-bold mb-8 text-center border border-gray-200 relative z-10">
        <p>{title}
          <br/ >
        <small className="text-xs text-red-500">*ミャクミャクは完全に隠れていません</small>
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <div className="card-opacity rounded-xl shadow-md p-6 border border-gray-200 flex flex-col items-center relative z-10">
          {choices.map((choice) => (
            <button
              key={choice}
              onClick={() => handleChoice(choice)}
              className="mb-4 w-full px-4 py-2 rounded border border-gray-300 bg-white hover:bg-blue-100 text-lg font-semibold last:mb-0"
            >
              {choice}
            </button>
          ))}
        </div>
      </div>

      {/* モーダル */}
      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 animate-fadein"
          style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 shadow-2xl flex flex-col items-center border-4 border-blue-200 dark:border-blue-400 relative animate-pop">
            <div className="mb-4 flex flex-col items-center">
              {isCorrect ? (
                <>
                  <span className="text-5xl mb-2 animate-bounce">🎉</span>
                  <span className="text-3xl font-extrabold text-green-600 drop-shadow">正解！</span>
                  <span className="mt-2 text-base text-gray-700 dark:text-gray-200">おめでとうございます！</span>
                </>
              ) : (
                <>
                  <span className="text-5xl mb-2 animate-shake">❌</span>
                  <span className="text-3xl font-extrabold text-red-600 drop-shadow">不正解</span>
                </>
              )}
            </div>
            <button
              className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-150"
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
