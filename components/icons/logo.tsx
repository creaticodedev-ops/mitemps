import clsx from "clsx";

export default function LogoIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MI TEMPS"
      viewBox="0 0 32 32"
      {...props}
      className={clsx("h-4 w-4 text-white", props.className)}
    >
      <path d="M2 2h28v1.5H2zM2 2h1.5v28H2zM8 15.2h16v1.5H8z" fill="white" />
    </svg>
  );
}
