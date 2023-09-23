import { HttpException, Injectable } from '@nestjs/common';
import { COURSES } from './courses.mock';
import { title } from 'process';

@Injectable()
export class CoursesService {
  courses = COURSES;

  getCourses(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.courses);
    });
  }

  getCourse(courseId: string): Promise<any> {
    let id = Number(courseId);
    return new Promise((resolve) => {
      const course = this.courses.find((course) => course.id === id);
      if (!course) {
        throw new HttpException('No course found', 404);
      }
      resolve(course);
    });
  }

  addCourse(coursename: string): Promise<any> {
    return new Promise((resolve) => {
      this.courses.push({
        id: this.courses.length + 1,
        title: coursename,
        description: 'Some new course',
        author: 'some new author',
        url: 'some new URL',
      });
      resolve(this.courses);
    });
  }
}
