export interface BillModel {
  id: string;
  userId: string;
  meetingId: string;
  available: string[];
  items: BillItemModel[];
}

export interface BillItemModel {
  title: string;
  count: string;
  sum: number;
  orderBy: string[];
}
