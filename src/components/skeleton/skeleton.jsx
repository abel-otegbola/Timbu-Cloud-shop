

export default function Skeleton() {

    return (
        <div className="flex flex-col justify-between">
            <div className={`bg-slate-200 animate-pulse rounded-[15px] w-full md:h-[350px] h-[300px] max-[450px]:h-[200px]`} >
            </div>

            <p className="bg-slate-200 animate-pulse font-semibold flex-1 p-2 rounded"></p>
            <p className="bg-slate-200 animate-pulse h-[10px] w-[40px]"></p>
            <p className="bg-slate-200 animate-pulse h-[40px]"></p>
        </div>
    )
}