export default function InputField({ type, label, required, name }) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="xl:text-[18px] font-medium">
                {label} 
                {
                    required ? <span className="text-red-500 -mb-1">*</span>: ""
                }
            </label>
            <input type={type} name={name} id={name} className="p-4 rounded-[8px] border-2 border-[#DDD] w-full focus:outline focus:outline-secondary/[0.3] outline-offset-2 focus:border-primary" />
        </div>
    )
}