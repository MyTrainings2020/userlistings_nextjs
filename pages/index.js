import Link from "next/link";
import Footer from "../comps/Footer";
import NavBar from "../comps/NavBar";
import Styles from "../styles/Home.module.css";
import Head from "next/head";

export const index = () => {
  return (
    <>
      <Head>
        <title>Ingenious Technologies | Test Website</title>
        <meta
          name="keywords"
          content="This is the official website of our company"
        />
        <meta name="description" content="This is the description" />
      </Head>
      <div>
        <h1 className={Styles.title}>Home Page</h1>
        <p className={Styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius porro
          molestiae veritatis ullam itaque error, qui doloribus ratione, harum
          mollitia ipsa quibusdam nesciunt vitae expedita. Aliquid aut possimus
          harum cumque.
        </p>
        <p className={Styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptas
          at atque, voluptatem sunt ea! Nostrum rerum illum voluptas dolorem
          ratione minima voluptates cumque mollitia? Molestiae earum rerum
          inventore ea.
        </p>
        <p className={Styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          voluptates nemo. Nemo placeat culpa voluptates libero, hic laudantium
          fuga impedit minima ipsam vitae, tempora dolor, quam quis rem sequi!
          Blanditiis.
        </p>
        <Link href="/Listings">
          <a className={Styles.btn}>See Our Listings</a>
        </Link>
      </div>
    </>
  );
};
export default index;
