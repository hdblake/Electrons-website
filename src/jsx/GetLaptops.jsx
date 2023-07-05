import { useState, useEffect } from "react";

export default function GetLaptops() {
  const [data, setData] = useState([]);

  const fetchLaptops = async () => {
    const response = await fetch("https://dummyjson.com/products/category/laptops");
    if (response.ok) {
      return response.json()
      .then((data) => {
        setData(data.products);
        console.log(data);
      })
      .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    fetchLaptops()
  }, [])

  return (
    <>
      <h1>Laptops</h1>
      {data.map(data => <p key={data.id}>{data.title}</p>)}
    </>
  )
}
