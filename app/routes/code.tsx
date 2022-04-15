import { useSearchParams } from '@remix-run/react';
import { QRCodeSVG } from 'qrcode.react';
import { useWindowSize } from '~/hooks/useWindowSize';

export default function Code() {
  const size = useWindowSize();
  const [params] = useSearchParams();

  return (
    <div className="bg-slate-700 p-4 border border-gray-600">
      <h1 className="font-header mb-2">Twój kod QR:</h1>
      <QRCodeSVG
        style={{ border: '4px solid white' }}
        value={`P|${params.get('phone')}|${params.get('code')}`}
        size={Math.min(size.width, size.height, 757) - 128}
        level="H"
      />
    </div>
  );
}
