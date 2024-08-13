async function getData() {
  const response = await fetch(`${process.env.HOST}/api/product/brand-list`);
  const data = await response.json();
  return data['data'];
}

const Brands = async () => {
  let brands = await getData();
  return (
      <section className="mx-auto max-w-7xl py-10">
          <h1 className="text-4xl text-center py-3 text-gray-950 font-bold">Top Brands</h1>
          <p className="text-sm text-center text-gray-800">Explore a world of choice Brands across our most popular shopping category</p>

          <div className="grid grid-cols-3 gap-3 py-10">
              {
                  brands.map((brand, i) => {
                      return (
                          <div key={i} className="card bg-base-100 image-full shadow-xl h-64 w-full ">
                              <figure>
                                  <img
                                      src={brand['brandImg']}
                                      alt=""
                                      className="w-full"
                                  />
                              </figure>
                              <div className="card-body">
                                  <h2 className="card-title">
                                      {brand['brandName']}
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

export default Brands