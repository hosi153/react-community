function Pagination({ currentPage, totalCount, itemsPerPage, onPageChange }) {
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  if (totalPages <= 1) return null;

  // Calculate visible page range (5 pages)
  const getVisiblePages = () => {
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + 4);

    if (end - start < 4) {
      start = Math.max(1, end - 4);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const visiblePages = getVisiblePages();
  const showLeftGradient = visiblePages[0] > 1;
  const showRightGradient = visiblePages[visiblePages.length - 1] < totalPages;

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="flex items-center relative">
        {/* First page & Previous 5 pages */}
        <div className="flex gap-1 mr-2">
          <button
            className="px-2 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed"
            onClick={() => onPageChange(1)}
            disabled={currentPage === 1}
            title="첫 페이지"
          >
            ⟪
          </button>

          <button
            className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            title="이전 페이지"
          >
            ‹
          </button>
        </div>

        {/* Page numbers with gradient effects */}
        <div className="flex items-center relative">
          {/* Left gradient fade */}
          {showLeftGradient && (
            <div className="absolute left-0 w-8 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          )}

          {/* Left fade page */}
          {showLeftGradient && (
            <button
              className="px-3 py-2 border border-gray-300 rounded opacity-30 hover:opacity-60 transition-opacity"
              onClick={() => onPageChange(visiblePages[0] - 1)}
            >
              {visiblePages[0] - 1}
            </button>
          )}

          {/* Main visible pages */}
          <div className="flex gap-1 mx-1">
            {visiblePages.map((number) => (
              <button
                key={number}
                className={`px-3 py-2 border rounded transition-all ${
                  currentPage === number
                    ? "bg-black text-white border-black shadow-md"
                    : "border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                }`}
                onClick={() => onPageChange(number)}
              >
                {number}
              </button>
            ))}
          </div>

          {/* Right fade page */}
          {showRightGradient && (
            <button
              className="px-3 py-2 border border-gray-300 rounded opacity-30 hover:opacity-60 transition-opacity"
              onClick={() =>
                onPageChange(visiblePages[visiblePages.length - 1] + 1)
              }
            >
              {visiblePages[visiblePages.length - 1] + 1}
            </button>
          )}

          {/* Right gradient fade */}
          {showRightGradient && (
            <div className="absolute right-0 w-8 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
          )}
        </div>

        {/* Next page & Next 5 pages & Last page */}
        <div className="flex gap-1 ml-2">
          <button
            className="px-3 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            title="다음 페이지"
          >
            ›
          </button>

          <button
            className="px-2 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed"
            onClick={() => onPageChange(totalPages)}
            disabled={currentPage === totalPages}
            title="마지막 페이지"
          >
            ⟫
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
