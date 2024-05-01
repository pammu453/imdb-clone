
const Results = ({ results }) => {
    return (
        <div className="">
            {results.map((result) => (
                <p key={result.id}>{result.title}</p>
            ))}
        </div>
    )
}

export default Results
