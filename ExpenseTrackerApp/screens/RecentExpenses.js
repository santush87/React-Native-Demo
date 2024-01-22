import { useContext, useEffect } from "react";
import { ExpensesContext } from "../store/expenses-context";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";

export default function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function theExpenses() {
      const expenses = await getExpenses();
      expensesCtx.setExpenses(expenses);
    }

    theExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText={"No expenses registered for the last 7 days!"}
    />
  );
}
