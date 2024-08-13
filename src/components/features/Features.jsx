import React from "react";

async function getData() {
    const host = process.env.HOST;
    const response = await fetch(`${process.env.host}/api/features/features-list`);
    const data = await response.json();
    return data['data'];
}

const Features = async () => {
    let FeaturesList = await getData();

    return (
        <div className="grid grid-cols-3 gap-5 mx-auto max-w-7xl py-10">
            {
                FeaturesList.map((feature, i) => {
                    return (
                        <div key={i} className="grid grid-cols-2 gap-3 justify-center items-center border-2 border-gray-950 rounded-3xl">
                            <div className="">
                                <img className="w-40 rounded-3xl" src={feature['img']} alt="" />
                            </div>
                            <div className="">
                                <h3 className="text-xl mb-1 font-bold">{feature['name']}</h3>
                                <p>{feature['description']}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Features;
