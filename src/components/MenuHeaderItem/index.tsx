import { ComponentType } from "react";
import { IconBaseProps } from "react-icons/lib";
import { Container } from "./styles";

interface IProps {
  title: string;
  icon: ComponentType<IconBaseProps>;
  menu?: string;
  active(): void;
}

function MenuHeaderItem(props: IProps) {
  const { active, icon: Icon, title, menu } = props;

  return (
    <Container title={title} onClick={active}>
      <Icon />
      <span>{menu}</span>
    </Container>
  );
}

export default MenuHeaderItem;
