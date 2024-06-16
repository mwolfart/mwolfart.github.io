function App() {
  return (
    <div className="h-screen flex">
      <div className="h-full basis-16 flex flex-col justify-center items-center gap-2">
        <div className="w-2 aspect-square bg-primary rounded-full" />
        <div className="w-2 aspect-square bg-copy rounded-full" />
        <div className="w-2 aspect-square bg-copy rounded-full" />
        <div className="w-2 aspect-square bg-copy rounded-full" />
      </div>
      <div className="h-full flex-grow flex flex-col pt-32 pb-16 gap-24">
        <div className="flex flex-col gap-2 px-4 w-fit">
          <div className="text-md px-4">Hey there, I'm</div>
          <div className="text-primary text-2xl">Murilo Wolfart</div>
          <div className="text-md self-end px-4">Full-stack developer</div>
        </div>
        <img 
          src="/images/profile_complete.png" 
          alt="" 
          className="-mr-8 w-96 aspect-square p-4 border border-primary overflow-auto object-cover object-[0_-45px] rounded-full self-end" 
        />
      </div>
    </div>
  )
}

export default App
