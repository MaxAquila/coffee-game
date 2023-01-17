export const RangeSettings = () => {
    return (
        <div className="row d-flex justify-content-center pt-3">
            <div className="col-auto">
                <form className="input-group">
                    <label className="input-group-text">Range:</label>
                    <label className="input-group-text">Min</label>
                    <input className="form-control" type="number" />
                    <label className="input-group-text">Max</label>
                    <input className="form-control" type="number" />
                    <button type="button" className="btn btn-primary">Set</button>
                </form>
                <div className="alert alert-success d-flex align-items-center" role="alert">
                    <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Success:">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <div>
                        Range settings updated!
                    </div>
                </div>
            </div>
        </div>
    );
}