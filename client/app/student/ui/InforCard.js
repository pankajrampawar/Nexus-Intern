export default function InfoCard(props) {
    return (
        <div className="flex flex-col text-white bg-primary">
            <div className="font-semibold text-2xl">
                <h1>{props.title} </h1>
            </div>

            <p>{props.details}</p>

            <p>{props.time}</p>
        </div>
    )
}