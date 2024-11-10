import { Metadata } from "next";

// Dynamic metadata
type Props = {
    params: {
        productId: string;
    }
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`Product ${params.productId}`);
        }, 1000);
    });
    return {
        title: `${title}`,
        description: `Details about product ${params.productId}`,
        keywords: `product, ${params.productId}`,
    };
}

// export default function ProductDetails({params}: {params: {productId?: string}}) { // this is to satisfy the type checker
// The productId is a string because it comes from the URL, which is always a string.
// {params} is an object, wherein params is an object with a key of productId that is a string.
export default function ProductDetails({params}: Props) { // this is to satisfy the type checker
    return (
        <div>
            <h1>Details about product {params.productId}</h1>
        </div>
    );
}