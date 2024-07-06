import Link from 'next/link';

export default function Blog() {
    const posts = [
        {
            slug: 'remove-title-from-embedded-youtube-videos',
            title: 'Remove Title from Embedded YouTube Videos for a Cleaner Look',
        },
    ];

    return (
        <main className="blog-list container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.slug} className="mb-4">
                        <Link href={`/blog/${post.slug}`}>
                            <p className="text-blue-500 hover:underline">{post.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}
