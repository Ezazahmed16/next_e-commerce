'use client'
import { Fetcher } from "@/utility/Fetcher";
import useSWR from "swr";
import SliderSkeleton from "../skeleton/SliderSkeleton";
import Link from "next/link";

const Slider = () => {
    const { data, isLoading } = useSWR('/api/product/slider-list', Fetcher);

    if (isLoading) return <SliderSkeleton />;

    if (data) return (
        <div>
            <div className="carousel w-full">
                {
                    data['data'].map((item, i) => {
                        // Calculate previous and next slide indices
                        const prevSlideIndex = i === 0 ? data['data'].length - 1 : i - 1;
                        const nextSlideIndex = i === data['data'].length - 1 ? 0 : i + 1;

                        return (
                            <div id={`slide${i}`} key={item.id} className="carousel-item relative w-full max-h-screen">

                                <div className="bg-slate-900 grid grid-cols-2 gap-10 justify-center items-center">
                                    <div className="mx-auto">
                                        <h1 className="text-3xl font-bold pb-2">{item['title']}</h1>
                                        <p className="text-xl pb-3">{item['short_des']}</p>

                                        <Link href={`/details/${item['product_id']}`}>
                                            <button className="btn btn-accent">Buy Now</button>
                                        </Link>
                                    </div>
                                    <div className="">
                                        <img
                                            src={item.image}
                                            className="w-full" />
                                    </div>
                                </div>

                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href={`#slide${prevSlideIndex}`} className="btn btn-circle">❮</a>
                                    <a href={`#slide${nextSlideIndex}`} className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Slider;
    