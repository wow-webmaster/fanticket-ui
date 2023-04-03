export default function EventBannerSkeleton(){
    return(
        <div className="w-full flex flex-col sm:flex-row gap-4 items-center sm:items-start animate-pulse">
            <div className="rounded-xl aspect-5/3 max-w-xs overflow-hidden w-60 h-36 bg-base-200">
            </div>
            <div className="p-2 flex flex-col gap-2">
                <div className=" mb-4 h-7 w-56 bg-base-200 rounded-xl"></div>
                <div className=" h-5 w-60 bg-base-200  rounded-xl"></div>
                <div className=" h-5 w-56 bg-base-200  rounded-xl"></div>
            </div>

        </div>
    )
}