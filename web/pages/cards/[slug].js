import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import CardTitle from "../../components/card-title";
import { cardQuery, cardSlugsQuery } from "../../lib/queries";
import { urlForImage } from "../../lib/sanity";
import { sanityClient, getClient } from "../../lib/sanity.server";

export default function Card({ data = {}, preview }) {
  const router = useRouter();

  const slug = data?.card?.slug;
  const card = data?.card;
  // const {
  //   data: { card },
  // } =
  //   (cardQuery,
  //   {
  //     params: { slug },
  //     initialData: data,
  //     enabled: preview && slug,
  //   });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <CardTitle>Loading…</CardTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{card.title} | Next.js Blog Example</title>
                {/* {post.coverImage && (
                  <meta
                    key="ogImage"
                    property="og:image"
                    content={urlForImage(post.coverImage)
                      .width(1200)
                      .height(627)
                      .fit('crop')
                      .url()}
                  />
                )} */}
              </Head>

              <CardTitle>{card.title}</CardTitle>
              <p>{card.text}</p>
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const { card } = await getClient(preview).fetch(cardQuery, {
    slug: params.slug,
  });
  return {
    props: {
      data: {
        card,
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(cardSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
