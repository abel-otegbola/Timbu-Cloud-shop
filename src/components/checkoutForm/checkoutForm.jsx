import { useForm } from "react-hook-form";
import InputField from "../inputField/inputField";

export default function CheckoutForm({ submitForm }) {

    const { register, handleSubmit, formState: { errors } } = useForm()

    return (
        <form onSubmit={handleSubmit((data) => submitForm(data))}>
            <div className="grid md:grid-cols-2 items-center md:gap-10 gap-6 my-6">
                <InputField register={register} error={errors.firstname} type={"text"} label={"First Name"} required={true} name={"firstname"} />
                <InputField register={register} error={errors.lastname} type={"text"} label={"Last Name"} required={true} name={"lastname"} />
            </div>

            <InputField register={register} error={errors.firstname} type={"text"} label={"Country"} required={true} name={"country"} />

            <div className="grid md:grid-cols-2 items-center md:gap-10 gap-6 my-6">
                <InputField register={register} error={errors.state} type={"text"} label={"State"} required={true} name={"state"} />
                <InputField register={register} error={errors.city} type={"text"} label={"City"} required={true} name={"city"} />
            </div>

            <InputField register={register} error={errors.address} type={"text"} label={"Residential Address"} required={true} name={"address"} />

            <div className="grid md:grid-cols-2 items-center md:gap-10 gap-6 my-6">
                <InputField register={register} error={errors.phone} type={"text"} label={"Phone No"} required={true} name={"phone"} />
                <InputField register={register} error={errors.email} type={"email"} label={"Email Address"} required={true} name={"email"} />
            </div>

            <div className="flex items-center gap-2 py-6">
                <input type="checkbox" name="signup" id="signup" className="w-5 h-5 rounded border border-[#DDD] focus:outline focus:outline-secondary/[0.3] outline-offset-2 focus:border-primary" />
                <label htmlFor="signup">Create an Account?</label>
            </div>

            <div className="flex flex-col gap-2 border-2 border-[#DDD] px-[5%] py-[2%] rounded-[8px]">
                <h3 className="font-semibold text-[20px] mt-10 mb-6">Additional Information</h3>
                <textarea name="info" id="info" cols="2" rows="4" className=" focus:outline focus:outline-secondary/[0.3] outline-offset-2 focus:border-primary" placeholder="Add notes about your order (e.g special notes about your delivery)"></textarea>
            </div>

            <input type="submit" className="hidden" />

        </form>
    )
}