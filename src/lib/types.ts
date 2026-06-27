export type SortDir = 'asc' | 'desc';

export type ApiResponse<T> = {
  ok: boolean;
  data?: T;
  error?: string;
};

export interface DemoUser {
  id: string;
  name: string;
  email: string;
  role: string;
  plan: string;
  avatar: string;
  joinedAt: string;
}

export interface Team {
  id: string;
  name: string;
  status: 'active' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface Client {
  id: string;
  name: string;
  contactEmail: string;
  industry: string;
  createdAt: string;
  updatedAt: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientId: string;
  clientName: string;
  dueDate: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue' | 'void';
  createdAt: string;
  updatedAt: string;
}

export interface Exception {
  id: string;
  invoiceId: string;
  invoiceNumber: string; // Denormalized for easier display
  clientId: string; // Denormalized for easier display
  clientName: string; // Denormalized for easier display
  type: 'missingApproval' | 'paymentRisk' | 'discrepancy' | 'unmatched';
  description: string;
  ownerId: string; // Refers to a DemoUser
  ownerName: string;
  dollarImpact: number;
  approvalStatus: 'pending' | 'approved' | 'rejected' | 'escalated';
  nextAction: string;
  priority: 'high' | 'medium' | 'low';
  status: 'open' | 'in_review' | 'resolved' | 'archived';
  createdAt: string;
  updatedAt: string;
}