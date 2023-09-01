"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardProps {
  title: string;
  amount: string;
  description: string;
  symbol?: string;
}

export const AmountCard = ({
  title = "Savings",
  amount = "-",
  description = "Balance Available",
  symbol = "₦",
}: CardProps) => {
  return (
    <Card className="w-full md:max-w-1/6 h-fit">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {symbol}
      </CardHeader>
      <CardContent>
        <div
          className={`text-2xl font-bold ${
            parseInt(amount) >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {amount}
        </div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};
