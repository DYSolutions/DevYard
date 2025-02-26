
export default function Skills() {

  const images = [
    { path: "images/react.png", name: "React" },
    { path: "images/next.png", name: "Next" },
    { path: "images/mongodb.png", name: "Mongodb" },
    { path: "images/tailwind.png", name: "Tailwind" },
    { path: "images/js.png", name: "Java script" },
    { path: "images/mysql.png", name: "MySql" },
    { path: "images/node-js.png", name: "Node js" },
    { path: "images/postger.png", name: "Postger" },

    { path: "images/react.png", name: "React" },
    { path: "images/next.png", name: "Next" },
    { path: "images/mongodb.png", name: "Mongodb" },
    { path: "images/tailwind.png", name: "Tailwind" },
    { path: "images/js.png", name: "Java script" },
    { path: "images/mysql.png", name: "MySql" },
    { path: "images/node-js.png", name: "Node js" },
    { path: "images/postger.png", name: "Postger" },
  ];

  return (
    <div className="h-[100vh] w-full flex flex-row gap-5 border-t-[1px] border-gray-700 justify-center">

      <div className="flex flex-col gap-5 items-center justify-center p-16">
        <h1 className="text-5xl font-semibold text-white">Technologies We Used</h1>
        <div className="w-[150vh] h-auto grid grid-cols-5 grid-rows-4 gap-2 items-center justify-center">
          {images.map((item, index) => (
            <div
              className="h-[80px] w-[200px] container flex flex-row items-center justify-start gap-3 p-5 rightAnimation"
              key={index}
            >
              <img
                src={item.path}
                className="h-full w-auto object-contain"
                alt={item.name}
              />
              <div className="text-white text-lg font-medium">{item.name}</div>
            </div>
          ))}

        </div>
      </div>


      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </div>
  )
}