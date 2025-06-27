import Tables from "../../components/Tables";
import { generalData } from "../../baza/baza";
import ChartCard from "../../components/ChatrCard";
import { useState, useEffect, useMemo, useCallback } from "react";
import { tests } from "../../baza/test";
import { StyleHeaderForPages, StyleTestPage } from "./TestPage.style";
import { NotMobileHeader } from "../../components/Header/HeaderForPages/NotMobileHeader/NotMobileHeader";
import MenuForPages from "../../components/MenuForPages/MenuForPages";
import { useLocation } from "react-router-dom";

export const TestPage = () => {
  const [testResults, setTestResults] = useState<Record<string, number>>({});
  const [allBall, setAllBall] = useState(0);

  const [DataBase, setDataBase] = useState([
    { name: "Подбирать технологическое оборудование", value: 0 },
    { name: "Собирать схемы технологических устройств", value: 0 },
    { name: "Знать основные законы в энергетике", value: 0 },
    { name: "Знать метрологические аспекты", value: 0 },
    { name: "Уметь прогнозировать отказы", value: 0 },
    { name: "Выполнять расчёт оборудования", value: 0 },
    { name: "Управлять программным обеспечением", value: 0 },
    { name: "Уметь устранить неисправности", value: 0 },
    { name: "Выбирать тип трансформаторов", value: 0 },
    { name: "Знание энергетических объектов", value: 0 },
  ]);

  const updateDataBase = useCallback(() => {
    let totalScore = 0;

    const newDataBase = DataBase.map((group, index) => {
      let groupTotal = 0;

      Object.keys(testResults).forEach((key) => {
        const [row] = key.split("-");
        if (parseInt(row, 10) === index + 1) {
          groupTotal += testResults[key] === 1 ? 0.2 : 0;
        }
      });

      totalScore += groupTotal;
      return { ...group, value: groupTotal };
    });

    setDataBase(newDataBase);
    setAllBall(Number(totalScore.toFixed(1)));
  }, [testResults]);

  useEffect(() => {
    updateDataBase();
  }, [testResults]);

  const memoizedDataBase = useMemo(() => DataBase, [DataBase]);

  // Состояние для отслеживания ширины экрана
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 840);
  const [notMobile, setNotMobile] = useState<boolean>(window.innerWidth > 840);

  // Эффект для обновления состояния при изменении размера окна
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 840); // Обновляем состояние
      setNotMobile(window.innerWidth > 840);
    };

    // Добавляем слушателя на изменение размера окна
    window.addEventListener("resize", handleResize);

    // Убираем слушателя при размонтировании компонента
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка в начало
  }, [pathname]); // Запускается при изменении пути

  return (
    <>
      <StyleHeaderForPages>
        <header style={{ width: "100%" }}>
          <div className="header">
            <div className="logo">
              <a href="/">
                <img
                  src="./eko_icon.png"
                  style={{ width: "50px", height: "50px", marginLeft: "20px" }}
                />
              </a>
            </div>
            <div>
              <span>
                <a
                  href="/about"
                  style={{ color: "white", textTransform: "uppercase" }}
                >
                  Амурова Н. Ю.
                </a>
              </span>
            </div>
            {notMobile && <NotMobileHeader />}
            <div>{isMobile && <MenuForPages />}</div>
          </div>
        </header>
      </StyleHeaderForPages>
      <StyleTestPage>
        <div className="questions">
          <div className="questionsInner">
            <div className="overallResult">
              <h3>
                Общий результат: {allBall} /{" "}
                {(Object.keys(tests).length * 1).toFixed(1)}
              </h3>
            </div>
          </div>

          {/* Таблица с тестами */}
          <Tables
            generalData={generalData}
            testResults={testResults}
            setTestResults={setTestResults}
            tests={tests}
          />
        </div>

        {/* График с результатами */}
        <div className="resultsGraph">
          <ChartCard data={memoizedDataBase} generalData={generalData} />
        </div>
      </StyleTestPage>
    </>
  );
};
