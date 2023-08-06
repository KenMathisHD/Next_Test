import { NextResponse } from "next/server";

import ledger from "../../../../data/books/j_ledger";

export function GET(request: Request) {
  return NextResponse.json([...ledger]);
}
