import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

export default function ThirdSection() {
  const scrollRef = useRef();
  const baseUrl = import.meta.env.BASE_URL;

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children)
    
   gsap.from(boxes, {
      y: 200,
      opacity: 0,
      ease: "circ.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "top 90%",  
        end: "top 20%",
        toggleActions: "play none complete reset"
        // markers: true
      }
    });
  }, { scope: scrollRef });

  return (
    <div className="bg-[var(--color-gray-50)] flex flex-col p-20 gap-10 w-full max-lg:items-center max-lg:p-5">
    <h1 className="text-black text-4xl">Lastest Articles</h1>

      <div className="flex items-start justify-between w-full gap-4 max-lg:flex-col" ref={ scrollRef }>
      <div className="bg-white flex flex-col w-1/4 rounded-t-sm max-lg:w-full">
        <img src={`${baseUrl}/images/image-currency.jpg` }alt="image-currency" className="w-full rounded-t-sm h-60 object-cover" />

        <div className="p-5 flex flex-col gap-2 items-start justify-between">
          <p className="text-[10px] text-[var(--color-gray-600)]">By Clare Robinson</p>
          <h2 className="text-black text-2xl cursor-pointer hover:text-[var(--color-green-500)]">Receive money in any currency with no fees</h2>
          <p className="text-[var(--color-gray-600)]">The world is getting smaller and we're becoming more mobile. So why should you to be forced to only receive money in a single ...</p>
        </div>
      </div>

      <div className="bg-white flex flex-col w-1/4 rounded-t-sm max-lg:w-full">
        <img src={`${baseUrl}/images/image-restaurant.jpg` }alt="image-restaurant" className="w-full rounded-t-sm h-60 object-cover" />

        <div className="p-5 flex flex-col gap-2 items-start justify-between">
          <p className="text-[10px] text-[var(--color-gray-600)]">By Witson Hutton</p>
          <h2 className="text-black text-2xl cursor-pointer hover:text-[var(--color-green-500)]">Travel yourself without worrying about money</h2>
          <p className="text-[var(--color-gray-600)]">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...</p>
        </div>
      </div>

      <div className="bg-white flex flex-col w-1/4 rounded-t-sm max-lg:w-full">
        <img src={`${baseUrl}/images/image-plane.jpg`} alt="image-plane" className="w-full rounded-t-sm h-60 object-cover" />

        <div className="p-5 flex flex-col gap-2 items-start justify-between">
          <p className="text-[10px] text-[var(--color-gray-600)]">By Witson Hutton</p>
          <h2 className="text-black text-2xl cursor-pointer hover:text-[var(--color-green-500)]">Take your Digitalbank card wherever you go</h2>
          <p className="text-[var(--color-gray-600)]">We want you to enjoy your travel. This is why we don't charge any fees on purchases while you're are on abroad. We'll even ...</p>
        </div>
      </div>

      <div className="bg-white flex flex-col w-1/4 rounded-t-sm max-lg:w-full">
        <img src={`${baseUrl}/images/image-confetti.jpg` }alt="image-confetti" className="w-full rounded-t-sm h-60 object-cover" />

        <div className="p-5 flex flex-col gap-2 items-start justify-between">
          <p className="text-[10px] text-[var(--color-gray-600)]">By Clare Robinson</p>
          <h2 className="text-black text-2xl cursor-pointer hover:text-[var(--color-green-500)] ">Our invite-only Beta accounts are now live!</h2>
          <p className="text-[var(--color-gray-600)]">After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through ...</p>
        </div>
      </div>
    </div>
  </div>
  )
}