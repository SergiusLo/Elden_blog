import Header from "../../components/Header";

function About() {
  return (
    <div>
      <Header />
      <hr  />
      <div className="flex align-center flex-col ">
         <h1 className="font-bold flex justify-center text-3xl my-10 text-yellow-400 font-serif">Головні Герої </h1>
         <p className=" flex justify-center pb-10">5051 - Підкорювач блискавок та вогню</p>
         <p className=" flex justify-center pb-10">Swarog - Найсильніший Чарівник, псевдонім 'Moon wizard' </p>
         <p className=" flex justify-center">Sergius - Мандрівник який випадково потрапив в цей світ в пошуках щастя </p>
      </div>
    </div>
  );
}

export default About;
