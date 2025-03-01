
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

    { path: "images/css.png", name: "Css" },
    { path: "images/html.png", name: "Html" },
    { path: "images/flutter.png", name: "Flutter" },
    { path: "images/git.png", name: "Git" },
    { path: "images/react.png", name: "Eeact Native" },
  ];

  return (
    <div className="h-auto w-full flex flex-row gap-5 justify-center relative pb-32">

      <div className="flex flex-col gap-5 items-center justify-center p-16">
        <h1 className="text-5xl font-semibold text-blue-600 h1">Technologies <span className="text-black">We Used </span></h1>
        <div className="w-[150vh] h-auto grid grid-cols-5 grid-rows-3 gap-2 items-center justify-center">
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
              <div className="text-black text-lg font-medium">{item.name}</div>
            </div>
          ))}

        </div>
      </div>


      <video
        src="skill.mp4"
        className="absolute bottom-0 right-0 w-[300px] h-[300px] object-cover z-[-1] rightAnimation"
        autoPlay
        loop
        muted
      />
    </div>
  )
}