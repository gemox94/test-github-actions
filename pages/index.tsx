// pages/index.tsx
import Head from 'next/head';

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
            <Head>
                <title>Next.js Tailwind Example</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold text-blue-600 mb-4">
                    Welcome to Next.js with Tailwind CSS!
                </h1>
                <p className="text-xl text-gray-700">This is a simple home page with a couple utility functions to test.</p>
                <button className="mt-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    Click Me
                </button>
            </main>
        </div>
    );
}
