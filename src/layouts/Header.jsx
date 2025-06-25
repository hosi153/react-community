import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-gray-500 hover:text-black transition-colors font-light text-sm"
          >
            {" "}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>

              <h1 className="text-xl font-light text-black">React Community</h1>
            </div>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              to="/posts"
              className="text-gray-500 hover:text-black transition-colors font-light text-sm"
            >
              게시판
            </Link>
            <Link
              to="/products"
              className="text-gray-500 hover:text-black transition-colors font-light text-sm"
            >
              상품 목록
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
