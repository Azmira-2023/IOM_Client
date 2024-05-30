const Timeline = () => {
  const iom = [
    { id: 1, name: "Total Students", value: "76,802+" },
    { id: 2, name: "Free Course Student ", value: "55,622+" },
    { id: 3, name: "Students of Alim Course ", value: "12,447+" },
    { id: 4, name: "Single Course Student  ", value: "1,498+" },
    { id: 5, name: "Student of Special Course ", value: "5,960+" },
    { id: 6, name: "Student of School Maktab  ", value: "971+" },
    { id: 7, name: "Courses  ", value: "20+" },
    { id: 8, name: "Instructors", value: "92+" },
  ];
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-center uppercase text-4xl font-bold">
        <span className="text-red-700 text-4xl font-bold">T</span>
        imeline
      </h1>
      <p className="text-4xl text-center">IOM - At a glance</p>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {iom.map((text) => (
            <div
              key={text.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <p className=" leading-7 text-black  text-xl">{text.name}</p>
              <p className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {text.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
