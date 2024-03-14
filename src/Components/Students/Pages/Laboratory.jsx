import React from "react";
function Laboratory() {
  return (
    <>
      <div className=" pt-10  gap-8 place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        
        <div className="bg-white rounded-xl p-4 shadow-xl w-96 mt-10 cursor-pointer ">
          <div className="flex  flex-col text-center justify-center items-center">
            <img
            src="../Beakers.jpg"
               class="w-full h-60 rounded-lg shadow-md"
            />
          </div>
          <p className="font-semibold text-xl text-slate-700 mt-1 text-left">
            Beakers
          </p>
          <p className="font-semibold text-lg text-gray-500">
            These versatile containers are used for holding, mixing, and heating
            liquids. They come in various sizes and are made of heat-resistant
            glass.
          </p>
          <div className="flex space-x-2 text-gray-400 items-center mt-2">
            <i className="fas fa-map-marker-alt"></i>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-xl w-96 mt-10 cursor-pointer ">
          <div className="flex  flex-col text-center justify-center items-center">
            <img
src="../test_tube.jpg"              class="w-full h-60 rounded-lg shadow-md"
            />
          </div>
          <p className="font-semibold text-xl text-slate-700 mt-1 text-left">
            Test tubes
          </p>
          <p className="font-semibold text-lg text-gray-500">
            Used for holding small amounts of liquids or solids, conducting
            small-scale reactions, and storing samples. They are typically made
            of glass and come in different sizes.
          </p>
          <div className="flex space-x-2 text-gray-400 items-center mt-2">
            <i className="fas fa-map-marker-alt"></i>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-xl w-96 mt-10 cursor-pointer  ">
          <div className="flex  flex-col text-center justify-center items-center">
            <img
              src="../Volumetric.jpg"
              class="w-full h-60 rounded-lg shadow-md"
            />
          </div>
          <p className="font-semibold text-xl text-slate-700 mt-1 text-left">
            Volumetric flasks
          </p>
          <p className="font-semibold text-lg text-gray-500">
            Designed for precise measurement of liquid volumes. They have a
            narrow neck and a calibration mark indicating the exact volume they
            hold.{" "}
          </p>
          <div className="flex space-x-2 text-gray-400 items-center mt-2">
            <i className="fas fa-map-marker-alt"></i>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-xl w-96 mt-10 cursor-pointer ">
          <div className="flex  flex-col text-center justify-center items-center">
            <img
 src="../Graduated.jpg"              class="w-full h-60 rounded-lg shadow-md"
            />
          </div>
          <p className="font-semibold text-xl text-slate-700 mt-1 text-left">
            Graduated cylinders
          </p>
          <p className="font-semibold text-lg text-gray-500">
            Used for measuring the volume of liquids with moderate accuracy.
            They have a cylindrical body with etched markings indicating the
            volume.{" "}
          </p>
          <div className="flex space-x-2 text-gray-400 items-center mt-2">
            <i className="fas fa-map-marker-alt"></i>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-xl w-96 mt-4 cursor-pointer  ">
          <div className="flex  flex-col text-center justify-center items-center">
            <img
 src="../Pipettes.jpg"              class="w-full h-60 rounded-lg shadow-md"
            />
          </div>
          <p className="font-semibold text-xl text-slate-700 mt-1 text-left">
            Pipettes
          </p>
          <p className="font-semibold text-lg text-gray-500">
            Essential for transferring small, precise volumes of liquids. They
            come in different types and sizes, each designed for specific
            volumes.{" "}
          </p>
          <div className="flex space-x-2 text-gray-400 items-center mt-2">
            <i className="fas fa-map-marker-alt"></i>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-xl w-96 mt-4 cursor-pointer  ">
          <div className="flex  flex-col text-center justify-center items-center">
            <img
src="../Funnels.jpg"              class="w-full h-60 rounded-lg shadow-md"
            />
          </div>
          <p className="font-semibold text-xl text-slate-700 mt-1 text-left">
            Funnels
          </p>
          <p className="font-semibold text-lg text-gray-500">
            Used for transferring liquids from one container to another or for
            filtering liquids. They are usually made of glass or plastic and
            have a funnel-shaped body with a narrow stem.{" "}
          </p>
          <div className="flex space-x-2 text-gray-400 items-center mt-2">
            <i className="fas fa-map-marker-alt"></i>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-xl w-96 mt-4 cursor-pointer ">
          <div className="flex  flex-col text-center justify-center items-center">
            <img
 src="../Bunsen.jpg"              class="w-full h-60 rounded-lg shadow-md"
            />
          </div>
          <p className="font-semibold text-xl text-slate-700 mt-1 text-left">
            Bunsen burners
          </p>
          <p className="font-semibold text-lg text-gray-500">
            Provide a controlled flame for heating liquids or solids. They are
            adjustable and allow for precise temperature control.{" "}
          </p>
          <div className="flex space-x-2 text-gray-400 items-center mt-2">
            <i className="fas fa-map-marker-alt"></i>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-xl w-96 mt-4 cursor-pointer ">
          <div className="flex  flex-col text-center justify-center items-center">
            <img
src="../Balances.jpg"              class="w-full h-60 rounded-lg shadow-md"
            />
          </div>
          <p className="font-semibold text-xl text-slate-700 mt-1 text-left">
            Balances
          </p>
          <p className="font-semibold text-lg text-gray-500">
            Used for measuring the mass of objects. They come in various types,
            from analytical balances for highly precise measurements to
            top-loading balances for general use.{" "}
          </p>
          <div className="flex space-x-2 text-gray-400 items-center mt-2">
            <i className="fas fa-map-marker-alt"></i>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-xl w-96 mt-4 cursor-pointer  ">
          <div className="flex  flex-col text-center justify-center items-center">
            <img
src="../Microscopes.jpg"              class="w-full h-60 rounded-lg shadow-md"
            />
          </div>
          <p className="font-semibold text-xl text-slate-700 mt-1 text-left">
            Microscopes
          </p>
          <p className="font-semibold text-lg text-gray-500">
            Allow for magnified observation of tiny objects or samples. They are
            essential tools in biology, microbiology, and other fields.{" "}
          </p>
          <div className="flex space-x-2 text-gray-400 items-center mt-2">
            <i className="fas fa-map-marker-alt"></i>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-xl w-96 mt-4 cursor-pointer  ">
          <div className="flex  flex-col text-center justify-center items-center">
            <img
src="../Tongs.jpg"              class="w-full h-60 rounded-lg shadow-md"
            />
          </div>
          <p className="font-semibold text-xl text-slate-700 mt-1 text-left">
            Tongs and forceps
          </p>
          <p className="font-semibold text-sm text-gray-400">
            Used for handling hot objects or materials that should not be
            touched directly. They come in different shapes and sizes for
            various purposes.
          </p>
          <div className="flex space-x-2 text-gray-400 items-center mt-2">
            <i className="fas fa-map-marker-alt"></i>
          </div>
        
       </div>
      </div>
    </>
  );
}

export default Laboratory;
