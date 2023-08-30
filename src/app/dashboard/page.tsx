import CardItems from "../../components/card/CardItems";
// import Chart from "./dashboardComponents/chartComponents/Chart";
import TransactionHistory from "../../components/transactions/TransctionHistory";

export default async function DashboardPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row">
        <CardItems/>
        {/* <Chart/> */}
      </div>
      <TransactionHistory/>
    </div>
  );
}
