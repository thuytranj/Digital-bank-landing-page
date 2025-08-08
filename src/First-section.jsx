export default function FirstSection() {
  const baseUrl = import.meta.env.BASE_URL;
  return (
    <div className="bg-[var(--color-gray-50)] relative w-full h-170 flex items-center max-lg:flex-col overflow-hidden max-lg:pb-5 max-lg:h-auto">
      <img src={`${baseUrl}/images/bg-intro-mobile.svg`} alt="bg-intro" className="w-full h-auto object-cover lg:hidden" />
      <div className="flex flex-col items-start w-1/3 gap-5 ml-20 animate-zoom-in max-lg:items-center max-lg:w-full max-lg:ml-0 max-lg:px-5">
        <h1 className=" text-5xl leading-14 text-black max-lg:text-4xl max-lg:leading-10 max-lg:text-center">Next genernation digital banking</h1>
        <p className="text-[var(--color-gray-600)] max-lg:text-center">Take your finacial life online. Your Digitalbank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <button className="bg-gradient-to-tr from-[var(--color-cyan-400)] to-[var(--color-green-500)] px-4 py-2 rounded-[20px] bold text-sm cursor-pointer hover:opacity-70 transition-opacity 1s ease-in-out">Request invite</button>
      </div>

      <img src={`${baseUrl}/images/bg-intro-desktop.svg`}className="z-0 absolute top-[-100px] right-[-120px] h-full w-auto object-contain animate-zoom-in max-lg:hidden"></img>
      
      <img src={`${baseUrl}/images/image-mockups.png`} className="z-1 w-1/2 h-auto object-cover absolute top-[-200px] right-[-150px] animate-zoom-in max-lg:right-0 max-lg:top-[-100px] max-lg:w-full"></img>

    </div>
  )
}