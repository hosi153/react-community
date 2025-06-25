import { posts } from "../data/posts";

function PostListPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-2xl font-light text-black mb-1">게시판</h1>
          <p className="text-sm text-gray-500">최신 게시물</p>
        </div>

        <div className="space-y-1">
          {posts
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((post) => (
              <div
                key={post.id}
                className="group bg-white border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-8 h-8 bg-black text-white rounded flex items-center justify-center text-sm font-normal">
                      {post.id}
                    </div>
                    <h2 className="text-base font-normal text-black group-hover:text-gray-600 transition-colors duration-200">
                      {post.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="font-light w-16 text-right">{post.author}</span>
                    <span className="font-light w-20 text-right">{post.createdAt}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default PostListPage;
