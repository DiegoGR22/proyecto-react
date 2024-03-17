import { Spinner } from "react-bootstrap"

const LoadSpinner = () => {
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                <Spinner className="text-success" style={{ height: '5rem', width: '5rem', fontSize: '2em' }}>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                <span className="d-block text-success fs-1">Loading...</span>
            </div>
        </>
    )
}

export default LoadSpinner
