import clinic from "../../../assets/clinic.png";

const Iclinic = () => {
  return (
    <div className="p-12 mt-8 max-w-6xl mx-auto bg-gray-100">
      <h1 className="text-center text-4xl text-red-900 uppercase">Iclinic</h1>
      <div className="flex justify-center items-center mt-8">
        <img src={clinic} alt="clinic" className="w-96 h-64 " />
      </div>
      <p className="mt-4 text-xl text-justify">iClinic specializes in the design and development of smart, innovative and practical eHealth Solutions. Our solutions span across physicians’ private offices into hospital clinics over multiple specialities, creating a true ecosystem of health information – One Patient, One Record. With embedded decision support based on standardized treatment guidelines and the ability to capture and integrate discrete clinical data, our solutions enhance patient care and health management.</p>
    </div>
  );
}

export default Iclinic;
