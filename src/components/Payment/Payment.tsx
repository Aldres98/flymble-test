import './style.css';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

export const Payment = (state: any) => {

    interface IUserInfo {
        name: String,
        address: String,
        Phone: String,
        Email: String
    }

    const { register, handleSubmit, errors, formState } = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    });

    const onSubmit = (data: IUserInfo) => {
        console.log(data);
        alert("Data submitted :)")
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <p><Link className="back-link" to="/">Back to cart</Link></p>
                <label htmlFor="name">Name:</label>
                <input
                    className="form-input"
                    id="name"
                    name="name"
                    type="text"
                    ref={register({ required: true, minLength: 3 })}
                />
                {errors.name && <p>Name is required (3+ symbols)</p>}

                <label htmlFor="address">Address:</label>
                <input
                    className="form-input"
                    id="address"
                    name="address"
                    type="text"
                    ref={register({ required: true })}

                />
                {errors.address && <p>Address is required</p>}

                <label htmlFor="phone">Phone:</label>
                <input
                    className="form-input"
                    id="phone"
                    name="phone"
                    type="phone"
                    ref={register({ required: false, minLength: 9, maxLength: 9 })}
                />
                {errors.phone && <p>Enter 9 symbols</p>}

                <label htmlFor="email">Email:</label>
                <input
                    className="form-input"
                    id="email"
                    name="email"
                    type="email"
                    ref={register({
                        required: true, pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })}
                />
                {errors.email && <p className="error-message">Invalid email address</p>}


                <input className={formState.isValid? "form-button" : "form-button disabled-button"} type="submit" disabled={!formState.isValid}></input>
            </form>
        </div>
    );
}

export { }
