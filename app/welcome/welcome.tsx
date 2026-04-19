import { useState } from "react";

export function Welcome() {
  // サンプルデータ
  const title = "店内にミャクミャクグッズはいくつあるでしょう？";
  
  const [inputValue, setInputValue] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCorrect(Number(inputValue.trim()) === 20 || inputValue.trim() == "２０");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setIsCorrect(null);
  };

  return (
    <main className="welcome-bg flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="card-opacity rounded-xl shadow-md p-6 text-2xl font-bold mb-8 text-center border border-gray-200 dark:border-gray-700">
        {title}
      </div>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="card-opacity rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-700 flex flex-col items-center"
        >
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder="数字を入力"
            className="mb-4 w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 text-lg"
          >
            答え合わせ
          </button>
        </form>
      </div>

      {/* モーダル */}
      {modalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
        >
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
