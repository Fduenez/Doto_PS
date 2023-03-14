import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-screen bg-navy-blue">
          <div className="flex justify-center items-center flex-col">
              <div className="m-4 mb-100"><Image src="/rockboy.png" alt="rock boy" width="400" height="400"/></div>
              <input className="outline-none rounded-full m-4 p-4 w-1/3 bg-light-navy-blue text-mute-blue drop-shadow-lg text-white" type="text" placeholder={"Search"}/>
          </div>

      </div>
    </main>
  )
}
