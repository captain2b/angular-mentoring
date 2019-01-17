export interface ICourseItem {
  id: number | string;
  title: string;
  creationDate?: Date;
  duration?: number;
  description: string;
  topRated?: boolean;
}
export class CourseItemModel implements ICourseItem{
  id: number = 1;
  title: string = 'Course Title';
  description: string = 'Course Description';
}
