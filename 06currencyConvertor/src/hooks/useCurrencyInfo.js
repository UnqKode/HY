// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency){
//     const [data,setdata] = useState({})


//     useEffect(()=>{
//         fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json')
//         .then((res)=>res.json)
//         .then((res)=>setdata(res[{currency}]))
//     },[currency])
    
//     console.log(data)
//     return data
// }

// export default useCurrencyInfo;

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        // Use template literals to construct the URL
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => {
                // Ensure to call json() to parse the response
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((res) => {
                // Check the structure of the response
                setData(res[currency]); // Assuming the API returns an object with the currency code as the key
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                setData({}); // Reset to empty object on error
            });
    }, [currency]);

    console.log(data); // Log the fetched data for debugging
    return data;
}

export default useCurrencyInfo;
