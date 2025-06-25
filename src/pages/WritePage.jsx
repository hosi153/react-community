import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

// 1. Zod로 유효성 검사 스키마 정의
const postSchema = z.object({
  title: z.string().min(3, "제목은 3글자 이상이어야 합니다."),
  author: z.string().nonempty("작성자 이름을 입력해주세요."),
  content: z.string().min(10, "내용은 10글자 이상이어야 합니다."),
});

function WritePage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = async (data) => {
    try {
      const { error } = await supabase.from("posts").insert([data]);

      if (error) {
        console.error("Error inserting post:", error);
        return;
      }

      navigate("/posts");
    } catch (err) {
      console.error("Supabase connection error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-2xl font-light text-black mb-1">
            새 게시물 작성
          </h1>
          <p className="text-sm text-gray-500">
            게시판에 새로운 글을 작성해보세요
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-normal text-black mb-2"
              >
                제목
              </label>
              <input
                id="title"
                type="text"
                {...register("title")}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                placeholder="게시물 제목을 입력하세요"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="author"
                className="block text-sm font-normal text-black mb-2"
              >
                작성자
              </label>
              <input
                id="author"
                type="text"
                {...register("author")}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                placeholder="작성자 이름을 입력하세요"
              />
              {errors.author && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.author.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="content"
                className="block text-sm font-normal text-black mb-2"
              >
                내용
              </label>
              <textarea
                id="content"
                {...register("content")}
                rows={8}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors resize-none"
                placeholder="게시물 내용을 입력하세요"
              />
              {errors.content && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.content.message}
                </p>
              )}
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={() => navigate("/posts")}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-light"
              >
                취소
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-light disabled:opacity-50"
              >
                {isSubmitting ? "제출 중..." : "게시물 작성"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WritePage;
