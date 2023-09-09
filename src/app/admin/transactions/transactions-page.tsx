"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { adminTrans } from "@/lib/Context";
import { useAtom } from "jotai";

// const data: Payment[] = [
//   {
//     id: "m5gr84i9",
//     amount: 316,
//     txnType: "credit",
//     txnDesc: "ken99@yahoo.com",
//   },
//   {
//     id: "3u1reuv4",
//     amount: 242,
//     txnType: "credit",
//     txnDesc: "Abe45@gmail.com",
//   },
//   {
//     id: "derv1ws0",
//     amount: 837,
//     txnType: "debit",
//     txnDesc: "Monserrat44@gmail.com",
//   },
//   {
//     id: "5kma53ae",
//     amount: 874,
//     txnType: "credit",
//     txnDesc: "Silas22@gmail.com",
//   },
//   {
//     id: "bhqecj4p",
//     amount: 721,
//     txnType: "credit",
//     txnDesc: "carmella@hotmail.com",
//   },
//   {
//     id: "5kma63ae",
//     amount: 874,
//     txnType: "credit",
//     txnDesc: "Silas22@gmail.com",
//   },
//   {
//     id: "bhqec34p",
//     amount: 721,
//     txnType: "credit",
//     txnDesc: "carmella@hotmail.com",
//   },
// ]

export type Payment = {
  // id: string
  amount: number;
  accountNumber: string;
  beneficiaryName: string;
  merchant: string;
  narration: string;
  realDate: any;
  postingRecordType: "1" | "2" | "3" | "4" | "5" | "6";
  postingType: string;
  referenceNumber: string;
  balanceAfter: number;
};

export const columns: ColumnDef<Payment>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={table.getIsAllPageRowsSelected()}
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorFn: (row, index) => index+1,
header: "S/N"

  },
  {
    accessorKey: "referenceNumber",
    header: "Reference Number",
    cell: ({ row }) => <div>{row.getValue("referenceNumber")}</div>,
  },
  {
    accessorKey: "postingRecordType",
    header: "Txn. Type",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("postingRecordType")===2?"Credit":"Debit"}</div>
    ),
  },
  {
    accessorKey: "realDate",
    header: "Date & Time",
    cell: ({ row }) => <div>{row.getValue("realDate")}</div>,
  },
  {
    accessorKey: "beneficiaryName",
    header: "Beneficiary Name",
    cell: ({ row }) => <div>{row.getValue("beneficiaryName")}</div>,
  },
  {
    accessorKey: "accountNumber",
    header: "Account Number",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("accountNumber")}</div>
    ),
  },

  {
    accessorKey: "narration",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Narration <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("narration")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(amount);

      return (
        <div
          className={`text-right font-medium ${
            row.getValue("postingRecordType") === 2
              ? "text-green-700"
              : "text-red-700"
          }`}
        >
          {row.getValue("postingRecordType") === 2 ? "+" : "-"}
          {formatted}
        </div>
      );
    },
  },
  {
    accessorKey: "balanceAfter",
    header: () => <div className="text-right">Balance After</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("balanceAfter"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "NGN",
      }).format(amount);

      return <div>{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <div className=" text-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() =>
                  navigator.clipboard.writeText(payment.referenceNumber)
                }
              >
                Copy Txn. ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {/* <DropdownMenuItem>View customer</DropdownMenuItem> */}
              <DropdownMenuItem>View Txn. details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

export function TransactionsPage() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [getAdminTrans, setGetAdminTrans] = useAtom(adminTrans);
  const data: Payment[] = getAdminTrans && getAdminTrans.postingsHistory;

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="text-2xl font-bold mb-2">Transactions </div>
      <hr />
      <div className="flex items-center py-4 mt-4">
        <Input
          placeholder="Filter Txn. Ref. no..."
          value={(table.getColumn("referenceNumber")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("referenceNumber")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-[#2E052E]">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row,index) => (
                <TableRow className="odd:bg-green-50/50"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  { row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getPaginationRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) displayed.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
