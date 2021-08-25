import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import { getSession } from "next-auth/client";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100 overflow-hidden  ">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* Header */}
      <header div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </header>

      <main className="max-w-screen-2xl mx-auto relative top-[6rem]">
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>

      {/* Footer */}
      <footer className=" mt-[6rem] h-full">
        <Footer />
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products: products,
      session: session,
    },
  };
}
