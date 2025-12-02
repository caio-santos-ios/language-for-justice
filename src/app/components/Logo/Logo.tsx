import Image from "next/image";



export default function Logo({width = 200, height = 200}: any) {
  return (
    <Image
      src="/assets/images/justice.png"
      alt="Logo"
      width={width}
      height={height}
    />
  );
}