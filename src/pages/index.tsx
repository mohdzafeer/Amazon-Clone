import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { ProductProps } from "../../types";
import Head from 'next/head';
interface Props {
  productData: ProductProps;
}

export default function Home({ productData }: Props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>GrabIT</title>
      </Head>
      <main>
      <div className="max-w-screen-3xl mx-auto">
        <Banner />
        <div className="relative md:-mt-20 lgl:-mt-32 xl:-mt-60 z-10 mb-10">
          <Products productData={productData} />
        </div>
      </div>
    </main>
    </>
  );
}

// SSR for Data Fetching
export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return { props: { productData } };
};
