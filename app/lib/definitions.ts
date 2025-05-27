export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};
export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string | null; // image_url can be null if no image is provided
};
export type CustomerField = keyof Customer;

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string | null;
  total_invoices: number;
  total_paid: number;
  total_pending: number;
};

export type InvoiceForm = {
  customer_id: string;
  amount: number;
  date: string;
  status: 'pending' | 'paid';
};

export type InvoicesTable = Invoice & {
  customer_name: string;
  customer_email: string;
};

export type LatestInvoiceRaw = {
  id: string;
  amount: number;
  date: string;
  customer_name: string;
  customer_email: string;
};

export type Revenue = {
  month: string;
  revenue: number;
};