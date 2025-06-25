import { useState } from "react";
import { Table, Modal, Button, Radio, Typography } from "antd";
import PropTypes from "prop-types";

const { Text } = Typography;

const Tables = ({
  generalData, // ✅ Основные данные (список тестов)
  testResults = {}, // ✅ Результаты тестов (ключ - ID теста, значение - 1 или 0)
  setTestResults, // ✅ Функция обновления результатов тестирования
  tests = {}, // ✅ База данных тестов (вопросы, варианты ответов и правильные ответы)
}) => {
  // ✅ Состояние для хранения выбранного ответа в тесте
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // ✅ Состояние для управления модальным окном теста
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Состояние для хранения текущего теста, который проходит пользователь
  const [currentTest, setCurrentTest] = useState(null);

  // ✅ Функция проверки, завершен ли тест
  const isTestCompleted = (testId) => testResults[testId] !== undefined; // Если тест уже пройден, блокируем кнопку

  // ✅ Функция, вызываемая при нажатии на кнопку теста
  const handleClick = (rowId, colIndex) => {
    const testId = `${rowId}-${colIndex}`; // Уникальный ID теста (например: "1-1", "2-3")
    if (tests?.[testId]) {
      // Если тест существует, открываем модальное окно
      setCurrentTest({ ...tests[testId], id: testId });
      setSelectedAnswer(null);
      setIsModalOpen(true);
    } else {
      // Если теста нет, показываем сообщение
      setCurrentTest({ question: "Нет доступных тестов", options: [] });
      setIsModalOpen(true);
    }
  };

  // ✅ Функция выбора ответа
  const handleAnswerSelect = (value) => {
    setSelectedAnswer(value);
  };

  // ✅ Функция завершения теста и сохранения результата
  const handleFinishTest = () => {
    if (currentTest) {
      const isCorrect = selectedAnswer === currentTest.correctAnswer ? 1 : 0; // ✅ Проверяем правильность ответа
      setTestResults((prev) => ({
        ...prev,
        [currentTest.id]: isCorrect, // ✅ Сохраняем результат (1 - правильно, 0 - неправильно)
      }));
    }
    setIsModalOpen(false); // ✅ Закрываем модальное окно после завершения теста
  };

  // ✅ Функция отображения результатов тестирования
  const displayResults = () => {
    if (
      !testResults ||
      typeof testResults !== "object" ||
      Object.keys(testResults).length === 0
    ) {
      return <p>Нет результатов теста</p>; // ✅ Если результатов нет, выводим сообщение
    }

    return Object.keys(testResults).map((key) => {
      const isCorrect = testResults[key] === 1; // ✅ Проверяем, правильный ли ответ
      return (
        <p key={key}>
          <strong>{tests?.[key]?.question || "Вопрос не найден"}</strong> -
          {isCorrect ? (
            <Text type="success">{` ✅`}</Text> // ✅ Если правильно, ставим зеленую галочку
          ) : (
            <Text type="danger">{` ❌`}</Text> // ❌ Если неправильно, ставим красный крестик
          )}
        </p>
      );
    });
  };

  // ✅ Определение колонок таблицы
  const columns = [
    {
      title: "№", // ✅ Номер строки
      dataIndex: "index",
      key: "index",
      render: (_, __, index) => index + 1, // ✅ Добавляем порядковый номер строки
    },
    {
      title: "Назначение", // ✅ Название теста или категории
      dataIndex: "tdName",
      key: "tdName",
    },
    {
      title: "Цвет", // ✅ Цвет строки
      dataIndex: "tdColor",
      key: "tdColor",
      render: (color) => (
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: color,
            display: "inline-block",
          }}
        />
      ), // ✅ Отображаем цвет в виде цветного круга
    },
    ...Array.from({ length: 5 }, (_, index) => ({
      title: `${index + 1} - Тест`, // ✅ Номер теста
      dataIndex: `col${index + 1}`,
      key: `col${index + 1}`,
      render: (_, record) => {
        const testId = `${record.id}-${index + 1}`; // Уникальный идентификатор теста
        return (
          <Button
            type="primary"
            onClick={() => handleClick(record.id, index + 1)}
            disabled={isTestCompleted(testId)} // ✅ Если тест уже пройден, отключаем кнопку
          >
            {index + 1}-Тест
          </Button>
        );
      },
    })),
  ];

  return (
    <div style={{ overflowX: "auto" }}>
      <div style={{ minWidth: "700px" }}>
        <Table
          columns={columns}
          dataSource={generalData.map((item, index) => ({
            ...item,
            index: index + 1,
          }))}
          rowKey="id"
          pagination={false}
          rowClassName={(record) => record.color || ""}
        />
      </div>

      {/* ✅ Модальное окно с тестом */}
      <Modal
        title="Тест"
        open={isModalOpen}
        onOk={handleFinishTest}
        onCancel={() => setIsModalOpen(false)}
      >
        {currentTest && (
          <div>
            <p>
              <strong>{currentTest.question}</strong>
            </p>
            <Radio.Group
              onChange={(e) => handleAnswerSelect(e.target.value)}
              value={selectedAnswer}
            >
              {currentTest.options.map((option, index) => (
                <Radio key={index} value={option}>
                  {option}
                </Radio>
              ))}
            </Radio.Group>
          </div>
        )}
      </Modal>

      {/* ✅ Блок с результатами тестирования */}
      <div className="bg-white p-4 rounded mt-5">
        <h3>Результаты тестирования:</h3>
        {displayResults()}
      </div>
    </div>
  );
};

// ✅ Определение типов пропсов (PropTypes)
Tables.propTypes = {
  generalData: PropTypes.array.isRequired, // ✅ Массив с данными таблицы
  testResults: PropTypes.object, // ✅ Объект с результатами тестов
  setTestResults: PropTypes.func.isRequired, // ✅ Функция для обновления результатов тестов
  tests: PropTypes.object, // ✅ Объект с тестами
};

// ✅ Значения по умолчанию (defaultProps)
Tables.defaultProps = {
  testResults: {},
  tests: {},
};

export default Tables;
