interface BlogContentProps {
  BlogID: string;
  SectionTitle?: string;
  Content: string;
}

interface BlogProps {
  ID: string;
  Title: string;
  Date: string;
  Description: BlogContentProps[];
}
