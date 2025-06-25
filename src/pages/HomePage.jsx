import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center py-20">
          <h1 className="text-6xl font-light text-black mb-4">
            React <span className="font-semibold">Community</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 font-light">
            사용자들이 소통하고 정보를 공유하는 플랫폼
          </p>
          <p className="text-lg text-gray-500 mb-12">
            게시판과 상품 목록을 통해 다양한 콘텐츠를 만나보세요
          </p>
          <div className="flex justify-center gap-6">
            <Link to="/posts" className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-light">
              게시판 보기
            </Link>
            <Link to="/products" className="border border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors font-light">
              상품 둘러보기
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-light text-black mb-4">
              <span className="font-semibold">게시판</span>에서
            </h2>
            <p className="text-gray-600 font-light">
              다양한 주제로 소통하고 정보를 공유할 수 있습니다
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-light text-black mb-4">
              <span className="font-semibold">상품 목록</span>에서
            </h2>
            <p className="text-gray-600 font-light">
              엄선된 상품들을 카테고리별로 확인할 수 있습니다
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;