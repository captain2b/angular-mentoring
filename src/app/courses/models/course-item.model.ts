export interface ICourseItem {
  id: number;
  title: string;
  creationDate?: Date;
  duration?: number;
  description: string;
}
export class CourseItemModel implements ICourseItem{
  id: number = 1;
  title: string = 'Course Title';
  description: string = 'Course Description';
}
