import { simpleBlogCard } from "../lib/interface";
import Cards from "./components/Cards";
import Header from "../../components/Header";
import withFooter from "../withFooter";

export const revalidate = 30;

async function Blog() {
  return (
    <div className="min-h-screen bg-black overflow-hidden my-0">
      {/* <div className="max-w-7xl mx-auto sm:p-5">
        <Header /> */}
      <div className="max-w-5xl mx-auto px-8 my-20">
        <Cards />
      </div>
      {/* </div> */}
    </div>
  );
}

export default Blog;
