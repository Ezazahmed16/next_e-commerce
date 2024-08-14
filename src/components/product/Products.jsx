'use client'
import { Fetcher } from "@/utility/Fetcher";
import { useState } from "react";
import useSWR from "swr";

const Products = () => {
    const [remark, setRemark] = useState('new');
    const { data, isLoading, mutate } = useSWR(`/api/product/list-by-remark?remark=${remark}`, Fetcher);

    const ListByRemarkRequest = async (selectedKey) => {
        setRemark(selectedKey);
        await mutate();
    }

    const tabs = ['New', 'Top', 'Popular', 'Special', 'Trending', 'Regular'];

    return (
        <div className='max-w-7xl min-h-screen flex flex-col items-center mx-auto py-10'>
            <h1 className="text-4xl text-center py-3 text-gray-950 font-bold">Our Products</h1>
            <div className="w-full">
                <div role="tablist" className="tabs tabs-bordered justify-center mb-5">
                    {tabs.map((tab) => (
                        <a
                            key={tab}
                            role="tab"
                            className={`tab ${remark.toLowerCase() === tab.toLowerCase() ? 'tab-active' : ''}`}
                            onClick={() => ListByRemarkRequest(tab.toLowerCase())}
                        >
                            {tab}
                        </a>
                    ))}
                </div>
            </div>
            {isLoading ? (
                <span className="loading loading-bars loading-lg flex justify-center items-center mx-auto"></span>
            ) : (
                <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data.data.map((product, i) => (
                        <div key={i} className="card bg-white shadow-md rounded-lg overflow-hidden">
                            <figure>
                                <img
                                    className="h-48 w-full object-cover"
                                    src={product['image']}
                                    alt={product['title']}
                                />
                            </figure>
                            <div className="p-5">
                                <h2 className="text-xl font-semibold mb-2">
                                    {product['title']}
                                    <span className="badge badge-secondary ml-2">
                                        {product['remark']}
                                    </span>
                                </h2>
                                <p className="text-gray-700 mb-4">{product['short_des']}</p>
                                <div className="flex items-center mb-4">
                                    <div className="rating rating-sm">
                                        <input type="radio" name={`rating-${i}`} className="mask mask-star-2 bg-green-500" />
                                        <input type="radio" name={`rating-${i}`} className="mask mask-star-2 bg-green-500" defaultChecked />
                                        <input type="radio" name={`rating-${i}`} className="mask mask-star-2 bg-green-500" />
                                        <input type="radio" name={`rating-${i}`} className="mask mask-star-2 bg-green-500" />
                                        <input type="radio" name={`rating-${i}`} className="mask mask-star-2 bg-green-500" />
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="text-lg font-bold">
                                        {product['discount'] ? (
                                            <>
                                                <span className="text-red-500">${product['discount_price']}</span>
                                                <span className="line-through text-gray-500 ml-2">${product['price']}</span>
                                            </>
                                        ) : (
                                            <span className="text-gray-900 ml-2">${product['price']}</span>
                                        )}
                                    </div>
                                    <button className="btn btn-accent btn-sm" type="button">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Products;
