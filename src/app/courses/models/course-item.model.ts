export interface ICourseItem {
  id: string;
  name: string;
  date?: Date;
  length?: number;
  description: string;
  isTopRated?: boolean;
  authors?: any[];
}
