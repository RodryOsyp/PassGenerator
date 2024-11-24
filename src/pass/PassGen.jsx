import React, { useState, useRef, useEffect } from "react";
import style from "./PassGen.module.css";
import { MdFileCopy } from "react-icons/md";
import { getPassword } from "../utils/utils";

const PassGen = () => {
  const [slide, setSlide] = useState(10);
  const [strength, setStrength] = useState(1);
  const [pass, setPass] = useState(getPassword(10,true,true,true,true));
  const inputRef = useRef(null);
  const [upper, setUpper] = useState(false);
  const [lower, setLower] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  useEffect(() => {
    console.log(inputRef.current.innerText);
    calculateStrength();
  }, [slide]);

  const handlerCopy = () => {
    navigator.clipboard.writeText(inputRef.current.innerText);
  };
  const handlerGenPass = () => {
    setPass(getPassword(slide,upper,lower,number,symbol))
  };

  const calculateStrength = () => {
    setStrength(slide <= 6 ? 1 : slide <= 10 ? 2 : slide <= 14 ? 3 : 4);
  };

  const getBarStyle = (barIndex) =>
    barIndex <= strength
      ? {
          background:
            strength === 1
              ? "#A4FFAF"
              : strength === 2
              ? "#F9C74F"
              : strength === 3
              ? "#F8961E"
              : "#F94144",
          border: "none",
        }
      : {};
  const difficultyText = (strength) =>
    strength
      ? 
          
            strength === 1
              ? "Easy"
              : strength === 2
              ? "Medium"
              : strength === 3
              ? "Medium"
              : "Hard"
              :""
        
    

  return (
    <>
      <div className={style.all}>
        <div className={style.container}>
          <div className={style.title}>Password Generator</div>
          <div className={style.password}>
            <span ref={inputRef}>{pass}</span>
            <div className={style.copy} onClick={handlerCopy}>
              <MdFileCopy />
            </div>
          </div>
          <div className=""></div>
          <div className={style.options}>
            <div className={style.option}>
              <label>Character Length</label>
              <span>{slide ?? 0}</span>
            </div>
            <input
              type="range"
              min="4"
              max="20"
              onChange={(e) => setSlide(Number(e.target.value))}
              value={slide}
            />
            <div className={style.option}>
              <label>
                <input type="checkbox" onChange={()=>setUpper(!upper)} value={upper}/>
                Include Uppercase Letters
              </label>
            </div>
            <div className={style.option}>
              <label>
                <input type="checkbox" onChange={()=>setLower(!lower)} value={lower}/>
                Include Lowercase Letters
              </label>
            </div>
            <div className={style.option}>
              <label>
                <input type="checkbox" onChange={()=>setNumber(!number)} value={number}/>
                Include Numbers
              </label>
            </div>
            <div className={style.option}>
              <label>
                <input type="checkbox" onChange={()=>setSymbol(!symbol)} value={symbol}/>
                Include Symbols
              </label>
            </div>
          </div>
          <div className={style.strength}>
            <label>Strength</label>
            <div className={style.str}>
              <div className={style.difficultyText}>{difficultyText(strength)}
                <div className={style.difficulty}>
                  {[1, 2, 3, 4].map((bar) => (
                    <div
                      key={bar}
                      className={style.back1}
                      style={getBarStyle(bar)}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={style.ButContainer}>
            <div onClick={handlerGenPass} className={style.generateBut}>Generate ➜</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PassGen;
