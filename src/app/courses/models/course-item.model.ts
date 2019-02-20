export interface ICourseItem {
  id: string;
  title: string;
  creationDate?: Date;
  duration?: number;
  description: string;
  topRated?: boolean;
}
export class CourseItemModel implements ICourseItem{
  id: string = '1';
  title: string = 'Course Title';
  description: string = 'Course Description';
}
