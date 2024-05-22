import Header from "@/app/(home)/components/Header";
import { fullBlog } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import withFooter from "@/app/withFooter";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}']{
        "currentSlug":slug.current,
          title,
          content,
          titleImage
          }[0]`;
  const data = await client.fetch(query);
  return data;
}

async function BlogArticle({ params }: { params: { slug: string } }) {
  const data: fullBlog = await getData(params.slug);
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto sm:p-5">
        <Header />
      </div>
      <div className="max-w-5xl mx-auto px-8 mt-8">
        <h1>
          <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
            Anik Malik - Blog
          </span>
          <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
            {data.title}
          </span>
        </h1>

        <Image
          src={urlFor(data.titleImage).url()}
          width={800}
          height={800}
          alt="Title Image"
          priority
          className="rounded mt-8 mx-auto"
        />
        <div className="mx-auto mt-16 prose prose-blue prose-xl dark:prose-invert">
          <PortableText value={data.content} />
        </div>
      </div>
    </div>
  );
}

export default withFooter(BlogArticle);
