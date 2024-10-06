export default function Heading({heading}:{heading:string}){
    return(
        <div className="flex justify-center">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold  before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500  relative inline-block">
            <span className="relative z-10 text-black ">{heading}</span>
            </span>
        </div>
    )
}