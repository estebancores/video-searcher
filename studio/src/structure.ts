import {type StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Vertex')
    .items([
      S.listItem()
        .title('Courses')
        .schemaType('course')
        .child(S.documentTypeList('course').title('Courses')),
      S.listItem()
        .title('Lessons')
        .schemaType('lesson')
        .child(S.documentTypeList('lesson').title('Lessons')),
      S.listItem()
        .title('Instructors')
        .schemaType('instructor')
        .child(S.documentTypeList('instructor').title('Instructors')),
      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['course', 'lesson', 'instructor', 'category'].includes(item.getId()!)
      ),
    ])
