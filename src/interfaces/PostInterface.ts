interface Title {
  rendered: string;
}

interface Content {
  protected: boolean;
  rendered: string;
}

export interface PostInterface {
  id: number;
  author: string;
  title: Title;
  content: Content;
}
