import clsx from "clsx";

function Grid(props: React.ComponentProps<"ul">) {
  return (
    <ul
      {...props}
      className={clsx("grid grid-flow-row gap-x-6 gap-y-16", props.className)}
    >
      {props.children}
    </ul>
  );
}

function GridItem(props: React.ComponentProps<"li">) {
  return (
    <li {...props} className={clsx("min-w-0", props.className)}>
      {props.children}
    </li>
  );
}

Grid.Item = GridItem;

export default Grid;
