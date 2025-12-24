import React from "react";
import MainLayout from "../components/Layouts/MainLayout";

import CardBalance from "../components/Fragments/CardBalance";
import CardGoals from "../components/Fragments/CardGoals";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction";
import CardStatistic from "../components/Fragments/CardStatistic";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown";

import {
  transactions,
  bills,
  expensesBreakdowns,
  balances,
  goals,
  expensesStatistics,
} from "../data";

function Dashboard() {
  return (
    <MainLayout>
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-12
          gap-6
        "
      >
        {/* ===== ROW 1 ===== */}
        <div className="lg:col-span-4">
          <CardBalance data={balances} />
        </div>

        <div className="lg:col-span-4">
          <CardGoals data={goals} />
        </div>

        <div className="lg:col-span-4">
          <CardUpcomingBill data={bills} />
        </div>

        {/* ===== ROW 2 & 3 ===== */}
        <div className="lg:col-span-5 lg:row-span-2">
          <CardRecentTransaction data={transactions} />
        </div>

        <div className="lg:col-span-7">
          <CardStatistic data={expensesStatistics} />
        </div>

        <div className="lg:col-span-7">
          <CardExpenseBreakdown data={expensesBreakdowns} />
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;
