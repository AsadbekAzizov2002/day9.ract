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
import card from "./assets/card.svg";
import paypal from "./assets/paypal.svg";
import cash from "./assets/cash.svg";

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
  const decler = () => {
    setStep(step - 1);
  };
  const incrementt = () => {
    setStep(step + 3);
  };
  const plass = () => {
    setStep(step + 4);
  };
  return (
    <div className="container mx-auto bg-[#252836]">
      <div className=" flex">
        <div className=" w-[104px] bg-[#1F1D2B]">
          <img className=" py-3 pl-5" src={vector1} alt="img" />
          <img className=" py-3 " src={vector2} alt="img" />
          <img className=" py-3 pl-5" src={vector3} alt="img" />
          <img
            onClick={incrementt}
            className=" py-3 pl-5"
            src={vector4}
            alt="img"
          />
          <img className=" py-3 pl-5" src={vector5} alt="img" />
          <img className=" py-3 pl-5" src={vector6} alt="img" />
          <img onClick={plass} className=" py-3 pl-5" src={vector7} alt="img" />
          <img className=" py-3 pl-5" src={vector8} alt="img" />
        </div>
        {step === 1 && (
          <div className=" container w-full justify-between lg:flex">
            <div className=" w-full">
              <div className=" border-b-2">
                <div className=" mt-6 justify-between text-center md:flex">
                  <div>
                    <img
                      src={resto}
                      alt="logo"
                      className=" w-[164px] justify-between"
                    />
                    <h2 className=" mb-6 font-normal text-[#E0E6E9]">
                      Tuesday, 2 Feb 2021
                    </h2>
                  </div>
                  <input
                    className=" text-font-[normal] w-[220px] rounded-lg border-slate-700 bg-[#2D303E] py-[14px] pl-[42] pr-[14px] text-center text-white"
                    type="text"
                    placeholder="Search for food, coffe, etc.."
                  />
                </div>
                <div>
                  <ul className=" gap-[42px] text-white sm:flex">
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
                  <h1 className=" w-[129px] font-semibold text-white">
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
                        className=" h-[170px] w-[200px]"
                      />
                      <h2 className=" w-[144px] text-white">{dish.title}</h2>
                      <h3 className=" text-white">{dish.price}</h3>
                      <h3 className=" text-white">{dish.isAvailable}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className=" h-full w-[570px] bg-[#1F1D2B] py-6 pl-6">
              <div>
                <h1 className=" mb-6 font-semibold text-white">
                  Orders #34562
                </h1>
                <div className=" flex gap-3">
                  <button className=" rounded  border  bg-red-400 px-[12px] py-[7px] text-white">
                    Dine In
                  </button>
                  <button className="  rounded border px-[12px] py-[7px] text-white">
                    To Go
                  </button>
                  <button className="  rounded border px-[12px] py-[7px] text-white">
                    Delivery
                  </button>
                </div>
                <div className=" flex justify-between">
                  <h2 className=" font-semibold text-white">Item</h2>
                  <div className=" flex gap-2 pr-6">
                    <h2 className=" font-semibold text-white">Qty</h2>
                    <h2 className=" font-semibold text-white">Price</h2>
                  </div>
                </div>
              </div>
              <div className=" py-4">
                <div className=" flex">
                  <div>
                    <h2 className=" text-white">Spicy seasoned sea...</h2>
                    <h2 className=" text-white">$ 2.29</h2>
                  </div>
                  <button className=" bg-[#2D303E] p-3 text-white">+</button>
                  <button className=" mx-6 bg-[#2D303E] p-3 text-white">
                    -
                  </button>
                  <h2 className=" text-white">$ 4,58</h2>
                </div>
                <div className=" flex">
                  <input
                    className=" mr-5 rounded bg-[#2D303E] py-[14px] pl-[14px] pr-[88px] text-white"
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
                  <button className=" bg-[#2D303E] p-3 text-white">+</button>
                  <button className=" mx-6 bg-[#2D303E] p-3 text-white">
                    -
                  </button>
                  <h2 className=" text-white">$ 4,58</h2>
                </div>
                <div className=" flex">
                  <input
                    className=" mr-5 rounded bg-[#2D303E] py-[14px] pl-[14px] pr-[88px] text-white"
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
                  <button className=" bg-[#2D303E] p-3 text-white">+</button>
                  <button className=" mx-6 bg-[#2D303E] p-3 text-white">
                    -
                  </button>
                  <h2 className=" text-white">$ 4,58</h2>
                </div>
                <div className=" flex">
                  <input
                    className=" mr-5 rounded bg-[#2D303E] py-[14px] pl-[14px] pr-[88px] text-white"
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
                <div className=" mb-4 flex justify-between px-2 text-white">
                  <h2>Sub total</h2>
                  <h2>$ 21,03</h2>
                </div>
              </div>
              <button
                onClick={increment}
                className=" rounded border bg-[#EA7C69] px-28 py-[14px] text-white"
              >
                Continue to Payment
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className=" w-[358px] pl-4">
            <div>
              <h1 className=" mb-2 pt-[20px] font-bold text-white">Payment</h1>
              <h2 className=" mb-8 font-normal text-gray-300 ">
                3 payment method available
              </h2>
            </div>
            <div className="method">
              <h1 className=" mb-4 text-white">Payment Method</h1>
              <div className=" items-center gap-2">
                <button className=" h-16 w-[104px] justify-center rounded-xl border">
                  <img
                    src={card}
                    alt="card"
                    className=" m-auto justify-center bg-white"
                  />
                  <h3 className=" text-white">Credit Card</h3>
                </button>
                <button className=" mx-2 h-16 w-[104px] justify-center rounded-xl border">
                  <img
                    src={paypal}
                    alt="card"
                    className=" m-auto justify-center bg-white"
                  />
                  <h3 className=" text-white">Paypal</h3>
                </button>
                <button className=" h-16 w-[104px] rounded-xl border ">
                  <img
                    src={cash}
                    alt="cash"
                    className=" m-auto justify-center bg-white"
                  />
                  <h3 className=" text-white ">Cash</h3>
                </button>
              </div>
            </div>
            <div className=" mt-4">
              <label className=" mt-4 text-white" htmlFor="Cardholder">
                Cardholder Name
                <input
                  className=" mb-4 w-[358px] rounded border bg-inherit py-3 pl-[14px] pr-[253]"
                  type="text"
                  placeholder="Levi Ackerman"
                  id="Cardholder"
                />
              </label>
              <label className=" text-white" htmlFor="Card">
                Card Number
                <input
                  className=" w-[358px] rounded border bg-inherit py-3 pl-[14px] pr-[223]"
                  type="text"
                  placeholder="Card Number"
                  id="Card"
                />
              </label>
            </div>
            <div className=" mt-4 flex gap-2">
              <label className=" text-white" htmlFor="Expiration">
                Expiration Date
                <input
                  className=" w-[172px] rounded border bg-inherit py-[14px] pl-[14px] pr-[106px]"
                  type="text"
                  placeholder="02/2022"
                  id="Expiration"
                />
              </label>
              <label className=" text-white " htmlFor="table">
                svv
                <input
                  className=" w-[172px] rounded border bg-inherit py-[14px] pl-[14px] pr-[106px]"
                  type="text"
                  placeholder=" . . ."
                  id="table"
                />
              </label>
            </div>
            <div className=" mt-4 flex gap-2">
              <label className=" text-white" htmlFor="Order">
                Order Type
                <input
                  className=" w-[172px] rounded border bg-inherit py-[14px] pl-[14px] pr-[106px]"
                  type="text"
                  placeholder="Dine In"
                  id="Order"
                />
              </label>
              <label className=" text-white " htmlFor="no">
                Table no.
                <input
                  className=" w-[172px] rounded border bg-inherit py-[14px] pl-[14px] pr-[106px]"
                  type="text"
                  placeholder="140"
                  id="no"
                />
              </label>
            </div>
            <div className=" flex gap-2">
              <button
                onClick={decler}
                className=" mt-6 w-[175px] rounded border px-[66px] py-[7px] text-white"
              >
                Cancel
              </button>
              <button
                onClick={increment}
                className=" mt-6 w-[175px] rounded border bg-red-400 px-[34px] py-[7px] text-white"
              >
                Confirm Payment
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <div>
              <h1 className=" font-bold text-white">Buyurtma qabul qilindi</h1>
            </div>
            <div>
              <button onClick={decler} className=" bg-red-300 px-10 py-5">
                cencle
              </button>
              <button onClick={increment} className=" bg-red-300 px-10 py-5">
                next
              </button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div>
            <div>
              <div>
                <h1 className=" w-80 font-black text-white">
                  Hali oxirgacha yozib bolganim yoq uzuraa (:)'
                </h1>
              </div>
              <div>hero</div>
            </div>
            <div>
              <div>reght header</div>
              <div>reght hero</div>
              reght box
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
