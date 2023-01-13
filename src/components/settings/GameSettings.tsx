import { useForm } from "react-hook-form";

interface IFormInput {
    min: number;
    max: number;
}

export const GameSettings = () => {
    console.log("GameSettings");
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<IFormInput>();

    console.log("Rendering: Settings");
    return (
        <div className="row justify-content-center">
            <div className="col-10">
                <h3>Configuring match</h3>
                <form className="input-group mb-3">
                    <label className="input-group-text">Min</label>
                    <input className="form-control" {...register("min", {required: true, min: 0, max: 10000})} />
                    <label className="input-group-text">Max</label>
                    <input className="form-control" {...register("max", {required: true, min: 0, max: 10000})} />
                </form>
            </div>
        </div>
    );
}