async function getData() {
    const response = await fetch(`${process.env.HOST}/api/product/category-list`);
    const data = await response.json();
    return data['data'];
}

const Categories = async () => {
    let categories = await getData();
    return (
        <section className="mx-auto max-w-7xl py-10">
            <h1 className="text-4xl text-center py-3 text-gray-950 font-bold">Top Categories</h1>
            <p className="text-sm text-center text-gray-800">Explore a world of choice categories across our most popular shopping category</p>

            <div className="grid grid-cols-3 gap-3 py-10">
                {
                    categories.map((category, i) => {
                        return (
                            <div key={i} className="card bg-base-100 image-full shadow-xl h-64 w-full ">
                                <figure>
                                    <img
                                        src={category['categoryImg']}
                                        alt=""
                                        className="w-full"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {category['categoryName']}
                                    </h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Categories