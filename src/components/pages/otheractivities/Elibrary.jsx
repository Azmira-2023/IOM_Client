import lib from "../../../assets/lib.jpg";

const Elibrary = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="col-span-1 mt-4 max-w-3xl mx-16 p-12 bg-gray-200">
        <h2 className="py-2 bg-lime-600 mr-6 text-2xl text-center font-bold px-80 ">
          Home
        </h2>
        <div>
          <img src={lib} alt="library" className="object-cover" />
        </div>
        <div className="p-4 text-xl text-justify mt-4">
          <p>
            The Electronic Library, commonly referred to as an E-Library,
            represents a pivotal evolution in the way information is stored,
            accessed, and disseminated. Unlike traditional libraries, which are
            confined to physical spaces and limited by the constraints of print
            media, E-Libraries leverage digital technologies to offer a vast
            array of resources in electronic formats. These libraries serve as
            comprehensive repositories of knowledge, housing everything from
            scholarly articles and academic journals to e-books, multimedia
            content, and archival materials. Accessible from virtually anywhere
            with an internet connection, E-Libraries transcend the limitations
            of time and geography, empowering users to explore diverse subjects
            and engage with information at their convenience. Moreover, the
            digital nature of E-Libraries facilitates dynamic search
            capabilities, allowing users to locate relevant materials and
            swiftly access them with ease. This accessibility benefits students
            and researchers and extends to lifelong learners, professionals, and
            enthusiasts across various fields and disciplines. Furthermore,
            E-Libraries often offer interactive features, such as discussion
            forums, virtual events, and collaborative tools, fostering a sense
            of community and enabling global knowledge-sharing. As society
            continues to embrace digitalization and remote learning, the
            Electronic Library emerges as a cornerstone of modern education,
            promoting inclusivity, accessibility, and the democratization of
            information in an increasingly interconnected world. 
          </p>
     
        </div>
      </div>
      <div className="col-span-1 bg-gray-100 p-12 mx-16 mt-6 ">
        <h1>Category</h1>

      </div>
    </div>
  );
};

export default Elibrary;
