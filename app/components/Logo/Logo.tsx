import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/assets/images/logo.png"
      alt="Logo"
      width={120}
      height={120}
    />
  );
}