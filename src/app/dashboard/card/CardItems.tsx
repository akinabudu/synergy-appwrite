import { Card } from "./Card";

export default function CardItems() {
  return (
    <div className="flex md:flex-row flex-col gap-3 w-full">
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
  )
}
