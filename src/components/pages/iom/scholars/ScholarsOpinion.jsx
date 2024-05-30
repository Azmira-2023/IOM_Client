

const ScholarsOpinion = () => {
  const videos = [
    {
      src: "https://youtu.be/U7au4I7zUnA",
      title: "Sheikh Ahmadullah",
    },
    {
      src: "https://youtu.be/IHt9BpfryL8",
      title: "Another Scholar",
    },
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Sample Video",
    },
  ];

  return (
    <div className="mt-4">
      <div className="bg-gray-200 p-8 mx-16">
        <h1 className="text-center text-6xl font-medium text-amber-950">
          The Opinions Of Scholars
        </h1>
        <div className="grid grid-cols-3 gap-6 p-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="border border-gray-300 bg-white rounded-xl flex flex-col items-center p-4"
            >
              <video
                src={video.src}
                controls
                className="w-full h-[300px] rounded"
              ></video>
              <p className="text-lg text-center mt-2 text-black font-bold">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScholarsOpinion;
