import Hero from "./Hero";
import FindMore from "./FindMore";
import FindMoreImagesOne from "../../../public/images/findMoreSecond.svg";
import FindMoreImagesSecond from "../../../public/images/findMoreOne.svg";
import BlogPosts from "./BlogPosts";
import Container from "../../components/Container";
import Tabs from "./Tab";
import Category from "./Category";

const Home = () => {
  return (
    <main>
      <Hero />
      <Container>
        <main className="flex">
          <Category />
          <Tabs />
        </main>
      </Container>
      <Container>
        <main className="grid grid-cols-2 lg:grid-cols-1 md:pt-28 pt-[136px] gap-[28px]">
          <FindMore
            image={FindMoreImagesOne}
            textTitel="Summer cactus& succulents"
            textSubtitel="We are an online plant shop offering a wide range of cheap and trendy plants"
          />
          <FindMore
            image={FindMoreImagesSecond}
            textTitel="Summer cactus& succulents"
            textSubtitel="We are an online plant shop offering a wide range of cheap and trendy plants"
          />
        </main>
      </Container>
      <BlogPosts />
    </main>
  );
};
export default Home;
