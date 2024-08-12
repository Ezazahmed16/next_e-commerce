
export const Fetcher = async (url) => {
    // await new Promise(resolve => setTimeout(resolve, 5000))
    const res = await fetch(url)
    return await res.json()
}