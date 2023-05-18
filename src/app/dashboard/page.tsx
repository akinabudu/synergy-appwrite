import CardItems from "./dashboardComponents/cardComponents/CardItems";
import Chart from "./dashboardComponents/chartComponents/Chart";
import TransactionHistory from "./dashboardComponents/transactionsComponent/TransctionHistory";

export default async function DashboardPage() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col md:flex-row">
        <CardItems/>
        {/* <Chart/> */}
      </div>
      <TransactionHistory/>
    </div>
  );
}
