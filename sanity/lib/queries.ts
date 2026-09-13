import {defineQuery} from 'groq'

export const COURSES_QUERY = defineQuery(`
  *[_type == "course" && defined(slug.current)] {
    _id,
    title,
    "slug": slug.current,
    summary,
    level,
    price,
    popular,
    studentCount,
    coverImage,
    "moduleCount": count(modules),
    "lessonCount": count(modules[].lessons[]),
    instructor->{name, "slug": slug.current, photo},
    category->{title, "slug": slug.current}
  }
`)

export const COURSE_SLUGS_QUERY = defineQuery(`
  *[_type == "course" && defined(slug.current)] {
    "slug": slug.current
  }
`)

export const COURSE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "course" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    summary,
    level,
    price,
    popular,
    studentCount,
    coverImage,
    learningOutcomes[],
    instructor->{name, "slug": slug.current, photo, expertise},
    category->{title, "slug": slug.current},
    modules[] {
      _key,
      title,
      summary,
      "lessons": lessons[]-> {
        _id,
        title,
        "slug": slug.current,
        duration,
        freePreview,
        poster
      }
    }
  }
`)

export const LESSON_SLUGS_QUERY = defineQuery(`
  *[_type == "lesson" && defined(slug.current)] {
    "slug": slug.current
  }
`)

export const LESSON_BY_SLUG_QUERY = defineQuery(`
  *[_type == "lesson" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    videoUrl,
    poster,
    duration,
    freePreview,
    studentCount,
    notes,
    keyPoints[],
    proTip,
    resources[],
    "course": *[_type == "course" && ^._id in modules[].lessons[]._ref][0] {
      _id,
      title,
      "slug": slug.current,
      instructor->{name, "slug": slug.current, photo, expertise},
      category->{title, "slug": slug.current},
      "modules": modules[] {
        _key,
        "index": count(@ < siblings),
        title,
        "lessons": lessons[]-> {
          _id,
          title,
          "slug": slug.current,
          duration,
          freePreview,
          poster
        }
      }
    }
  }
`)

export const INSTRUCTORS_QUERY = defineQuery(`
  *[_type == "instructor" && defined(slug.current)] {
    _id,
    name,
    "slug": slug.current,
    photo,
    expertise
  }
`)

export const INSTRUCTOR_SLUGS_QUERY = defineQuery(`
  *[_type == "instructor" && defined(slug.current)] {
    "slug": slug.current
  }
`)

export const INSTRUCTOR_BY_SLUG_QUERY = defineQuery(`
  *[_type == "instructor" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    photo,
    expertise,
    bio,
    "courses": *[_type == "course" && instructor._ref == ^._id && defined(slug.current)] {
      _id,
      title,
      "slug": slug.current,
      summary,
      level,
      coverImage,
      category->{title, "slug": slug.current}
    }
  }
`)

export const CATEGORIES_QUERY = defineQuery(`
  *[_type == "category" && defined(slug.current)] {
    _id,
    title,
    "slug": slug.current,
    description
  }
`)

export const CATEGORY_SLUGS_QUERY = defineQuery(`
  *[_type == "category" && defined(slug.current)] {
    "slug": slug.current
  }
`)

export const CATEGORY_BY_SLUG_QUERY = defineQuery(`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    "courses": *[_type == "course" && category._ref == ^._id && defined(slug.current)] {
      _id,
      title,
      "slug": slug.current,
      summary,
      level,
      coverImage,
      instructor->{name, "slug": slug.current, photo}
    }
  }
`)
