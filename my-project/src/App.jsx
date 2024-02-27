import React, { useEffect, useState } from "react";

import vector1 from "./assets/vector1.svg";
import vector2 from "./assets/vector2.svg";
import vector3 from "./assets/vector3.svg";
import vector4 from "./assets/vector4.svg";
import vector5 from "./assets/vector5.svg";
import vector6 from "./assets/vector6.svg";
import vector7 from "./assets/vector7.svg";
import vector8 from "./assets/vector8.svg";
import resto from "./assets/resto.png";
import del from "./assets/del.svg";

const App = () => {
  const [dishes, setDishes] = useState([]);
  console.log(dishes);
  useEffect(() => {
    fetch("http://localhost:3000/Dishes")
      .then((res) => res.json())
      .then((data) => setDishes(data));
  }, []);

  const [step, setStep] = useState(1);
  const increment = () => {
    setStep(step + 1);
  };
  return (
    <div className="container mx-auto bg-[#252836]">
      <div className=" flex">
        <div className=" bg-[#1F1D2B] w-[104px]">
          <img className=" py-3 pl-5" src={vector1} alt="img" />
          <img className=" py-3 " src={vector2} alt="img" />
          <img className=" py-3 pl-5" src={vector3} alt="img" />
          <img className=" py-3 pl-5" src={vector4} alt="img" />
          <img className=" py-3 pl-5" src={vector5} alt="img" />
          <img className=" py-3 pl-5" src={vector6} alt="img" />
          <img className=" py-3 pl-5" src={vector7} alt="img" />
          <img className=" py-3 pl-5" src={vector8} alt="img" />
        </div>
        {step === 1 && (
          <div className=" container w-full flex justify-between">
            <div className=" w-full">
              <div className=" border-b-2">
                <div className=" flex justify-between text-center mt-6">
                  <div>
                    <img
                      src={resto}
                      alt="logo"
                      className=" w-[164px] justify-between"
                    />
                    <h2 className=" text-[#E0E6E9] font-normal mb-6">
                      Tuesday, 2 Feb 2021
                    </h2>
                  </div>
                  <input
                    className=" border-slate-700 text-white bg-[#2D303E] w-[220px] py-[14px] pr-[14px] pl-[42] text-center text-font-[normal] rounded-lg"
                    type="text"
                    placeholder="Search for food, coffe, etc.."
                  />
                </div>
                <div>
                  <ul className=" flex text-white gap-[42px]">
                    <li className=" font-semibold">Hot Dishes</li>
                    <li className=" font-semibold">Cold Dishes</li>
                    <li className=" font-semibold">Soup</li>
                    <li className=" font-semibold">Grill</li>
                    <li className=" font-semibold">Appetizer</li>
                    <li className=" font-semibold">Dessert</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className=" flex justify-between pt-8">
                  <h1 className=" text-white font-semibold w-[129px]">
                    Choose Dishes
                  </h1>
                  <select
                    className=" bg-inherit text-white"
                    name="servise"
                    id="servise"
                  >
                    <option className=" bg-inherit" value="Dine1">
                      Dine In
                    </option>
                    <option value="Dine2">Dine In2</option>
                    <option value="Dine3">Dine In3</option>
                    <option value="Dine4">Dine In4</option>
                  </select>
                </div>
                <div className=" flex flex-wrap gap-8">
                  {dishes.map((dish) => (
                    <div key={dish.id}>
                      <img
                        src={dish.imgUrl}
                        alt="img"
                        className=" w-[200px] h-[170px]"
                      />
                      <h2 className=" text-white w-[144px]">{dish.title}</h2>
                      <h3 className=" text-white">{dish.price}</h3>
                      <h3 className=" text-white">{dish.isAvailable}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className=" bg-[#1F1D2B] w-[570px] pl-6 py-6 h-full">
              <div>
                <h1 className=" text-white font-semibold mb-6">
                  Orders #34562
                </h1>
                <div className=" gap-3 flex">
                  <button className=" bg-red-400  px-[12px] py-[7px] text-white border rounded">
                    Dine In
                  </button>
                  <button className="  px-[12px] py-[7px] text-white border rounded">
                    To Go
                  </button>
                  <button className="  px-[12px] py-[7px] text-white border rounded">
                    Delivery
                  </button>
                </div>
                <div className=" flex justify-between">
                  <h2 className=" text-white font-semibold">Item</h2>
                  <div className=" flex gap-2 pr-6">
                    <h2 className=" text-white font-semibold">Qty</h2>
                    <h2 className=" text-white font-semibold">Price</h2>
                  </div>
                </div>
              </div>
              <div className=" py-4">
                <div className=" flex">
                  <div>
                    <h2 className=" text-white">Spicy seasoned sea...</h2>
                    <h2 className=" text-white">$ 2.29</h2>
                  </div>
                  <button className=" text-white p-3 bg-[#2D303E]">+</button>
                  <button className=" text-white p-3 mx-6 bg-[#2D303E]">
                    -
                  </button>
                  <h2 className=" text-white">$ 4,58</h2>
                </div>
                <div className=" flex">
                  <input
                    className=" bg-[#2D303E] text-white py-[14px] pl-[14px] pr-[88px] rounded mr-5"
                    type="text"
                    placeholder="Please, just a little bit spicy only."
                  />
                  <img src={del} alt="del img" />
                </div>
              </div>
              <div className=" py-4">
                <div className=" flex">
                  <div>
                    <h2 className=" text-white">Spicy seasoned sea...</h2>
                    <h2 className=" text-white">$ 2.29</h2>
                  </div>
                  <button className=" text-white p-3 bg-[#2D303E]">+</button>
                  <button className=" text-white p-3 mx-6 bg-[#2D303E]">
                    -
                  </button>
                  <h2 className=" text-white">$ 4,58</h2>
                </div>
                <div className=" flex">
                  <input
                    className=" bg-[#2D303E] text-white py-[14px] pl-[14px] pr-[88px] rounded mr-5"
                    type="text"
                    placeholder="Please, just a little bit spicy only."
                  />
                  <img src={del} alt="del img" />
                </div>
              </div>
              <div className=" py-4">
                <div className=" flex">
                  <div>
                    <h2 className=" text-white">Spicy seasoned sea...</h2>
                    <h2 className=" text-white">$ 2.29</h2>
                  </div>
                  <button className=" text-white p-3 bg-[#2D303E]">+</button>
                  <button className=" text-white p-3 mx-6 bg-[#2D303E]">
                    -
                  </button>
                  <h2 className=" text-white">$ 4,58</h2>
                </div>
                <div className=" flex">
                  <input
                    className=" bg-[#2D303E] text-white py-[14px] pl-[14px] pr-[88px] rounded mr-5"
                    type="text"
                    placeholder="Please, just a little bit spicy only."
                  />
                  <img src={del} alt="del img" />
                </div>
              </div>
              <div>
                <div className=" flex justify-between text-white">
                  <h2>Discount</h2>
                  <h2 className=" pr-3">$0</h2>
                </div>
                <div className=" px-2 flex justify-between text-white mb-4">
                  <h2>Sub total</h2>
                  <h2>$ 21,03</h2>
                </div>
              </div>
              <button
                onClick={increment}
                className=" text-white bg-[#EA7C69] py-[14px] px-28 border rounded"
              >
                Continue to Payment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
