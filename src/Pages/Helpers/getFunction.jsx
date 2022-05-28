import axios from "axios";

export async function getFunction(url, setData, setLoading, setErr) {
    try {
        const fetchResult = await axios.get(url);
        setData(await fetchResult.data)
        setLoading(false)
    } catch (err) {
        setErr(err)
        console.log(JSON.stringify(err))
    }
}