import axios from 'axios';
import type { Lead, LeadCreate, LeadListResponse } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const leadsApi = {
  create: async (data: LeadCreate): Promise<Lead> => {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.detail || 'Failed to submit lead');
    }
    
    return result;
  },

  list: async (params?: {
    page?: number;
    page_size?: number;
    status?: string;
    search?: string;
    apiKey?: string;
  }): Promise<LeadListResponse> => {
    const headers = params?.apiKey ? { 'X-Admin-API-Key': params.apiKey } : {};
    const { page, page_size, status, search, apiKey, ...rest } = params || {};
    const response = await api.get<LeadListResponse>('/leads', {
      params: { page, page_size, status, search, ...rest },
      headers,
    });
    return response.data;
  },
};