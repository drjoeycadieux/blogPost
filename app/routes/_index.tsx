import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

export const meta: MetaFunction = () => {
  return [
    { title: "This Is A Blog - V1" },
    { name: "description", content: "Welcome to our blog!" },
  ];
};

export const loader = async () => {
  const posts = await db.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });
  return json({ posts });
};

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            Blog Posts
          </h1>
        </header>

        <div className="grid gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            >
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                <a
                  href={`/posts/${post.id}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {post.title}
                </a>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.content.slice(0, 200)}
                {post.content.length > 200 ? "..." : ""}
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(post.createdAt).toLocaleDateString()}
              </div>
            </article>
          ))}

          {posts.length === 0 && (
            <p className="text-center text-gray-600 dark:text-gray-400">
              No posts yet. Create your first post!
            </p>
          )}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/posts/new"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create New Post
          </a>
        </div>
      </div>
    </div>
  );
}
