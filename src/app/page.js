import Master from "@/components/master/Master";
import 'react-loading-skeleton/dist/skeleton.css'
import Slider from "@/components/product/Slider.jsx";

export default function Home() {
  return (
    <>
      <Master className="" >
        <Slider />
      </Master>
    </>
  );
}
