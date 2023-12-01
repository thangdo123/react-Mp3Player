import { useState } from "react";
import styles from "./style.module.css";
import { useEffect } from "react";
const items = {
  2022: [
    {
      month: "jan",
      budget: [
        {
          day: 1,
          note: "Beer",
          spent: 20,
        },
      ],
    },
    {
      month: "feb",
      budget: [],
    },
    {
      month: "mar",
      budget: [],
    },
    {
      month: "apr",
      budget: [],
    },
    {
      month: "may",
      budget: [],
    },
    {
      month: "jun",
      budget: [],
    },
    {
      month: "jul",
      budget: [],
    },
    {
      month: "aug",
      budget: [],
    },
    {
      month: "sep",
      budget: [],
    },
    {
      month: "oct",
      budget: [],
    },
    {
      month: "nov",
      budget: [],
    },
    {
      month: "dec",
      budget: [],
    },
  ],
  2023: [
    {
      month: "jan",
      budget: [
        {
          day: 1,
          note: "Beer",
          spent: 20,
        },
      ],
    },
    {
      month: "feb",
      budget: [],
    },
    {
      month: "mar",
      budget: [],
    },
    {
      month: "apr",
      budget: [],
    },
    {
      month: "may",
      budget: [],
    },
    {
      month: "jun",
      budget: [],
    },
    {
      month: "jul",
      budget: [],
    },
    {
      month: "aug",
      budget: [],
    },
    {
      month: "sep",
      budget: [],
    },
    {
      month: "oct",
      budget: [],
    },
    {
      month: "nov",
      budget: [],
    },
    {
      month: "dec",
      budget: [],
    },
  ],
};

export default function BigASM() {
  const [years, setYears] = useState([]);

  const [year, setYear] = useState();

  useEffect(() => {
    for (const [key, value] of Object.entries(items)) {
      setYears([...years, key]);
    }

    items[2022].forEach((item) => {
      item.percent = Math.floor(Math.random() * 100);
    });
  }, []);

  console.log(years);

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.lightContainer1}>
          <button>ADD NEW EXPENSE</button>
        </div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="date"
              onChange={(e) => {
                console.log(e.target.value);

                console.log(new Date(e.target.value).getFullYear());
              }}
            />
            <button type="submit">lksjdfgldk</button>
          </form>
        </div>
        <div className={styles.lightContainer2}>
          <div className={styles.yearSelection}>
            <p className={styles.yearTitle}>Filter by year</p>
            <div className={styles.yearSelect}>
              <select name="years" id="years">
                {years.map((year, index) => (
                  <option value={year} key={index}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.chartContainer}>
            {items[2022].map((item, index) => (
              <MonthItem
                key={index}
                month={item.month}
                percent={item.percent}
              />
            ))}
          </div>
          <BudgetItem
            year={2020}
            month={"Jan"}
            date={5}
            note={"DMM"}
            spent={100}
          />
        </div>
      </div>
    </div>
  );
}

function MonthItem({ month, percent }) {
  return (
    <div className={styles.chartItem}>
      <div className={styles.chartBar}>
        <div
          className={styles.blueChart}
          style={{ height: `${percent}%` }}
        ></div>
      </div>
      <p>{month}</p>
    </div>
  );
}

function BudgetItem({ year, month, date, note, spent }) {
  return (
    <div className={styles.buyItem}>
      <div className={styles.buyTime}>
        <div className={styles.month}>{month}</div>
        <div className={styles.year}>{year}</div>
        <div className={styles.date}>{date}</div>
      </div>
      <div className={styles.buyDescription}>
        <div className={styles.descriptionText}>{note}</div>
        <div className={styles.buyPrice}>${spent}</div>
      </div>
    </div>
  );
}
