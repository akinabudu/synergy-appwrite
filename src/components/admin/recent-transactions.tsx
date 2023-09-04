import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const data=[
  {
  trxId:"234jh234",
  avtrImage:"/avatar.png",
  avtrF:"AA",
  trxDesc:"Daily Contribution",
  trxtype:"credit",
  amount:"10,000",
},
{
  trxId:"5667456ugj",
  avtrImage:"/avatar.png",
  avtrF:"Bd",
  trxDesc:"Dev Levy",
  trxtype:"debit",
  amount:"1,000",
},
{
  trxId:"sdfg45462",
  avtrImage:"/avatar.png",
  avtrF:"BB",
  trxDesc:"Daily Contribution",
  trxtype:"credit",
  amount:"5,000",
},
]

export function RecentTransactions() {
  return (
    <div className="space-y-8">
    {data.map((item)=>(
        <div key={item.trxId} className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src={item.avtrImage} alt={item.trxId} />
          <AvatarFallback>{item.avtrF}</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{item.trxDesc}</p>
          <p className="text-sm text-muted-foreground">
            {item.trxId}
          </p>
        </div>
        <div className={`ml-auto font-medium ${item.trxtype ==="debit"?"text-red-500":"text-green-500"}`}>₦{item.amount}</div>
      </div>
    ))}
    </div>
  )
}
