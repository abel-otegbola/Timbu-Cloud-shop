export default function InputField({ register, error, type, label, required, name }) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="2xl:text-[18px] font-medium">
                {label} 
                {
                    required ? <span className="text-red-500 -mb-1">*</span>: ""
                }
            </label>
            <input type={type} { ...register(name, {required: true}) } name={name} id={name} className="p-4 rounded-[8px] border-2 border-[#DDD] w-full focus:outline focus:outline-secondary/[0.3] outline-offset-2 focus:border-primary" />
            { error ? <p className="text-[12px] text-red-400 text-center">{name + " is not valid"}</p> : "" }
        </div>
    )
}