import { ReactNode } from "react";

type TypographyProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: ReactNode;
  className?: string;
};

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
}: TypographyProps) => {
  const Tag = variant;

  return <Tag className={className}>{children}</Tag>;
};

export default Typography;
