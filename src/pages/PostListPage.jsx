import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import Pagination from "../components/Pagination";

function PostListPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const postsPerPage = 10;

  useEffect(() => {
    async function fetchPosts() {
      try {
        const from = (currentPage - 1) * postsPerPage;
        const to = from + postsPerPage - 1;

        const { data, error, count } = await supabase
          .from("posts")
          .select("*", { count: "exact" })
          .order("id", { ascending: false })
          .range(from, to);

        if (error) {
          console.error("Error fetching posts:", error);
        } else {
          setPosts(data || []);
          setTotalCount(count || 0);
        }
      } catch (err) {
        console.error("Supabase connection error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-light text-black mb-1">게시판</h1>
            <p className="text-sm text-gray-500">최신 게시물</p>
          </div>
          <Link
            to="/write"
            className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors duration-200"
          >
            <span className="text-lg font-light">+</span>
          </Link>
        </div>

        <div className="space-y-1">
          {loading ? (
            <div className="text-center py-8">
              <p className="text-gray-500">로딩 중...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">게시물이 없습니다.</p>
            </div>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="group bg-white border-b border-gray-200 p-4 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-8 h-8 bg-black text-white rounded flex items-center justify-center text-sm font-normal">
                      {post.id}
                    </div>
                    <div className="w-px h-6 bg-gray-200"></div>
                    <h2 className="text-base font-normal text-black group-hover:text-gray-600 transition-colors duration-200">
                      {post.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <div className="w-px h-6 bg-gray-200"></div>
                    <span className="font-light w-16 text-right">
                      {post.author}
                    </span>
                    <div className="w-px h-6 bg-gray-200"></div>
                    <span className="font-light w-20 text-right">
                      {new Date(post.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <Pagination
          currentPage={currentPage}
          totalCount={totalCount}
          itemsPerPage={postsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default PostListPage;
