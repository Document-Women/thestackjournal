import Head from "next/head";
import Link from "next/link";
import { CMS_NAME } from "../lib/constants";
import Layout from "../components/layout";
import preview from "./api/preview";
import Container from "../components/container";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function NotFound() {
  return (
    <Layout preview={preview} className="min-h-screen bg-gray-100">
      <Head>
        <title>{`404 Page Not Found - ${CMS_NAME} `}</title>
      </Head>

      <Container className="container mx-auto px-5 lg-px-10 flex flex-col h-screen">
        <Navigation />
        <div className="flex flex-col justify-center flex-grow">
          <div className="flex justify-center items-center gap-4">
            <h1 className="border-r border-black py-2 pr-4 text-4xl">404</h1>
            <span className="text-lg">This page could not be found</span>
          </div>
          <Link
            href={"/"}
            className="mt-6 hover:opacity-50 outline outline-gray-500 rounded-md px-4 py-2 self-center"
          >
            Go back home
          </Link>
        </div>
      </Container>
    </Layout>
  );
}
