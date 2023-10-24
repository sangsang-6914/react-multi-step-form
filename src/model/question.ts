export type RequestForm = {
  formId: number;
  items: Question[];
  title: string;
};

export type Question = {
  formType: string;
  itemId: number;
  options: Options[];
  title: string;
};

type Options = {
  id: number;
  text: string;
};
