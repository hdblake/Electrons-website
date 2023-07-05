import { useState, useEffect } from "react";

export default function GetSmartphones() {
  const [data, setData] = useState([]);

  const fetchSmartphones = async () => {
    const response = await fetch("https://dummyjson.com/products/category/smartphones");
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
    fetchSmartphones()
  }, [])

  return (
    <>
      <h1>Smartphones</h1>
      {data.map(data => <p key={data.id}>{data.title}</p>)}
    </>
  )
}
