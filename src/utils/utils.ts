import { Post } from "../api/types";

export function paginateByQty(qty: number, data: Post[]): Post[][] {
  const result: Post[][] = [];

  for (let i = 0; i < data.length; i += qty) {
    result.push(data.slice(i, i + qty));
  }

  return result;
}
