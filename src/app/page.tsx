import Image from "next/image";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div className="h-[100vh] bg-purple-500">
      <div className="flex justify-center ">
          <div style={{
            backgroundImage:"url('/logos/backgroundImage.svg')",
            backgroundSize:'Cover',
            backgroundPosition:'Center',
            height:'100vh',
            width:'100%'
          }}>
          
          <div className="w-full flex justify-center h-[100vh] ">

              <div className="flex flex-col items-center gap-3 w-[100%] justify-center" >
                  <div className="relative w-[143px] h-[143px]">
                    <Image alt="main-image" src="/logos/logo.svg" fill style={{objectFit:'cover'}}></Image>
                  </div>

                  <div className=" w-[50%] lg:w-[40%] h-fit text-center">
                    <h1 className=" text-[3em] md:text-[5em] font-medium text-white leading-[0.9em]">Virtuaal Infrapower</h1>
                  </div>
                  <div className="w-[100%]  text-center">
                        <span className="font-bold leading-10 text-white tracking-[1em] xl:tracking-[1em] 2xl:tracking-[2em] text-[22px] " >PRIVATE LIMITED</span>       
                  </div>

                  <div className="w-[65%] lg:w-[33%] text-center text-white " >
                    <span className="font-semibold xl:text-[12px] leading-[2px] 2xl:text-[18px]" >Virtuaal Infrapower Private Limited (VIPL) is a part of Virtuaal Group, incorporated in the year 2012 to works on Renewable Energy Generation projects under the small hydroelectric power development sector in India.
                      </span>
                  </div>
                </div>
                
              </div>
          </div>
        </div>


          <div className="flex justify-center leading-[84.57px] my-6 ">
            <h1 className="text-[60px] md:text-[96px] font-normal underline decoration-dotted   text-[#084102]">Sustainibility</h1>
          </div>
            <p className="text-[24px] font-normal leading-[29.05px] tracking-[10px] text-center" >WE HELP THE NATURE ECOSYSTEM</p>
          <div className="flex justify-center ">
              <p className="w-[60%] text-[18px] leading-[23.8px] text-center">Hydropower, a renewable source of energy plays a significant role in meeting the energy needs of the nation. It is the cheapest source of renewable energy and has long-term environmentally beneficial and sustainable effects. Hydropower development by VIPL is backed by rigorous research and mitigating environmental protection factors. It ensures meeting the needs of present generation without compromising on the resources for the future generations.</p>            
          </div>

          <div className="max-w-[457px]  bg-slate-500 flex flex-col justify-center items-center text-center p-8" >
                <div className="relative h-[144.96px] w-[144.96px]" >
                  <Image src='/logos/localworkforce.svg' alt="work force" fill style={{objectFit:'cover'}}></Image>
                </div>
                <div>
                  Local Workforce
                </div>
                <div>
                  <p>Our aim is to generate local employment during construction of the project using the homegrown talent to focus on building greater infrastructure for long term operation & maintenance of the hydro projects. </p>
                </div>
              </div>
      
    </div>
  );
}
