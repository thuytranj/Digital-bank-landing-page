export default function Footer() {
  return (
    <div className="bg-[var(--color-blue-950)] w-full flex px-20 py-10 items-start justify-between max-lg:flex-col max-lg:px-5 max-lg:py-10 max-lg:gap-5">
      <div className="w-1/2 flex gap-5 justify-between max-lg:flex-col max-lg:w-full max-lg:items-center">
        <div className="flex flex-col w-1/4 h-25 items-center justify-between max-lg:w-1/2 max-lg:h-20">
          <img src="/images/logo-light.svg" alt="logo" className="w-50 object-cover" />

          <div className="flex w-full items-center justify-between">
            <img src="/images/icon-facebook.svg" alt="icon-facebook" className="w-5 h-auto object-cover" />

            <img src="/images/icon-youtube.svg" alt="icon-youtube" className="w-5 h-auto object-cover" />

            <img src="/images/icon-twitter.svg" alt="icon-twitter" className="w-5 h-auto object-cover" />

            <img src="/images/icon-pinterest.svg" alt="icon-pinterest" className="w-5 h-auto object-cover" />

            <img src="/images/icon-instagram.svg" alt="icon-instagram" className="w-5 h-auto object-cover" />
          </div>
        </div>
        
        <div className="flex flex-col h-25 items-stretch justify-between text-sm max-lg:items-center">
          <p className="text-[var(--color-gray-100)] cursor-pointer hover:text-[var(--color-green-500)] ">About Us</p>
          <p className="text-[var(--color-gray-100)] cursor-pointer hover:text-[var(--color-green-500)]  ">Contact</p>
          <p className="text-[var(--color-gray-100)] cursor-pointer hover:text-[var(--color-green-500)] ">Blog</p>
        </div>

        <div className="flex flex-col  h-25 items-stretch justify-between text-sm max-lg:items-center">
          <p className="text-[var(--color-gray-100)] cursor-pointer hover:text-[var(--color-green-500)]">Careers</p>
          <p className="text-[var(--color-gray-100)] cursor-pointer hover:text-[var(--color-green-500)]">Support</p>
          <p className="text-[var(--color-gray-100)] cursor-pointer hover:text-[var(--color-green-500)]">Privacy Policy</p>
        </div>
      </div>

      <div className="flex flex-col gap-5 items-end max-lg:w-full max-lg:items-center">
        <button className="bg-gradient-to-tr from-[var(--color-cyan-400)] to-[var(--color-green-500)] px-4 py-2 rounded-[20px] bold text-sm cursor-pointer hover:opacity-70 transition-opacity 1s ease-in-out">Request invite</button>

        <p className="text-[var(--color-gray-600)] text-sm ">@ Digitalbank. All Righs Reserved</p>
      </div>
    </div>
  )
} 