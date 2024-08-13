import Master from "@/components/master/Master";
import 'react-loading-skeleton/dist/skeleton.css'
import Slider from "@/components/product/Slider.jsx";
import Features from "@/components/features/Features";
import Categories from "@/components/product/Categories";
import Brands from "@/components/product/Brands";

export default function Home() {
  return (
    <>
      <Master className="" >
        <Slider />
        <Features />
        <Categories />
        <Brands />
      </Master>
    </>
  );
}
