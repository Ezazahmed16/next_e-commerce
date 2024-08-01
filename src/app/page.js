import Master from "@/components/master/Master";
import SliderSkeleton from "../components/skeleton/SliderSkeleton.jsx";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Home() {
  return (
    <>
      <Master className="" >
        <SliderSkeleton />
      </Master>
    </>
  );
}
