
export default function ProductDetails({params}: {params: {productId?: string}}) { // this is to satisfy the type checker
    // The productId is a string because it comes from the URL, which is always a string.
    // {params} is an object, wherein params is an object with a key of productId that is a string.
    return (
        <div>
            <h1>Details about product {params.productId}</h1>
        </div>
    );
}