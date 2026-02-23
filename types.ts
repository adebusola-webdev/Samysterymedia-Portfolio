import React from 'react';

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PortfolioItem {
  id: string;
  title: string;
  thumbnailUrl: string;
  videoUrl: string; 
}

export interface PortfolioSubCategory {
  id: string;
  title: string;
  items: PortfolioItem[];
}

export interface PortfolioCategory {
  id: string;
  title: string;
  // A category can have direct items OR subcategories (or both, technically, but we'll handle logic in component)
  items?: PortfolioItem[]; 
  subcategories?: PortfolioSubCategory[];
}

export interface ContactInfo {
  phone: string[];
  email: string;
  instagram: string;
  location: string;
}