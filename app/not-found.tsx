import LuxuryError from '@/components/ui/luxury-error';

export default function NotFound() {
  return (
    <LuxuryError
      variant="404"
      showRetry={false}
      showHome={true}
      showBack={true}
    />
  );
}
