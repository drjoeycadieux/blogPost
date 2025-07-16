import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const post = await db.post.findUnique({
        where: { id: Number(params.id) },
    });

    if (!post) {
        throw new Response("Not Found", { status: 404 });
    }

    return json({ post });
};

export default function Post() {
    const { post } = useLoaderData<typeof loader>();

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
            <article className="max-w-3xl mx-auto px-4">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                        {post.title}
                    </h1>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(post.createdAt).toLocaleDateString()}
                    </div>
                </header>

                <div className="prose dark:prose-invert max-w-none">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                            {post.content}
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    <a
                        href="/"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        ← Back to all posts
                    </a>
                </div>
            </article>
        </div>
    );
}
