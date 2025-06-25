import { products } from "../data/products";

function ProductListPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-2xl font-light text-black mb-1">
            상품 목록
          </h1>
          <p className="text-sm text-gray-500">최신 상품</p>
        </div>

        <div className="space-y-1">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-8 h-8 bg-black text-white rounded flex items-center justify-center text-sm font-normal">
                    {product.id}
                  </div>
                  <h2 className="text-base font-normal text-black group-hover:text-gray-600 transition-colors duration-200">
                    {product.name}
                  </h2>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span className="font-light w-20 text-right">{product.price.toLocaleString()}원</span>
                  <span className="font-light w-16 text-right">{product.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;