import Master from "@/components/master/Master";
import 'react-loading-skeleton/dist/skeleton.css'
import Slider from "@/components/product/Slider.jsx";
import Features from "@/components/features/Features";

export default function Home() {
  return (
    <>
      <Master className="" >
        <Slider />
        <Features />
      </Master>
    </>
  );
}
