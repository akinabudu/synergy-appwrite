import { Card } from "./dashboardComponents/Card";

export default async function DashboardPage() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col w-full">
          <Card
            title="Savings"
            amount={"103,000"}
            description="Balance Available"
            color="text-green-500"
          />
          <Card
            title="Loan"
            amount={"-10,000"}
            description="Amount to be Paid"
            color="text-red-500"
          />
          <Card
            title="Investment"
            amount={"50,000"}
            description="Capital Invested"
            color="text-gray-800"
          />
        </div>
        <div>Insight</div>
      </div>
      <div>transaction</div>
    </div>
  );
}
