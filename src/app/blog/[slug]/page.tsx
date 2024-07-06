import Head from 'next/head';
import Image from 'next/image';

const postContent = {
    'remove-title-from-embedded-youtube-videos': {
        title: 'Remove Title from Embedded YouTube Videos for a Cleaner Look',
        description: 'Remove titles from embedded YouTube videos with Vasux. Clean, distraction-free video embedding without YouTube&apos;s controls, ads, or branding.',
        imageUrl: '/blog1.jpg',
        content: (
            <>
                <p>Are you tired of YouTube&apos;s branding, controls, ads, and especially the video titles cluttering your embedded videos? Look no further! YT Video Embedded Title Remove is here to help you remove titles from embedded YouTube videos, providing a clean, professional, and distraction-free viewing experience.</p>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-2">What is YT Video Embedded Title Remove?</h2>
                    <p>YT Video Embedded Title Remove is a user-friendly tool designed to help you embed YouTube videos seamlessly without showing YouTube&apos;s title, controls, ads, or branding. With this tool, you can remove the title from embedded YouTube videos, ensuring that your content remains the focal point.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-2">How Does YT Video Embedded Title Remove Work?</h2>
                    <ol className="list-decimal list-inside mb-4">
                        <li>Copy the YouTube URL: Find the YouTube video you want to embed.</li>
                        <li>Paste in the Input Box: Go to <a href="https://vasux.site" className="text-blue-500 hover:underline">vasux.site</a> and paste the copied URL into our input box.</li>
                        <li>Generate a New URL: Our tool will generate a new URL for you.</li>
                        <li>Use the Generated URL: Embed this new URL anywhere on your site to display the video without any YouTube branding.</li>
                    </ol>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-2">Benefits of Using YT Video Embedded Title Remove</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>No Distractions: Remove the title from embedded YouTube videos along with YouTube&apos;s controls, ads, and branding.</li>
                        <li>Seamless Embedding: Provide a clean, professional look for embedded videos.</li>
                        <li>User-Friendly Experience: Enhance user engagement by focusing solely on the video content.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-2">Features</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li>Ad-Free Videos: Ensure no ads interrupt your videos.</li>
                        <li>No YouTube Controls: Videos play without YouTube&apos;s control interface.</li>
                        <li>Clean Embedding: Simple and elegant video embedding for a professional appearance.</li>
                        <li>Easy to Use: Just copy, paste, and generate.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-3xl font-semibold mb-2">Step-by-Step Guide to Using YT Video Embedded Title Remove</h2>
                    <ol className="list-decimal list-inside mb-4">
                        <li>Visit <a href="https://vasux.site" className="text-blue-500 hover:underline">vasux.site</a>.</li>
                        <li>Copy the URL of your desired YouTube video.</li>
                        <li>Paste it into the input box on our site.</li>
                        <li>Click on &apos;Generate URL&apos;.</li>
                        <li>Use the generated URL to embed the video on your platform.</li>
                    </ol>
                </section>
            </>
        ),
    },
};

interface Params {
    params: {
        slug: string;
    };
}

export default function BlogPost({ params }: Params) {
    const { slug } = params;

    const post = postContent[slug];

    if (!post) {
        return <p>Post not found</p>;
    }

    return (
        <>
            <Head>
                <title>{post.title} - Vasux</title>
                <meta name="description" content={post.description} />
            </Head>
            <main className="blog-container container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    objectFit="cover"
                    width={1000}
                    height={500}
                    className="mt-5 mb-10 rounded-lg"
                />
                {post.content}
            </main>
        </>
    );
}
