import { AmountCard } from "./Card";

export default function CardItems() {
  return (
    <div className="flex md:flex-row flex-col justify-around gap-3 w-full my-5">
          <AmountCard
            title="Savings"
            amount={"103,000"}
            description="Balance Available"
          />
          <AmountCard
            title="Loan"
            amount={"-10,000"}
            description="Amount to be Paid"
          />
          <AmountCard
            title="Investment"
            amount={"50,000"}
            description="Capital Invested"
          />
        </div>
  )
}
