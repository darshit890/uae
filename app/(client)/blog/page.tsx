import { client, urlFor } from '@/app/lib/sanity'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { simpleBlogCard } from '@/lib/inventory'

export const revalidate = 30; // revalidate at most 30 seconds

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      images
  }`;

  const data = await client.fetch(query);

  return data;
}

const BlogPage = async () => {
    const data: simpleBlogCard[] = await getData();

  console.log(data);
  
  return (
    <section className='max-w-7xl mx-auto px-10 my-20 flex flex-col'>
        <h1 className='font-semibold text-center mb-5 text-3xl lg:text-5xl'>Blogs</h1>
        <div className="grid grid-cols-1  md:grid-cols-2 mt-5 gap-5">
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image
            src={urlFor(post.images[0]).url()}
            alt="image"
            width={500}
            height={500}
            className="rounded-t-lg h-[200px] object-cover"
          />

          <CardContent className="mt-5">
            <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
            <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
              {post.smallDescription}
            </p>
            <Button asChild className="w-full mt-7">
              <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
    </section>
  )
}

export default BlogPage