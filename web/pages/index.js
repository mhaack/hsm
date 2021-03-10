import Head from "next/head";
import Link from "next/link";
import Container from "../components/container";
import Title from "../components/title";
import Layout from "../components/layout";
import { indexQuery } from "../lib/queries";
import { getClient } from "../lib/sanity.server";

export default function Index({ allCards }) {
  return (
    <>
      <Layout>
        <Head>
          <title>School Motivation Cards</title>
        </Head>
        <Container>
          <Title />
          <ul>
            {allCards.map((card) => (
              <li key={card._id}>
                Card:{' '}
                <Link href={`/card/${card.slug}`}>
                  <a>{card.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allCards = await getClient(preview).fetch(indexQuery);
  return {
    props: { allCards: allCards },
  };
}
