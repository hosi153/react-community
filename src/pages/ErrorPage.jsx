import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-light text-black mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-8 font-light">
          죄송합니다. 요청하신 페이지를 찾을 수 없습니다.
        </p>
        <Link to="/" className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-light">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
