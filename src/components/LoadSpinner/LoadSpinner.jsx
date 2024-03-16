import { Spinner } from "react-bootstrap"

const LoadSpinner = () => {
    return (
        <div>
            <Spinner className="text-primary" animation="grow" style={{height: '5rem', width: '5rem'}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}

export default LoadSpinner
