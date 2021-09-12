export interface Question {
  id: number;
  title: string;
  group: string;
  content: string;
}

export interface UserInfo {
  id: number;
  name: string;
  email: string;
  telephone: string;
  student_id: string;
  major: string;
  level: string;
  intro: string;
  wanted: string;
  qq: string;
}

export interface Submission {
  id: number;
  user_id: number;
  question_id: number;
  content: string;
  created_at: string;
}
