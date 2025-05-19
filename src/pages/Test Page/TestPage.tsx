import Tables from "../../components/Tables";
import { generalData } from "../../baza/baza";
import ChartCard from "../../components/ChatrCard";
import { useState, useEffect, useMemo, useCallback } from "react";
import { tests } from "../../baza/test";

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

  return (
    <div className="p-5 flex flex-row gap-5">
      {/* Основная область тестирования */}
      <div className="w-[100%] md:w-[70%] flex flex-col gap-5">
        <div className="flex flex-col gap-2 bg-white p-5 rounded">
          <h1 className="text-lg font-semibold">Данные студента</h1>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">
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
      <div className="w-[100%] md:w-[30%]">
        <ChartCard data={memoizedDataBase} generalData={generalData} />
      </div>
    </div>
  );
};
