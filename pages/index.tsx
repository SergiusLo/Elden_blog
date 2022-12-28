import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";
import Link from "next/link";

interface Props {
  posts: [Post];
}

const Home: NextPage = ({ posts }: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>My blog</title>
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
          <div className="px-10 space-y-5">
            <h1 className="text-6xl max-w-xl font-serif">
            Elden Ring {" "}
              <span className="underline decoration-yellow-600 decoration-4">
                Awesome Blog
              </span>{" "}
            </h1>
            <h2>
            Elden Ring Wiki Guide: Walkthrough, Multiplayer, Bosses, Secrets, Riding, Skills and more for Elden Ring! The new From Software game in collaboration with George. R.R. Martin!
            </h2>
          </div>
          <Image
            className="hidden md:inline-flex h-32 lg:h-full"
            width={150}
            height={150}
            alt="Elden"
            src="/images/EldenRing-lg.png"
          />
        </div>
        {/* Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 lg:p-6">
          {posts.map((post) => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className="border rounded-lg group cursor-pointer overflow-hidden">
                <Image
                  className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                  width={300}
                  height={240}
                  alt="blog image"
                  src={urlFor(post.mainImage).url()!}
                />
                <div className="flex justify-between p-5 bg-white">
                  <div>
                    <p className="text-lg font-bold">{post.title}</p>
                    <p className="text-xs">
                      {post.description} by {post.author.name}
                    </p>
                  </div>
                  <Image
                    className="h-12 w-12 rounded-full"
                    width={50}
                    height={50}
                    alt="author image"
                    src={urlFor(post.author.image).url()!}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
      title,
      author -> {
        name,
        image
      },
      description,
      mainImage,
      slug,
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};

export default Home;
