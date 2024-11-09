export default function Docs({
    params
}: {
    params: {
        slug?: string[]
    }
}) {
    if (params.slug?.length === 2) {
        return <h1>Viewing docs for feature {params.slug[0]} and concept {params.slug[1]} </h1>
    } else if (params.slug?.length === 1) {
        return <h1>Viewing docs for feature {params.slug[0]}</h1>
    } else { 
        // for this part to run, you have to put [...slug] in another set of brackets [[...slug]]
        // otherwise slug will be undefined
        return <h1>Docs Page</h1>;
    }
    //http://localhost:3000/docs/routing/catch-all-segments
}