import Feature from "@/components/modules/Home/Feature";
import Hero from "@/components/modules/Home/Hero";
import MobileApp from "@/components/modules/Home/MobileApp";
import NewArraivalProduct from "@/components/modules/Home/NewArraivalProduct";
import RecommendProduct from "@/components/modules/Home/RecommendProduct";
import TopRanking from "@/components/modules/Home/TopRankingProduct";
import Offer from "@/components/modules/Offer";
import BottomNavBar from "@/components/shared/BottomNavBar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Feature />
      <TopRanking />
      <NewArraivalProduct />
      <Offer />
      <RecommendProduct />
      <MobileApp />
      <BottomNavBar />
    </>
  );
}
