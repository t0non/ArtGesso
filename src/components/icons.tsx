import Image from 'next/image';

export function WhatsappIcon({
  className,
  width = 24,
  height = 24,
}: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <Image
      src="/images/iconedowhatsapp.png"
      alt="WhatsApp"
      width={width}
      height={height}
      className={className}
    />
  );
}
