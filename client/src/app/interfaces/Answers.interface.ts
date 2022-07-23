export interface Answers {
  project_type: string;
  address: {
    state: string;
    county?: string;
    neighborhood?: string;
    zip?: string;
    latitude: number;
    longitude: number;
  };
  property_type: 'comunal/ejidal' | 'privada' | 'pública';
  legal: boolean;
  past_cultivate: boolean;
  conflict?: boolean;
  natural_disasters: boolean;
  wetland: boolean;
  natural_wetland?: boolean;
  pasture?: boolean;
  agricultural_pasture?: boolean;
  has_shapefile: boolean;
  shapefile?: '';
  vegetation: boolean;
  tree_percentage: number;
  land_use: string;
  disuse_months?: number;
  approved: boolean;
  tree_species?: string[];
  months_to_start?: number;
  past_project: boolean;
}
