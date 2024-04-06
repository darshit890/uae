import React from 'react'
import Image from 'next/image'
import { PortableText } from 'next-sanity'
import { client, urlFor } from '@/app/lib/sanity';
import { fullBlog } from '@/lib/inventory';

export const revalidate = 30; // revalidate at most 30 seconds

async function getData(slug: string) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          description,
          description1,
          description2,
          images
      }[0]`;

  const data = await client.fetch(query);
  return data;
}

const page = async ({
    params,
  }: {
    params: { slug: string };
  }) => {
    const data: fullBlog = await getData(params.slug);
    console.log(data)
  return (
    
    <section className='max-w-7xl mx-auto my-20 px-20'>
        <div className="mt-8">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Raazain - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.images[0]).url()}
        width={800}
        height={100}
        alt="Title Image"
        priority
        className="rounded-lg mt-8 border flex mx-auto aspect-video w-[1000px] h-[300px]"
      />

      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary px-16">
        <PortableText value={data.description} />
      </div>
      <Image
        src={urlFor(data.images[0]).url()}
        width={800}
        height={100}
        alt="Title Image"
        priority
        className="rounded-lg mt-8 border flex mx-auto aspect-video w-[1000px] h-[300px]"
      />
      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary px-16">
        <PortableText value={data.description1} />
      </div>
      <Image
        src={urlFor(data.images[0]).url()}
        width={800}
        height={100}
        alt="Title Image"
        priority
        className="rounded-lg mt-8 border flex mx-auto aspect-video w-[1000px] h-[300px]"
      />
      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary px-16">
        <PortableText value={data.description2} />
      </div>
    </div>
    </section>
  )
}

export default page